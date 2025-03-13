import {useState} from 'react';
import {Header} from './components/Header';
import {GlobalStyle} from './GlobalStyle.style';
import {MatchResults} from './modules/MatchResults';

function App() {
  const [filterStatus, setFilterStatus] = useState('all');

  return (
    <>
      <GlobalStyle />
      <Header setFilterStatus={setFilterStatus} />
      <MatchResults filterStatus={filterStatus} />
    </>
  );
}

export default App;
