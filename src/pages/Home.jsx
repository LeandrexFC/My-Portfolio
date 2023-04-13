import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../AllCss/Home.css'
import profilePic from '../images/profile-pic Linkedin.png';
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
              <h1 className='text1'> Welcome. </h1>
               <Typing speed={50}>
                  <p className='textp'> 
                    My name is Leandro Sousa, I'm a Web developer from São Paulo, BR, <br/> 
                    And I'm Loving the Developer World. </p>
               </Typing>
                  <button className='btn-home' type='button' onClick={ this.redirectToProjects }> PORTFOLIO </button>
            </div>
          </Tada>
        </section>

        <section className='aboutTextHome2' >
          <div className='aboutTextHome'>
            <Fade Fade left>
            <h1 id='aboutTitleHome'>About.</h1>
            </Fade >
            <div className='imgDiv'>
              <Fade left>
              <img id='profilePic' src={ profilePic } alt='Leandro img' />
              </Fade>
              </div> 
          <Fade left>
            <p id='pAboutHome'> Hey, My name is Leandro Sousa, and I'm 19 years old. I have always been passionate about technology, but I always had many doubts about which career to pursue, until I found and discovered programming, from the first contact I had I fell in love, since then I started to always want to learn more. I'm currently studying Full Stack Web Development, and I'm learning more every day. Every project I complete makes me happier.
            My dream is to be happy with my career, travel the world and make a positive impact on people's lives with my programming knowledge, and I won't stop until I achieve that. </p>
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
        <h1 className='projectsTitleHome'> Projects. </h1>
        </Fade>
        <p className='pProjects'> * Some projects may not work optimally on some mobile devices, I'm working to improve it. * </p>
        <Fade left>  
        <ProjectsComponent />
        </Fade>
      </section>

      <div id='allContactHome'>
        <Fade left>
          <h1 className='contactTitleHome'> Contact.</h1>
        <div id='allContactTextHome'>
          <p className='contactTextHome'>
          Hey, Ask me Anything!
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'Want to tell me something?',
              2000,
              'Do you need help in something?',
              2000,
              'Want to talk about any idea?',
              2000,
              'Want to do something together?!',
              2000,
              'Is there anything you would like to share with me?',
              2000,
            ]}
          />
          </p>
          {/* <h2 className='contactTextHome'>Would you like to talk to me for some reason?</h2> */}
          <p className='contactTextHome'>You can text me here:</p>
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