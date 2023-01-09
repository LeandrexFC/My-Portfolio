import React, { Component } from 'react'
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import '../AllCss/Home.css'
import profilePic from '../images/profile-pic Linkedin.png';
import LinkedinLogo from '../images/LinkedinLogo.png';
import emailLogo from '../images/emailLogo.png';
import Footer from '../Components/Footer';
import htmlLogo from '../images/htmlLogo.png'
import cssLogo from '../images/cssLogo.png'
import jsLogo from '../images/javascriptLogo.png'
import reactLogo from '../images/reactLogo.png'
import jestLogo from '../images/jestLogo.png'
import rtlLogo from '../images/rtlLogo.png'
import gitLogo from '../images/gitLogo.png'
import githubLogo from '../images/githubLogo.png'
import Fade from 'react-reveal/Fade';
import Typing from 'react-typing-animation';

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
          <div>
          <h1 className='text1'> Welcome. </h1>
          </div>
          <Typing speed={50}>
          <p className='textp'> 
          My name is Leandro Sousa, I'm a Web developer from São Paulo, BR, And I'm Loving the Developer World. 
          </p>
          </Typing>
          <button className='btn-home' type='button' onClick={ this.redirectToProjects }> My Projects </button>
        </div>
         </Fade>

        <section className='aboutTextHome2' >
        <Fade left>
        <div className='imgDiv'>
          <img id='profilePic' src={ profilePic } alt='Leandro img' />
        </div> 
        </Fade>

        <Fade left>
        <div className='aboutTextHome'>
        <h1 id='aboutTitleHome'>About.</h1>
          <p id='pAboutHome'> Hey, My name is Leandro Sousa, and I'm 19 years old, I have always been passionate about technology, I always had many doubts about which career to pursue until I found and discovered programming, from the first contact I had I fell in love, since then I started to always want to learn more.I'm currently studying Full Stack Web Development, and I'm learning more every day, and every project I complete makes me happier.
          My dream is to be happy with my career, travel the world and make a positive impact on people's lives with my programming knowledge, and I won't stop until I achieve that. </p>
        </div>
        </Fade>
          
        </section>

        <Fade left>
          <h1 className='skillTitleHome'>Skills.</h1>
        </Fade>
        <Fade left>
        <div className='skillsHome'>
          <div className='card 1'>
            <img className='skillsImgHome' src={ htmlLogo } alt='html Logo' />
            <p>HTML</p>
          </div>

          <div className='card 2'>
            <img className='skillsImgHome' src={ cssLogo }  alt='css Logo' />
            <p>CSS</p>
          </div>

          <div className='card 3'>
            <img className='skillsImgHome' src={ jsLogo } alt='js Logo' />
            <p>JavaScript</p>
            {/* <p className='teast' hidden >test</p> */}
          </div>

          <div className='card 4'>
            <img className='skillsImgHome' src={ reactLogo }  alt='react Logo' />
            <p>React</p>
          </div>

          <div className='card 5'>
            <img className='skillsImgHome' src={ jestLogo } alt='jest Logo' />
            <p>Jest</p>
          </div>

          <div className='card 6'>
            <img className='skillsImgHome' src={ rtlLogo } alt='rtl Logo' />
            <p>RTL</p>
          </div>

          <div className='card 7'>
            <img className='skillsImgHome' src={ gitLogo } alt='git Logo' />
            <p>Git</p>
          </div>

          <div className='card 8'>
            <img className='skillsImgHome' src={ githubLogo } alt='gitHub Logo' />
            <p>GitHub</p>
          </div>
          <div className='skillsKnow'>
            <p>Passe o mouse nos cards para saber mais</p>
          </div>
        </div>
        </Fade>

      <section className='projectsHome'>
      <Fade left>  
      <h1 className='projectsTitleHome'> Projects. </h1>
      </Fade>
      </section>

      <section id='allContactHome'>
        <div id='allContactTextHome'>
        <Fade left>
          <h1 className='contactTextHome'>Hey,</h1>
          <h2 className='contactTextHome'>For some reason do you wanna talk to me?</h2>
          <h2 h2 className='contactTextHoe'>You can text me here:</h2>
        </Fade>
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
        </div>
        {/* <div id='MyImgHome'>
          <img id='contactProfilePicHome' src={ profilePic } alt='Leandro img' />
        </div> */}
      </section>
      
      <div id='homeFooter'>
      <Footer />
      </div>
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