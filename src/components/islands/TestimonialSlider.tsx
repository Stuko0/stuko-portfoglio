import { useState } from 'preact/hooks';
import { testimonials } from '../../data/content';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div class="section-testimonial-inner">
      <div class="testimonial-wrap">
        <p class="testimonial-quote" key={index}>
          {t.quote}
        </p>
        <div class="testimonial-author">
          <div class="avatar" aria-hidden="true">
            {t.initial}
          </div>
          <div class="author-meta">
            <div class="name">{t.name}</div>
            <div class="role">{t.role}</div>
          </div>
        </div>
      </div>

      <div class="testimonial-nav">
        <button type="button" onClick={prev} aria-label="Previous testimonial">
          ←
        </button>
        <button type="button" onClick={next} aria-label="Next testimonial">
          →
        </button>
      </div>

      <div class="testimonial-dots" role="tablist">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            class={i === index ? 'active' : ''}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
