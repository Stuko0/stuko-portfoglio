# Stuko Portfoglio

Portfolio personal construido con **Astro Islands**, estética inspirada en *Alice: Madness Returns* y estructura visual basada en el template [Jayden](https://wpriverthemes.com/HTML/jayden/index.html).

## Stack

- **Astro 7** — arquitectura de islas (HTML estático + hidratación selectiva)
- **Preact** — islas interactivas ligeras (`client:load` / `client:visible`)
- **CSS custom** — paleta gótica victoriana (rojo sangre, oro, negro profundo)

## Arquitectura Islands

| Componente | Hidratación | Rol |
|---|---|---|
| `SidebarMenu` | `client:load` | Menú lateral + scroll spy |
| `LocalTime` | `client:load` | Reloj en vivo del hero |
| `Counter` | `client:visible` | Contadores animados |
| `ServicesAccordion` | `client:visible` | Acordeón de servicios |
| `TestimonialSlider` | `client:visible` | Slider de testimonios |
| `PricingTabs` | `client:visible` | Tabs de pricing |
| `FaqAccordion` | `client:visible` | FAQs |
| `BudgetChooser` | `client:visible` | Selector de presupuesto |
| `ScrollReveal` | `client:load` | Animaciones al scroll |

El resto de secciones se renderizan como HTML estático (cero JS en el cliente).

## Secciones (layout Jayden)

1. Hero + stats  
2. Experiences  
3. Selected Works (marquee)  
4. Services  
5. About + playground  
6. Tech Stack  
7. Testimonials  
8. Partners  
9. Work Process  
10. Awards  
11. Pricing  
12. FAQs  
13. Contact  
14. Footer CTA marquee  

## Comandos

```bash
cd ~/projects/stuko-portfoglio
npm run dev      # http://localhost:4321
npm run build    # producción → dist/
npm run preview  # previsualizar build
```

## Personalizar

Edita `src/data/content.ts` para cambiar textos, trabajos, servicios, pricing, etc.
La paleta vive en `src/styles/global.css` (`:root` CSS variables).
