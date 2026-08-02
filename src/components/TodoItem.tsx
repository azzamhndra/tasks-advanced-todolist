import { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { Check, Pencil, Trash, X } from 'lucide-react';
import type { Todo } from '../types/Todo';

type TodoItemProps = {
  todo: Todo;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

const BASE_BUTTON_CLASS =
  'p-1.5 text-neutral-500 dark:text-neutral-400 rounded-lg duration-200 transition-all cursor-pointer flex items-center justify-center';

const TodoItem = ({ todo, onEdit, onDelete, onToggle }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState('');

  const handleEdit = (todoTitle: string) => {
    setTask(todoTitle);
    setIsEditing(true);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onEdit(todo.id, task);
      setIsEditing(false);
      return;
    }

    if (e.key === 'Escape') {
      setIsEditing(false);
      setTask('');
    }
  };

  return (
    <div className="group flex w-full border border-neutral-300 dark:border-slate-700 dark:bg-slate-900 shadow-sm px-4 py-3.5 rounded-2xl hover:-translate-y-0.5 duration-200 gap-3 duration-300 transition-colors">
      <div className="flex gap-4 items-center flex-1">
        <button
          className={`flex items-center justify-center rounded-full border-2 h-6 w-6 hover:border-2 cursor-pointer duration-300 ${todo.completed ? 'bg-indigo-500 border-transparent' : 'border-neutral-300 hover:border-indigo-500'} duration-300 transition-colors`}
          type="button"
          onClick={() => onToggle(todo.id)}
        >
          <Check
            size={14}
            className={`transition-all duration-200 ${
              todo.completed
                ? 'opacity-100 scale-100 text-white dark:text-slate-900'
                : 'opacity-0 scale-50'
            }`}
          />
        </button>
        {isEditing ? (
          <input
            autoFocus
            type="text"
            value={task}
            className="py-1 px-3 rounded-full focus:outline-1 focus:outline-indigo-500 flex-1 text-[0.85rem] dark:text-slate-300"
            onBlur={() => setIsEditing(false)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />
        ) : (
          <button
            className={`truncate text-left text-[0.95rem] flex-1 dark:text-slate-300 duration-300 transition-colors ${todo.completed ? 'line-through text-gray-400' : 'text-neutral-800 '}`}
            onClick={() => handleEdit(todo.title)}
          >
            {todo.title}
          </button>
        )}
      </div>

      <div className="flex gap-1">
        <button
          className={`${BASE_BUTTON_CLASS} hover:bg-indigo-100 dark:hover:bg-indigo-900/70 dark:hover:text-indigo-400  ${!isEditing ? 'opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0' : ''}`}
          onMouseDown={(e) => e.preventDefault()}
          type="button"
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
              setTask('');
            } else {
              handleEdit(todo.title);
            }
          }}
        >
          {isEditing ? <X size={15} /> : <Pencil size={15} />}
        </button>

        <button
          className={`${BASE_BUTTON_CLASS} hover:bg-red-100 dark:hover:bg-red-900/40 duration-300 transition-colors hover:text-red-500 ${!isEditing ? 'opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0' : ''}`}
          type="button"
          onClick={() => onDelete(todo.id)}
        >
          <Trash size={15} />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
