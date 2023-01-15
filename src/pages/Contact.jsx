import React, { Component } from 'react';
import '../AllCss/Contact.css'
import Header from '../Components/Header';
import LinkedinLogo from '../images/LinkedinLogo3.png'
import Typical from 'react-typical'
import emailLogo from '../images/emailLogo4.png'
import Footer from '../Components/Footer';
import Fade from 'react-reveal/Fade';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
        <p className='contactText'>
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
          <p className='contactTextHome'>You can text me here:</p>
        </Fade>
        <Fade left>
        <div id='allContactImg'>
          <div className='contactImg 1'>
            <a className='linkedinA' href='https://www.linkedin.com/in/leandro-sousa-dev/' target='_blank' rel="noreferrer">
            <img src={ LinkedinLogo } alt='Linkedin Logo' className='linkedinImg'/>
            </a>
          </div>
          <div className='contactImg 1'>
            <a className='emailA' href="mailto:leandro.sousa23tec@gmail.com">
            <img src={ emailLogo } alt='Email logo' className='emailImg' />
          </a>
          </div>
        </div>   
        </Fade>  
        </div>
      </section>
      <div className='contactFooter'>
      <Footer />
      </div>
      </>
    )
  }
}

export default Contact;