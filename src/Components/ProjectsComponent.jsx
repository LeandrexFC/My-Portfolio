import React, { Component } from 'react'
import '../AllCss/ProjectsComponent.css'
import trybetunes from '../images/trybetunes.png'

class ProjectsComponent extends Component {
  render() {
  return (
    <div className='allProjects'>
      <div className='cards 1'>
        <div className='imgItem'>
          <img className='cardsImg' src={ trybetunes } alt='trybetunes project' />
        </div>
        <p className='cardP'> TrybeTunes </p>
        <p className='cardP'>React, JS, </p>
      </div>

      <div className='cards 2'>
        <div className='imgItem'>
          <img className='cardsImg' src={ trybetunes } alt='trybetunes project' />
        </div>
        <p className='cardP'> TrybeTunes test </p>
        <p className='cardP'>React, JS, sla</p>
      </div>

      <div className='cards 2'>
        <div className='imgItem'>
          <img className='cardsImg' src={ trybetunes } alt='trybetunes project' />
        </div>
        <p className='cardP'> TrybeTunes test </p>
        <p className='cardP'>React, JS, sla</p>
      </div>

      <div className='cards 2'>
        <div className='imgItem'>
          <img className='cardsImg' src={ trybetunes } alt='trybetunes project' />
        </div>
        <p className='cardP'> TrybeTunes test </p>
        <p className='cardP'>React, JS, sla</p>
      </div>
      
    </div>

    )
  }
}

export default ProjectsComponent
