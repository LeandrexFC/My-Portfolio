import React, { Component } from 'react'
import Header from '../Components/Header'
import '../AllCss/Skills.css'
import Fade from 'react-reveal/Fade';
import Footer from '../Components/Footer'
import SkillsHome from '../Components/SkillsHome'
import '../AllCss/Skills.css'

class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
      <Header />
      <Fade left>
        <SkillsHome />
      </Fade>
      <div className='skillsFooter'>
      <Footer />
      </div>
      </div>
    )
  }
}

export default Skills