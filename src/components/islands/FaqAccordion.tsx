import { useState } from 'preact/hooks';
import { faqs } from '../../data/content';

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <div class="faqs-wrap">
        {faqs.map((faq, i) => {
          const active = open === i;
          return (
            <div
              key={faq.q}
              class={`faq-item${active ? ' active' : ''}`}
              onClick={() => setOpen(active ? -1 : i)}
            >
              <button type="button" class="faq-head" aria-expanded={active}>
                {faq.q}
                <span class="icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div class="faq-body" aria-hidden={!active}>
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div class="ask-me">
        <div class="text-body-2 fw-medium text">Do you have any other questions?</div>
        <a href="#contact" class="text-body-2 fw-medium link">
          Ask me directly
        </a>
      </div>
    </>
  );
}
