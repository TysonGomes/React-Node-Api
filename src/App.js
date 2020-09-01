import React ,{Component} from 'react';
import Header from './components/header';
//import Index from './pages/listatodos/';
import Routes from  './routes';
//import Home from './pages/home/'
import "./styles.css";



const App =()=>(
  <div className="App">
      <Header/>
      <Routes/>
    </div>
  );




export default App;
