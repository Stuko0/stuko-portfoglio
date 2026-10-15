#!/usr/bin/env python3
"""Download self-hosted woff2 files from Google Fonts and emit fonts.css."""
import os, re, urllib.request

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "fonts")
CSS_OUT = os.path.join(os.path.dirname(__file__), "..", "src", "styles", "fonts.css")
os.makedirs(OUT_DIR, exist_ok=True)

UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"

QUERIES = [
    "family=Bodoni+Moda:ital,wght@0,400..700;1,400..700",
    "family=EB+Garamond:ital,wght@0,400..600;1,400..500",
    "family=IM+Fell+English+SC",
    "family=IM+Fell+English:ital@0;1",
]

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()

blocks = []
for q in QUERIES:
    css = fetch(f"https://fonts.googleapis.com/css2?{q}&display=swap").decode("utf-8")
    # split into "/* subset */ @font-face {...}" chunks
    for m in re.finditer(r"/\*\s*([\w-]+)\s*\*/\s*(@font-face\s*\{[^}]+\})", css):
        subset, block = m.group(1), m.group(2)
        if subset not in ("latin", "latin-ext"):
            continue
        blocks.append((subset, block))

out_css, seen = [], {}
for subset, block in blocks:
    url_m = re.search(r"url\((https://[^)]+\.woff2)\)", block)
    if not url_m:
        continue
    url = url_m.group(1)
    fam_m = re.search(r"font-family:\s*'([^']+)'", block)
    if not fam_m:
        continue
    style_m = re.search(r"font-style:\s*(\w+)", block)
    weight_m = re.search(r"font-weight:\s*([\d\s]+);", block)
    fam = fam_m.group(1).replace(" ", "")
    style = style_m.group(1) if style_m else "normal"
    weight = (weight_m.group(1).strip() if weight_m else "400").replace(" ", "-")
    name = f"{fam}-{style}-{weight}-{subset}.woff2"
    path = os.path.join(OUT_DIR, name)
    if url not in seen:
        with open(path, "wb") as f:
            f.write(fetch(url))
        seen[url] = name
        print(f"downloaded {name} ({os.path.getsize(path)} bytes)")
    else:
        name = seen[url]
    face = block
    face = re.sub(r"src:\s*url\([^)]+\)\s*format\('woff2'\);",
                  f"src: url('/fonts/{name}') format('woff2');", face)
    face = re.sub(r"\n\s*unicode-range:[^;]+;", "", face)
    out_css.append(face.strip())

with open(CSS_OUT, "w") as f:
    f.write("/* Self-hosted Google Fonts (Bodoni Moda, EB Garamond, IM Fell) */\n")
    f.write("\n".join(out_css) + "\n")
print(f"wrote {CSS_OUT} with {len(out_css)} @font-face rules")
