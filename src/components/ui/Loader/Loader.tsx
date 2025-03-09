import MagicLogo from '@/assets/magic-logo.svg?react';
import './Loader.scss';

interface Props {
  size?: string;
}

export const Loader = (props: Props) => {
  return <MagicLogo className={`loader ${props.size}`} />;
};
