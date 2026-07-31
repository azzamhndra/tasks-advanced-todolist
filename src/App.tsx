import Header from './components/Header';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 mx-auto">
      <div className="mx-auto max-w-[900px] flex w-full flex-col gap-6">
        <Header />
        <TodoForm />
      </div>
    </div>
  );
};

export default App;
