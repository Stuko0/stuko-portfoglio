import { useState } from 'preact/hooks';
import { budgetOptions } from '../../data/content';

export default function BudgetChooser() {
  const [selected, setSelected] = useState(1);

  return (
    <div class="pricing-list list-choose" role="listbox" aria-label="Budget range">
      {budgetOptions.map((opt, i) => (
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
      <input type="hidden" name="budget" value={budgetOptions[selected]} />
    </div>
  );
}
