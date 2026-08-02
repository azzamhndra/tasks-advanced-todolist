import EmptyState from './EmptyState';
import { CheckCircle, ListTodo, SearchX } from 'lucide-react';
import TodoItem from './TodoItem';
import type { Todo } from '../types/Todo';
import type { FilterOptions } from '../types/FilterOptions';

type TodoListProps = {
  todos: Todo[];
  onEdit: (id: number, title: string) => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  visibleTodos: Todo[];
  selectedFilter: FilterOptions;
  search: string;
};

const TodoList = ({
  todos,
  visibleTodos,
  selectedFilter,
  search,
  onEdit,
  onDelete,
  onToggle,
}: TodoListProps) => {
  const isSearching = search.trim() !== '';
  const isEmpty = visibleTodos.length === 0;

  if (todos.length === 0) {
    return (
      <EmptyState
        title="Your day is a blank page"
        description="Add your first task above to get started."
        icon={ListTodo}
      />
    );
  }

  if (selectedFilter === 'active' && !isSearching && isEmpty) {
    return (
      <EmptyState
        title="All caught up"
        description="You have no active tasks. Enjoy the moment."
        icon={CheckCircle}
      />
    );
  }

  if (selectedFilter === 'completed' && !isSearching && isEmpty) {
    return (
      <EmptyState
        title="Nothing completed yet"
        description="Finish a task and it will show up here."
        icon={CheckCircle}
      />
    );
  }

  if (isEmpty) {
    return (
      <EmptyState
        title="No matching tasks"
        description="Try a different keyword or clear the search."
        icon={SearchX}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {visibleTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
export default TodoList;
