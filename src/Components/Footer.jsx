import React, { Component } from 'react'
import GitHubLogo from '../images/githubLogo.png'
import LinkedinLogo from '../images/LinkedinLogo3.png'
import emailLogo from '../images/emailLogo4.png'
import '../AllCss/Footer.css'

class Footer extends Component {
  render() {
    return (
      <>
      <footer id='footer'>
        <p id='footerText'>  &nbsp; © 2023 Leandro Sousa</p>
        <div id='allFooterImg'>
        <a href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
        <img src={ LinkedinLogo } alt='Linkedin Logo' className='footerLinkedinImg' />
        </a>
      
        <a href="mailto:leandro.sousa23tec@gmail.com">
        <img src={ emailLogo } alt='Email logo' className='footerEmailImg' />
        </a>

        <a href='https://github.com/LeandrexFC' target='_blank' rel="noreferrer">
        <img src={ GitHubLogo } alt='GitHub Logo' className='footerGitImg'></img> 
        </a>
        </div>

      </footer>
      </>
    )
  }
}

export default Footer;