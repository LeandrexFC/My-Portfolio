import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/Header.css'
import lsLogo from '../images/lsLogo.jpg'

class Header extends Component {
  render() {
    return (
      <header>
        <Link  id='about' to="/about"> About </Link>
        <Link id='skills' to='/skills'> Skills </Link>
        <Link id='projects' to="/projects"> Portfolio </Link>
        <Link id='contact' to="/contact"> Contact </Link>
        <Link className='lsLogo' to='/'>
        <img  className='lsLogo' src={ lsLogo } alt='lsLogo' />
        </Link>
      </header>
    )
  }
}

export default Header;