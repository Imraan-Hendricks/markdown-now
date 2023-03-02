import { clsx } from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  variant?: 'contained' | 'outlined';
}

export function Button({
  children,
  className,
  onClick,
  variant = 'contained',
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(
        variant === 'contained' &&
          'border border-transparent bg-slate-700 hover:bg-slate-900 text-gray-200 text-button py-2 px-4 rounded flex items-center justify-center',
        variant === 'outlined' &&
          'border border-slate-700 hover:bg-slate-100 text-slate-700 text-button py-2 px-4 rounded flex items-center justify-center',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
