import { useState } from 'preact/hooks';

interface PricingPlan {
  id: string;
  name: string;
  blurb: string;
  price: string;
  unit: string;
  features: string[];
}

interface Props {
  data: PricingPlan[];
}

export default function PricingTabs({ data }: Props) {
  const [active, setActive] = useState(0);
  const plan = data[active];

  return (
    <>
      <div class="heading">
        <h2 class="text-display-2 fw-medium title">Engagement</h2>
        <div class="menu-tab style-1" role="tablist">
          {data.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              class={`item sub-heading${i === active ? ' active' : ''}`}
              aria-selected={i === active}
              onClick={() => setActive(i)}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div class="widget-content-tab">
        <div class="pricing-item" key={plan.id}>
          <div class="top">
            <h3 class="dot-before fw-medium title h6">{plan.name}</h3>
            <div class="text-body-1 fw-medium text">{plan.blurb}</div>
            <div class="price">
              <div class="text-display-2 fw-medium number">{plan.price}</div>
              <span>{plan.unit}</span>
            </div>
          </div>
          <div class="list-desc">
            {plan.features.map((f) => (
              <div key={f} class="desc text-body-1">
                {f}
              </div>
            ))}
          </div>
          <div class="bot-btn">
            <a href="#contact">
              Get Started
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <a href="#contact" class="custom-quote fw-medium h3">
        Custom Quote
        <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
