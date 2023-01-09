import React, { Component } from 'react'
import Header from '../Components/Header'
import '../AllCss/Skills.css'
import htmlLogo from '../images/htmlLogo.png'
import cssLogo from '../images/cssLogo.png'
import jsLogo from '../images/javascriptLogo.png'
import reactLogo from '../images/reactLogo.png'
import jestLogo from '../images/jestLogo.png'
import rtlLogo from '../images/rtlLogo.png'
import gitLogo from '../images/gitLogo.png'
import githubLogo from '../images/githubLogo.png'
import Fade from 'react-reveal/Fade';

class Skills extends Component {
  render() {
    return (
      <div>
      <Header />
      <Fade left>
        <div>
          <h1 className='skillTitle'>Skills.</h1>
        </div>
      </Fade>
        <Fade left>
        <div className='skills'>
          <img className='skillsImg' src={ htmlLogo } alt='html Logo' />
          <img className='skillsImg' src={ cssLogo }  alt='css Logo' />
          <img className='skillsImg' src={ jsLogo } alt='js Logo' />
          <img className='skillsImg' src={ reactLogo }  alt='react Logo' />
          <img className='skillsImg' src={ jestLogo } alt='jest Logo' />
          <img className='skillsImg' src={ rtlLogo } alt='rtl Logo' />
          <img className='skillsImg' src={ gitLogo } alt='git Logo' />
          <img className='skillsImg' src={ githubLogo } alt='gitHub Logo' />
        </div>
        </Fade>
      </div>
    )
  }
}

export default Skills