import { useState } from 'preact/hooks';

interface Props {
  data: Array<{ title: string; items: string[] }>;
}

export default function ServicesAccordion({ data }: Props) {
  const [open, setOpen] = useState(0);

  return (
    <div class="services-wrap">
      {data.map((service, i) => {
        const active = open === i;
        return (
          <div
            key={i}
            class={`service-item${active ? ' active' : ''}`}
            onClick={() => setOpen(active ? -1 : i)}
          >
            <button type="button" class="service-head" aria-expanded={active}>
              <div class="icon-box">{String(i + 1).padStart(2, '0')}</div>
              <div class="title-wrap">
                <div class="title">{service.title}</div>
                <span class="num">({String(i + 1).padStart(2, '0')})</span>
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
