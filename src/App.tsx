import {Header} from './components/Header';
import {GlobalStyle} from './GlobalStyle.style';
import {MatchResults} from './modules/MatchResults';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MatchResults />
    </>
  );
}

export default App;
