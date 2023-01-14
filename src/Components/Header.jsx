import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/Header.css'
import lsLogo from '../images/lsLogo.jpg'
import { Fade } from 'react-reveal';

class Header extends Component {
  render() {
    return (
      <Fade  top>
      <header>
        <Link className='lsLogo' to='/'>
        <img  className='lsLogo' src={ lsLogo } alt='lsLogo' />
        </Link>
        <Link  id='about' to="/about"> About </Link>
        <Link id='skills' to='/skills'> Skills </Link>
        <Link id='projects' to="/projects"> Portfolio </Link>
        <Link id='contact' to="/contact"> Contact </Link>
      </header>
      </Fade>
    )
  }
}

export default Header;