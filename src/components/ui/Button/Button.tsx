import type { ButtonTypes } from '@/types/types';
import './Button.scss';

export const Button = ({ className, children, onClick }: ButtonTypes) => {
  return (
    <button type="button" onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};
