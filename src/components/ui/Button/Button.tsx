import type { ButtonTypes } from '@/types/types';
import './Button.scss';

export const Button = ({ variant, children, onClick }: ButtonTypes) => {
  return (
    <button type="button" onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
};
