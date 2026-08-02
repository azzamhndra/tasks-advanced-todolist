import { Plus } from 'lucide-react';
import Button from './Button';
import { useState, type SubmitEvent } from 'react';

type TodoFormProps = {
  onAdd: (task: string) => void;
};

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTask = task.trim();
    if (!trimmedTask) return;
    onAdd(trimmedTask);
    setTask('');
  };

  return (
    <form
      className="w-full flex border border-neutral-300 shadow-sm p-4 justify-between items-center rounded-3xl dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300 duration-300 transition-colors"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
        name="task"
        className="py-2 px-4 focus:outline-none flex-1 placeholder:text-neutral-400 dark:placeholder:text-slate-400"
        placeholder="Add a new task..."
      />
      <Button
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!task.trim()}
      >
        <Plus />
        Add Task
      </Button>
    </form>
  );
};
export default TodoForm;
