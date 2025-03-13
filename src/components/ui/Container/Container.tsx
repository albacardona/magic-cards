import type { PropsWithChildren } from 'react';
import './Container.scss';

export const Container = ({ children }: PropsWithChildren) => {
  return <section className="container">{children}</section>;
};
