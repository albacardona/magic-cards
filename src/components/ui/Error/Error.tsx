import MagicLogo from '@/assets/magic-logo.svg?react';
import './Error.scss';

interface Props {
  error: Error;
}

export const ErrorMessage = ({ error }: Props) => {
  return (
    <div className="error-container">
      <MagicLogo className="logo" />
      <h2>{error.message}</h2>
    </div>
  );
};
