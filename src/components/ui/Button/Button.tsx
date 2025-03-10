import type { ButtonTypes } from '@/types/types';
import './Button.scss';

export const Button = ({ variant, size, content, onClick }: ButtonTypes) => {
  return (
    <button type="button" onClick={onClick} className={`button ${variant} ${size}`}>
      {content}
    </button>
  );
};
