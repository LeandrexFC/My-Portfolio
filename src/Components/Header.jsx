import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../AllCss/Header.css'
import lsLogo from '../images/lsLogo.jpg'
import { Fade } from 'react-reveal';

class Header extends Component {
  state = {
    show: false
  }

  changeMenu = () => {
    const { show } = this.state
    this.setState({
      show: !show 
    })
  }

  render() {
    const { show } = this.state
    return (
      <header>
        <Fade  top>
          <div className='container'>
        <Link className='lsLogo' to='/'>
        <img  className='lsLogo' src={ lsLogo } alt='lsLogo' />
        </Link>

        <Fade top>
            <div className={ show ? 'menu-section on' : 'menu-section' }
            onClick={this.changeMenu}>
              <div className='menu-toggle '>
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
              </div>
              
              <nav>
                <ul>
                  <li>
                  <Link  id='about' to="/about"> Sobre </Link>
                  </li>
                  <li>
                <Link id='skills' to='/skills'> Skills </Link>
                  </li>
                  <li>
                <Link id='projects' to="/projects"> Projeto </Link>
                  </li>
                  <li>
                <Link id='contact' to="/contact"> Contato </Link>
                  </li>
                </ul>
                
              </nav>
            </div>
            </Fade>
          </div>
        </Fade>
        </header>
      
    )
  }
}

export default Header;