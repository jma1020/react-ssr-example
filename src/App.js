import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';




const Home = loadable(()=> import(/* webpackChunkName: "Home" */ './component/Home'))
const Test = loadable(()=> import(/* webpackChunkName: "Test" */ './component/Test'))
const AppServer = loadable(()=> import(/* webpackChunkName: "AppServer" */ './AppServer'))


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/server' element={<AppServer />} />
      </Routes>
    </div>
  );
}

export default App;
