import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Menus from '../components/Menus.jsx';
import Nosotros from "../components/Nosotros"
import Presupuestar from "../components/Presupuestar"
import Eventos from '../components/Eventos';
import InfoPago from '../components/InfoPago';

function App() {
  
  return (
    <div className="app">
      <Nav/>

      <Switch >
      <Route exact path="/"> 
        <Home/>
        </Route>

      <Route path="/menus">
        <Menus/>
      </Route> 
      
      <Route path="/nosotros"> 
        <Nosotros/>
      </Route>

      <Route path="/eventos"> 
        <Eventos/>
      </Route>

      <Route path="/infopagos"> 
        <InfoPago/>
      </Route>

      <Route path="/presupuestar"> 
        <Presupuestar/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
