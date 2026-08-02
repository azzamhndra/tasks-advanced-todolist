import { type LucideIcon } from 'lucide-react';

type EmptyStateProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const EmptyState = ({ title, description, icon: Icon }: EmptyStateProps) => {
  return (
    <div className="w-full border border-neutral-300 dark:border-slate-700 dark:bg-slate-900 shadow-xs rounded-xl py-14 px-6 flex flex-col items-center justify-center gap-3 duration-300 transition-colors">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500 dark:bg-indigo-900">
        <Icon size={24} className="dark:text-slate-300" />
      </div>
      <p className="font-medium text-sm dark:text-slate-300 duration-300 transition-colors">
        {title}
      </p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};
export default EmptyState;
