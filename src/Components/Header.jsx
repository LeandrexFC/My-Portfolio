import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/Header.css'
import lsLogo from '../images/lsLogo.jpg'
import { Fade } from 'react-reveal';

class Header extends Component {
  render() {
    return (
      <header>
        <Fade  top>
          <div className='container'>
        <Link className='lsLogo' to='/'>
        <img  className='lsLogo' src={ lsLogo } alt='lsLogo' />
        </Link>
            <div className='menu-section on'>
              <div className='menu-toggle '>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
              </div>
              <nav>
                <ul>
                  <li>
                  <Link  id='about' to="/about"> About </Link>
                  </li>
                  <li>
                <Link id='skills' to='/skills'> Skills </Link>
                  </li>
                  <li>
                <Link id='projects' to="/projects"> Portfolio </Link>
                  </li>
                  <li>
                <Link id='contact' to="/contact"> Contact </Link>
                  </li>
                </ul>
                
              </nav>
            </div>
          </div>
        </Fade>
        </header>
      
    )
  }
}

export default Header;