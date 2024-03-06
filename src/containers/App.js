import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Packs from '../components/Packs.jsx';
import Nosotros from "../components/Nosotros";
import Presupuestar from "../components/Presupuestar";
import Contacto from '../components/Contacto.jsx';
import InfoPago from '../components/InfoPago';
import InfoPagoVCP from '../components/InfoPagoVCP.jsx';

function App() {
  
  return (
    <div className="app">
      <Nav/>
      <Switch >
        <Route exact path="/"> 
          <Home/>
        </Route>
        <Route path="/packs">
          <Packs/>
        </Route> 
        <Route path="/condiciones"> 
          <Nosotros/>
        </Route>
        <Route path="/infopagos"> 
          <InfoPago/>
        </Route>
        <Route path="/infopagosvcp"> 
          <InfoPagoVCP/>
        </Route>
        <Route path="/contacto"> 
          <Contacto/>
        </Route>
        <Route path="/presupuestar"> 
          <Presupuestar/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
