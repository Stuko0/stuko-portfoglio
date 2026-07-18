import { useState } from 'preact/hooks';

interface Props {
  data: string[];
}

export default function BudgetChooser({ data }: Props) {
  const [selected, setSelected] = useState(1);

  return (
    <div class="pricing-list list-choose" role="listbox" aria-label="Budget range">
      {data.map((opt, i) => (
        <button
          key={opt}
          type="button"
          role="option"
          aria-selected={selected === i}
          class={`item text-body-2 choose-item${selected === i ? ' active' : ''}`}
          onClick={() => setSelected(i)}
        >
          {opt}
        </button>
      ))}
      <input type="hidden" name="budget" value={data[selected]} />
    </div>
  );
}
