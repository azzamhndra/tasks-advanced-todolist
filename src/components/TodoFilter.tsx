import { Search } from 'lucide-react';
import { useState } from 'react';

type Filter = 'All' | 'Active' | 'Completed';

const FILTER_OPTIONS: Filter[] = ['All', 'Active', 'Completed'];

const BUTTON_BASE_CLASS =
  'rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200';

const BUTTON_ACTIVE_CLASS = 'bg-indigo-500 shadow-sm text-white';

const TodoFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('All');

  return (
    <div className="w-full flex gap-2 justify-between items-center">
      <div className="flex gap-3 items-center border border-neutral-300 shadow-sm p-2 rounded-xl flex-1">
        <Search size={20} className="text-neutral-400" />
        <input
          type="text"
          className="appearance-none p-0 border-none focus:outline-none flex-1"
        />
      </div>
      <div className="flex gap-1 border border-neutral-300 shadow-sm p-1 rounded-xl">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelectedFilter(option)}
            className={`${BUTTON_BASE_CLASS} ${selectedFilter === option ? BUTTON_ACTIVE_CLASS : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
export default TodoFilter;
