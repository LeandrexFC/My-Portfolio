import React, { Component } from 'react';
import '../AllCss/Projects.css'
import Header from '../Components/Header';
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer';

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <Header />
      <Fade left>
      <section className='projects'>  
      <h1 className='projectsTitle'> Projects. </h1>
      </section>
      </Fade>
      <div className='projectsFooter'>
      <Footer />
      </div>
      </div>
    )
  }
}

export default Projects