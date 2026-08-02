import { Moon, CircleCheck, Sun } from 'lucide-react';

type HeaderProps = {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 p-2.5 rounded-full text-white shadow-md shadow-indigo-500/25 dark:text-black transition-colors duration-300">
          <CircleCheck />
        </div>
        <div className="dark:text-white">
          <h1 className="text-2xl font-medium tracking-tight transition-colors duration-300">
            Tasks
          </h1>
          <p className="text-sm text-gray-500">
            Stay focused, one task at a time.
          </p>
        </div>
      </div>
      <div
        onClick={onToggleTheme}
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-neutral-300 p-2.5 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer text-gray-500 hover:text-black dark:bg-black dark:text-white dark:hover:text-white dark:border-slate-700 dark:bg-slate-900"
      >
        <Sun
          size={20}
          className={`absolute transition-all duration-300 ${
            theme === 'light'
              ? 'translate-y-0 opacity-100'
              : '-translate-y-6 opacity-0'
          }`}
        />

        <Moon
          size={20}
          className={`absolute transition-all duration-300 ${
            theme === 'dark'
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
          }`}
        />
      </div>
    </div>
  );
};
export default Header;
