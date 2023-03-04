import { ContainerMain } from './shared/components/ContainerMain';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { GlobalStyle } from './shared/styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerMain />
      <Footer />
    </>
  );
}

export default App;
