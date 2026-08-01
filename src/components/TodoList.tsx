import EmptyState from './EmptyState';
import { ListTodo, SearchX } from 'lucide-react';

const todos = ['Anjay'];
const filteredTodos = [];

const TodoList = () => {
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

  return <div>TodoList</div>;
};
export default TodoList;
