import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Header, AppRouter, MainContainer, Footer, Aside } from './components';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter basename='/user-app/'>
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
