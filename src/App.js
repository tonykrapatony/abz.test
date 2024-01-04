import { useState } from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Users from './components/Users/Users';
import UsersRegistration from './components/UsersRegistration/UsersRegistration';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Banner />
        <Users data={data} setData={setData} page={page} setPage={setPage} />
        <UsersRegistration setData={setData}/>
      </MainContainer>
    </div>
  );
}

export default App;
