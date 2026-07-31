import Header from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 mx-auto">
      <div className="mx-auto max-w-[900px] flex w-full flex-col">
        <Header />
      </div>
    </div>
  );
};

export default App;
