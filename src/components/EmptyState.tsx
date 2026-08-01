import { type LucideIcon } from 'lucide-react';

type EmptyStateProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const EmptyState = ({ title, description, icon: Icon }: EmptyStateProps) => {
  return (
    <div className="w-full border border-neutral-300 shadow-xs rounded-xl py-14 px-6 flex flex-col items-center justify-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-500">
        <Icon size={24} />
      </div>
      <p className="font-medium text-sm">{title}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
};
export default EmptyState;
