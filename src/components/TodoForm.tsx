import { Plus } from 'lucide-react';
import Button from './Button';
import { useState, type ChangeEvent, type SyntheticEvent } from 'react';

const TodoForm = () => {
  const [task, setTask] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask('');
  };

  return (
    <form
      className="w-full flex border border-neutral-300 shadow-sm p-4 justify-between items-center rounded-3xl"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleChange}
        value={task}
        type="text"
        name="task"
        className="py-2 px-4 focus:outline-none flex-1 placeholder:text-neutral-400"
        placeholder="Add a new task..."
      />
      <Button
        type="submit"
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!task}
      >
        <Plus />
        Add Task
      </Button>
    </form>
  );
};
export default TodoForm;
