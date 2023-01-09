import React, { Component } from 'react';
import '../AllCss/Contact.css'
import Header from '../Components/Header';
import LinkedinLogo from '../images/LinkedinLogo.png'
import profilePic from '../images/profile-pic Linkedin.png'
import emailLogo from '../images/emailLogo.png'
import Footer from '../Components/Footer';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
  render() {
    return (
      <>
      <Header />
      <section id='allContact'>
        <div id='allContactText'>
        <Fade left>
          <h1 className='contactTitle'> Contact.</h1>
        </Fade>
        <Fade left>
          <h1 className='contactText'>Hey,</h1>
          <h2 className='contactText'>For some reason do you wanna talk to me?</h2>
          <h2 h2 className='contactText'>You can text me here:</h2>
        </Fade>
        <Fade left>
        <div id='allContactImg'>
          <a className='linkedinA' href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
          <img src={ LinkedinLogo } alt='Linkedin Logo' className='linkedinImg'/>
          </a>
          <a className='emailA' href="mailto:leandro.sousa23tec@gmail.com">
          <img src={ emailLogo } alt='Email logo' className='emailImg' />
          </a>
        </div>   
        </Fade>  
        </div>
        <Fade left>
        <div id='MyImg'>
          <img id='contactProfilePic' src={ profilePic } alt='Leandro img' />
        </div>
        </Fade> 
      </section>
      
      <Footer />
      </>
    )
  }
}

export default Contact;