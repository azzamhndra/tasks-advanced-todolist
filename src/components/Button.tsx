type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-indigo-500 px-5 py-2.5 rounded-xl text-white cursor-pointer font-medium leading-none hover:brightness-110 disabled:hover:brightness-100 transition-all duration-200 inline-flex items-center gap-1 text-sm ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
