import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Routes from './Routes';
import { useRoutes } from 'react-router-dom';
import Menu from './Pages/Menu/Menu';


function App() {

  const Router = useRoutes(Routes)

  return (
    <div className="App">
      <Header></Header>
      <div className='App-main'>
        <div className='App-sidebar'>
          <Sidebar></Sidebar>
        </div>
        <div className='App-pages'>
          <Menu></Menu>
          {Router}
        </div>
      </div>

    </div>
  );
}

export default App;
