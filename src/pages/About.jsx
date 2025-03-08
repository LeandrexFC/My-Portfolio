import React, { Component } from 'react';
import '../AllCss/About.css'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import profilePic from '../images/profile-pic Linkedin4.PNG';
import Fade from 'react-reveal/Fade';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <>
      <Header />
      <section className='about'>
        <Fade left>
          <div className='aboutText'>
            <h1 id='aboutTitle'>SOBRE MIM.</h1>
            <p id='pAbout'> Sempre fui apaixonado por tecnologia, mas tive muitas dúvidas sobre qual carreira seguir até descobrir a análise de dados. Desde o meu primeiro contato com dados, fiquei fascinado pelo poder de transformar números em informações valiosas. Desde então, venho aprendendo e aprimorando minhas habilidades continuamente. Tenho experiência com ferramentas como Power BI, SAS e SQL, e adoro trabalhar com dados para apoiar decisões estratégicas. Meu objetivo é crescer na carreira, viajar pelo mundo e causar um impacto positivo, utilizando dados para resolver problemas reais. </p>
          </div>
          </Fade>
          <Fade left>
          <div className='imgAbout'>
            <img id='profilePicAbout' src={ profilePic } alt='Leandro img' />
          </div>  
          </Fade>
      </section>
      <div className='aboutFooter'>
      <Footer />
      </div>
      </>
    )
  }
}

export default About;