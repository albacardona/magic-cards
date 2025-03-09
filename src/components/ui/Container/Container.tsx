import './Container.scss';

export const Container = ({ children }: React.PropsWithChildren) => {
  return <section className="container">{children}</section>;
};
