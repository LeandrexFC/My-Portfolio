import React, { Component } from 'react'
import GitHubLogo from '../images/githubLogo.png'
import LinkedinLogo from '../images/LinkedinLogo.png'
import emailLogo from '../images/emailLogo.png'
import '../AllCss/Footer.css'

class Footer extends Component {
  render() {
    return (
      <>
      <footer id='footer'>
        <div id='allFooterImg'>
        <p id='footerText'>© 2023 Leandro Sousa</p>
        <a href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
        <img src={ LinkedinLogo } alt='Linkedin Logo' className='footerLinkedinImg'/>
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