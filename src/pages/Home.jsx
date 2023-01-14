import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../AllCss/Home.css'
import profilePic from '../images/profile-pic Linkedin.png';
import LinkedinLogo from '../images/LinkedinLogo.png';
import emailLogo from '../images/emailLogo.png';
import Footer from '../Components/Footer';
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';
import SkillsHome from '../Components/SkillsHome';

class Home extends Component {

  redirectToProjects = () => {
    const { history } = this.props;
    console.log(history)
    history.push('/projects')
  }
  
  render() {
    return (
      <div>
        <Header />
        <Fade left>
        <div className='welcome'>
          <div className='welcomeText'>
            <h1 className='text1'> Welcome. </h1>
          </div>
          <Typing speed={50}>
          <div className='welcomeP'>
            <p className='textp'> 
            My name is Leandro Sousa, I'm a Web developer from São Paulo, BR, And I'm Loving the Developer World. 
            </p>
          </div>
          </Typing>
          <button className='btn-home' type='button' onClick={ this.redirectToProjects }> My Projects </button>
        </div>
        </Fade>

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
            <p id='pAboutHome'> Hey, My name is Leandro Sousa, and I'm 19 years old, I have always been passionate about technology, I always had many doubts about which career to pursue until I found and discovered programming, from the first contact I had I fell in love, since then I started to always want to learn more.I'm currently studying Full Stack Web Development, and I'm learning more every day, and every project I complete makes me happier.
            My dream is to be happy with my career, travel the world and make a positive impact on people's lives with my programming knowledge, and I won't stop until I achieve that. </p>
          </Fade>          
          </div>
        </section>

        <Fade left>
        <SkillsHome />
        </Fade>

      <section className='projectsHome'>
        <Fade left>  
        <h1 className='projectsTitleHome'> Projects. </h1>
        </Fade>
      </section>

      <section id='allContactHome'>
        <div id='allContactTextHome'>
        <Fade left>
          <h1 className='contactTitleHome'> Contact.</h1>
          <h1 className='contactTextHome'>Hey,</h1>
          <h2 className='contactTextHome'>For some reason do you wanna talk to me?</h2>
          <h2 h2 className='contactTextHome'>You can text me here:</h2>
        </Fade>
        </div>
        <Fade>
        <div id='allContactImgHome'>
          <a className='linkedinAHome' href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
          <img src={ LinkedinLogo } alt='Linkedin Logo' className='linkedinImgHome'/>
          </a>
          <a className='emailAHome' href="mailto:leandro.sousa23tec@gmail.com">
          <img src={ emailLogo } alt='Email logo' className='emailImgHome' />
          </a>
        </div>   
        </Fade>
      </section>
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