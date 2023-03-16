import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav nav-tabs" >
                    
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/menus">Menus</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/nosotros">Nosotros</a>
      </li>
      
      <li class="nav-item" >
        <a class="nav-link" href="/eventos">Eventos</a>
      </li>

      <li class="nav-item" >
        <a class="nav-link" href="/infopagos">Abonar</a>
      </li>

      <div className='navBtn'>  
        <Link to="/presupuestar" >
        <button className='btn'>Presupuestar</button>
        </Link>
        </div>
        
    </nav>
  );
};

export default Nav;
