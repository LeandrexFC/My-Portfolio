import React, { Component } from 'react';
import '../AllCss/Projects.css'
import Header from '../Components/Header';
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer';
import ProjectsComponent from '../Components/ProjectsComponent';

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
      <h1 className='projectsTitle'> PORTFOLIO. </h1>
      <div>
        <ProjectsComponent />
      </div>
      <p className='pProjects'> * Some projects may not work optimally on some mobile devices, I'm working to improve it. * </p>
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