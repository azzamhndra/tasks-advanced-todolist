import EmptyState from './EmptyState';
import { ListTodo, SearchX } from 'lucide-react';
import TodoItem from './TodoItem';
import type { Todo } from '../types/Todo';

const filteredTodos = [];

type TodoListProps = {
  todos: Todo[];
  onEdit: (id: number, title: string) => void;
};

const TodoList = ({ todos, onEdit }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <EmptyState
        title="Your day is a blank page"
        description="Add your first task above to get started."
        icon={ListTodo}
      />
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <EmptyState
        title="No matching tasks"
        description="Try a different keyword or clear the search."
        icon={SearchX}
      />
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onEdit={onEdit} />
      ))}
    </div>
  );
};
export default TodoList;
