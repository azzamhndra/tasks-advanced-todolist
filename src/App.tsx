import { useEffect, useState } from 'react';

import Header from './components/Header';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import type { Todo } from './types/Todo';
import type { FilterOptions } from './types/FilterOptions';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (!savedTodos) return [];
    return JSON.parse(savedTodos);
  });

  const [filter, setFilter] = useState<FilterOptions>('all');

  const [search, setSearch] = useState('');

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [todos, theme]);

  let filteredTodos: Todo[] = todos;

  if (filter === 'active') {
    filteredTodos = todos.filter((todo) => todo.completed === false);
  } else if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed === true);
  }

  let visibleTodos: Todo[] = filteredTodos;

  if (search.trim() !== '') {
    visibleTodos = filteredTodos.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSearchTask = (value: string) => {
    setSearch(value);
  };

  const handleEditTask = (todoId: number, newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const handleAddTask = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTask = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleToggleTask = (todoId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (filter: FilterOptions) => {
    setFilter(filter);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-8 mx-auto transition-colors duration-300">
      <div className="mx-auto max-w-[900px] flex w-full flex-col gap-6">
        <Header theme={theme} onToggleTheme={handleToggleTheme} />
        <TodoForm onAdd={handleAddTask} />
        <TodoFilter
          onFilterChange={handleFilterChange}
          selectedFilter={filter}
          onSearchChange={handleSearchTask}
          search={search}
        />
        <TodoList
          todos={todos}
          visibleTodos={visibleTodos}
          selectedFilter={filter}
          search={search}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      </div>
    </div>
  );
};

export default App;
