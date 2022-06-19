import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, AppRouter, MainContainer, Footer, Aside } from './components';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <MainContainer>
          <AppRouter />
          <Aside />
        </MainContainer>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;
