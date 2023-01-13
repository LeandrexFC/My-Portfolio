import React, { Component } from 'react';
import '../AllCss/Projects.css'
import Header from '../Components/Header';
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer';

class Projects extends Component {
  render() {
    return (
      <div>
      <Header />
      <Fade left>
      <h1 className='projectsTitle'> Projects. </h1>
      </Fade>
      <div className='projectsFooter'>
      <Footer />
      </div>
      </div>
    )
  }
}

export default Projects