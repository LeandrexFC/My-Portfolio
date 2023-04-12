import React, { Component } from 'react'
import '../AllCss/ProjectsComponent.css'
import tututunes from '../images/TU-TU-TUNES.png'
import moneyImg from '../images/Money-O-Change.png'
import GitHubLogo from '../images/githubLogo.png'
import browser from '../images/browser.png'
import Typical from 'react-typical'

class ProjectsComponent extends Component {
  render() {
  return (
    <div className='allProjects'>
      <div className='cards 1'>
        {/* <div className='imgItem'> */}
          <img className='cardsImg' src={ tututunes } alt='trybetunes project' />
        {/* </div> */}
        <div className='pCard'>
        <p className='cardfir'> TU-TU-TUNES </p>
        <p className='cardsec'>React, React Router Dom, CSS, API request, Redux. </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/my-project-tunes' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        <a href='https://tu-tu-tunes.vercel.app/' target='_blank' rel="noreferrer">
        <img src={ browser } alt='Browser Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 2'>
        {/* <div className='imgItem'> */}
          <img className='cardsImg' src={ moneyImg } alt='trybetunes project' />
        {/* </div> */}
        <div className='pCard'>
        <p className='cardfir'> MONEY-O-Change </p>
        <p className='cardsec'>React, React Router Dom, CSS, API request, Redux. </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-wallet' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        <a href='https://money-o-change.vercel.app/' target='_blank' rel="noreferrer">  
        <img src={ browser } alt='Browser Logo' className='cardLogo' />
        </a>
        </div>
      </div>
      

      <div className='cards 3'>
      <p className='soon'>
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'SOON',
              1000,
              'SOON...',
              1000,
            ]}
          />
          </p>
      </div>

      <div className='cards 4'>
      <p className='soon'>
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'SOON',
              1000,
              'SOON...',
              1000,
            ]}
          />
          </p>
      </div>
      
    </div>

    )
  }
}

export default ProjectsComponent
