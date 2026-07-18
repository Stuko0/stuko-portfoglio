import { useState } from 'preact/hooks';
import { services } from '../../data/content';

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div class="services-wrap">
      {services.map((service, i) => {
        const active = open === i;
        return (
          <div
            key={service.id}
            class={`service-item${active ? ' active' : ''}`}
            onClick={() => setOpen(active ? -1 : i)}
          >
            <button type="button" class="service-head" aria-expanded={active}>
              <div class="icon-box">{String(service.id).padStart(2, '0')}</div>
              <div class="title-wrap">
                <div class="title">{service.title}</div>
                <span class="num">({String(service.id).padStart(2, '0')})</span>
              </div>
            </button>
            <div class="service-body" aria-hidden={!active}>
              <div class="list-text">
                {service.items.map((item) => (
                  <div key={item} class="text sub-heading">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
