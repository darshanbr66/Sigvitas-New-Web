import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  const base = "px-8 py-4 rounded-2xl font-medium transition-all active:scale-95";
  
  return (
    <button
      onClick={onClick}
      className={`
        ${variant === 'primary' 
          ? 'bg-primary-600 hover:bg-primary-700 text-white' 
          : 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50'}
        ${base} ${className}
      `}
    >
      {children}
    </button>
  );
}