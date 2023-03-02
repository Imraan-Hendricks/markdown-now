import { clsx } from 'clsx';
import { MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
}

export function Button({
  children,
  className,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(
        'bg-slate-700 hover:bg-slate-900 text-gray-200 text-button py-2 px-4 rounded flex items-center justify-center',
        className
      )}
      onClick={onClick}>
      {children}
    </button>
  );
}
