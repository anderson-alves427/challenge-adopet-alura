import { TelaInicial } from './pages/TelaInicial';
import { ContainerMain } from './shared/components/ContainerMain';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { GlobalStyle } from './shared/styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerMain>
        <TelaInicial />
      </ContainerMain>
      <Footer />
    </>
  );
}

export default App;
