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
        {/* <a href="https://br.freepik.com/vetores-gratis/estudo-de-menino-bonito-com-ilustracao-de-icone-de-desenho-animado-portatil-conceito-de-icone-de-tecnologia-de-educacao-isolado-estilo-flat-cartoon_10718009.htm#from_view=detail_alsolike">Imagem de catalyststuff</a> no Freepik */}
        </div>

      </footer>
      </>
    )
  }
}

export default Footer;