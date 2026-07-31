import { Moon, CircleCheck } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 p-2.5 rounded-full text-white shadow-md shadow-indigo-500/25">
          <CircleCheck />
        </div>
        <div>
          <h1 className="text-2xl font-medium tracking-tight">Tasks</h1>
          <p className="text-sm text-gray-500">
            Stay focused, one task at a time.
          </p>
        </div>
      </div>
      <div className="border border-neutral-300 rounded-2xl shadow-lg p-2.5 hover:scale-105 transition duration-150 text-gray-500 hover:text-black cursor-pointer">
        <Moon size={20} />
      </div>
    </div>
  );
};
export default Header;
