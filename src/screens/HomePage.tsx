import { Container } from '@/components/ui/Container/Container';
import { Catalogue } from '@/components/Catalogue';
import { Header } from '@/components/Header/Header';
import './HomePage.scss';

export const HomePage = () => {
  // const { isLoading } = useCards();

  return (
    <Container>
      {/* {isLoading ? (
        <div className="loader-container">
          <Loader size="large" />
        </div>
      ) : ( */}
      <>
        <Header />
        <Catalogue />
      </>
      {/* )} */}
    </Container>
  );
};
