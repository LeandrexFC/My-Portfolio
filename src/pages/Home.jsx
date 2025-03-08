import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../AllCss/Home.css'
import profilePic from '../images/profile-pic Linkedin4.PNG';
import LinkedinLogo from '../images/LinkedinLogo3.png';
import emailLogo from '../images/emailLogo4.png';
import Footer from '../Components/Footer';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Typing from 'react-typing-animation';
import Typical from 'react-typical'
import SkillsHome from '../Components/SkillsHome';
import programmerImg from '../images/programmerLogo.png'
import ProjectsComponent from '../Components/ProjectsComponent';
import { Helmet } from "react-helmet";
import lsLogo from '../images/lsLogo.jpg'


class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  redirectToProjects = () => {
    const { history } = this.props;
    history.push('/projects')
  }
  
  render() {
    return (
      <div>
        <Helmet>
          <title>Leandro Sousa - Full Stack Student</title>
          <link rel="icon" href={ lsLogo } />
      </Helmet>
        <Header />
          <section className='welcome'>
          <Tada>
            <div className='welcomeImg'>
              <img src={ programmerImg } alt='Programmer Draw'  className='imgWelcome'/>
            </div>
            <div className='welcomeText'>
              <h1 className='text1'> Bem vindo! </h1>
               <Typing speed={50}>
                  <p className='textp'> 
                  Meu nome é Leandro Sousa, sou Desenvolvedor e Analista de Dados de São Paulo, BR, <br/> 
                  apaixonado por transformar dados em insights e impulsionar a tomada de decisões. </p>
               </Typing>
                  <button className='btn-home' type='button' onClick={ this.redirectToProjects }> PORTFOLIO </button>
            </div>
          </Tada>
        </section>

        <section className='aboutTextHome2' >
          <div className='aboutTextHome'>
            <Fade Fade left>
            <h1 id='aboutTitleHome'>SOBRE MIM.</h1>
            </Fade >
            <div className='imgDiv'>
              <Fade left>
              <img id='profilePic' src={ profilePic } alt='Leandro img' />
              </Fade>
              </div> 
          <Fade left>
            <p id='pAboutHome'> Sempre fui apaixonado por tecnologia, mas tive muitas dúvidas sobre qual carreira seguir até descobrir a análise de dados. Desde o meu primeiro contato com dados, fiquei fascinado pelo poder de transformar números em informações valiosas. Desde então, venho aprendendo e aprimorando minhas habilidades continuamente. Tenho experiência com ferramentas como Power BI, SAS e SQL, e adoro trabalhar com dados para apoiar decisões estratégicas. Meu objetivo é crescer na carreira, viajar pelo mundo e causar um impacto positivo, utilizando dados para resolver problemas reais. </p>
          </Fade>          
          </div>
        </section>

        <Fade left>
          <section className='skillshomee'>
        <SkillsHome />
          </section>
        </Fade>

      <section className='projectsHome'>
        <Fade left>
        <h1 className='projectsTitleHome'> Projetos. </h1>
        </Fade>
        <p className='pProjects'> * Alguns projetos podem não funcionar perfeitamente em dispositivos móveis, estou trabalhando para melhorar isso. * </p>
        <Fade left>  
        <ProjectsComponent />
        </Fade>
      </section>

      <div id='allContactHome'>
        <Fade left>
          <h1 className='contactTitleHome'> Contato.</h1>
        <div id='allContactTextHome'>
          <p className='contactTextHome'>
          Fique à vontade para perguntar!
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'Precisa de ajuda em alguma coisa?',
              2000,
              'Tem algo em mente?',
              2000,
              'Vamos trocar ideias?!',
              2000,
              'Gostaria de compartilhar algo?',
              2000,
            ]}
          />
          </p>
          <p className='contactTextHome'>Você me encontra aqui:</p>
        <div id='allContactImgHome'>
          <a className='linkedinAHome' href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
          <img src={ LinkedinLogo } alt='Linkedin Logo' className='linkedinImgHome'/>
          </a>
          <a className='emailAHome' href="mailto:leandro.sousa23tec@gmail.com">
          <img src={ emailLogo } alt='Email logo' className='emailImgHome' />
          </a>
        </div>
        </div>   
        </Fade>
      </div>
      <Footer />
      </div>
      
    )
  }
};

export default Home;

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;