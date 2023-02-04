import React, { Component } from 'react'
import '../AllCss/ProjectsComponent.css'
import tututunes from '../images/TU-TU-TUNES.png'
import moneyImg from '../images/Money-O-Change.png'
import GitHubLogo from '../images/githubLogo.png'
import browser from '../images/browser.png'

class ProjectsComponent extends Component {
  render() {
  return (
    <div className='allProjects'>

      <div className='cards 1'>
        <div className='imgItem'>
          <img className='cardsImg' src={ tututunes } alt='trybetunes project' />
        </div>
        <div className='pCard'>
        <p className='cardfir'> TU-TU-TUNES </p>
        <p className='cardsec'>React, React Router Dom, CSS, API request, Redux. </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/my-project-tunes' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        <a href='https://my-project-tunes.vercel.app/' target='_blank' rel="noreferrer">
        <img src={ browser } alt='Browser Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 2'>
        <div className='imgItem'>
          <img className='cardsImg' src={ moneyImg } alt='trybetunes project' />
        </div>
        <div className='pCard'>
        <p className='cardfir'> Cash-O-Change </p>
        <p className='cardsec'>React, React Router Dom, CSS, API request, Redux. </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-wallet' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        <a href='https://project-wallet-livid.vercel.app/' target='_blank' rel="noreferrer">  
        <img src={ browser } alt='Browser Logo' className='cardLogo' />
        </a>
        </div>
      </div>
      

      <div className='cards 3'>
        <h1 className='soon'> SOON  </h1>
      </div>

      <div className='cards 4'>
        <h1 className='soon'> SOON  </h1>
      </div>
      
    </div>

    )
  }
}

export default ProjectsComponent
