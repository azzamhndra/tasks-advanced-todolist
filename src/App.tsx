import { useState } from 'react';

import Header from './components/Header';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import type { Todo } from './types/Todo';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 mx-auto">
      <div className="mx-auto max-w-[900px] flex w-full flex-col gap-6">
        <Header />
        <TodoForm onAdd={handleAddTask} />
        <TodoFilter />
        <TodoList todos={todos} onEdit={handleEditTask} />
      </div>
    </div>
  );
};

export default App;
