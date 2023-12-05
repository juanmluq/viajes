import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
    <nav className="nav nav-tabs" >
                    
      <li class="nav-item">
        <a class="nav-link " aria-current="page" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/packs">Salidas</a>
      </li>
   
      <li class="nav-item">
        <a class="nav-link" href="/contacto">Contacto</a>
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
