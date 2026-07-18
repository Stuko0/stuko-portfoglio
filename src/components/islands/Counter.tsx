import { useEffect, useRef, useState } from 'preact/hooks';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({ value, suffix = '', duration = 1800 }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div class="counter-row" ref={ref}>
      <span class="counter-value">{count}</span>
      {suffix && <span class="counter-suffix">{suffix}</span>}
    </div>
  );
}
