import { useState, type ChangeEvent } from 'react';

import { Pencil, Trash, X } from 'lucide-react';
import type { Todo } from '../types/Todo';

type TodoItemProps = {
  todo: Todo;
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState('');

  const handleEdit = (todoTitle: string) => {
    setTask(todoTitle);
    setIsEditing(true);
  };

  return (
    <div className="group flex w-full border border-neutral-300 shadow-sm px-4 py-3.5 rounded-2xl hover:-translate-y-0.5 duration-200 gap-3">
      <div className="flex gap-4 items-center flex-1">
        <button className="rounded-full border-2 border-neutral-300 h-6 w-6 hover:border-2 hover:border-indigo-500 cursor-pointer duration-200"></button>
        {isEditing ? (
          <input
            autoFocus
            type="text"
            value={task}
            className="py-1 px-3 rounded-full focus:outline-1 focus:outline-indigo-500 flex-1 text-[0.85rem]"
            onBlur={() => setIsEditing(false)}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onEdit(todo.id, task);
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <button
            className="truncate text-left text-[0.95rem] text-neutral-800 flex-1"
            onClick={() => handleEdit(todo.title)}
          >
            {todo.title}
          </button>
        )}
      </div>
      <div className="flex gap-1">
        <button
          className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 p-1.5 hover:bg-indigo-100 text-neutral-500 hover:text-black rounded-lg duration-200 transition-all cursor-pointer flex items-center justify-center"
          onClick={() => setIsEditing(true)}
          type="button"
        >
          {isEditing ? <X size={15} /> : <Pencil size={15} />}
        </button>
        <button
          className="opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 p-1.5 hover:bg-red-100 text-neutral-500 hover:text-red-500 rounded-lg duration-200 transition-all cursor-pointer flex items-center justify-center"
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
