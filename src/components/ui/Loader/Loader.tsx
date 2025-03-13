import MagicLogo from '@/assets/magic-logo.svg?react';
import './Loader.scss';

interface Props {
  size?: string;
}

export const Loader = ({ size }: Props) => {
  return (
    <div className="loader-container">
      <MagicLogo className={`loader ${size ?? 'large'}`} />
    </div>
  );
};
