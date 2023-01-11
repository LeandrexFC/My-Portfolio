import React, { Component } from 'react'
import htmlLogo from '../images/htmlLogo.png'
import cssLogo from '../images/cssLogo.png'
import jsLogo from '../images/javascriptLogo.png'
import reactLogo from '../images/reactLogo.png'
import jestLogo from '../images/jestLogo.png'
import rtlLogo from '../images/rtlLogo.png'
import gitLogo from '../images/gitLogo.png'
import githubLogo from '../images/githubLogo.png'
import Fade from 'react-reveal/Fade';
import '../AllCss/Skills2.css'

 class SkillsHome extends Component {
  state = {
    showText: true,
    showTextHTML: false,
    showTextCSS: false,
    showTextjs: false,
    showTextReact: false,
    showTextJest: false,
    showTextRtl: false,
    showTextGit: false,
    showTextGitHub: false,
  }
  render() {
    const { showText, showTextHTML, showTextCSS, showTextjs, showTextReact, showTextJest,
      showTextRtl, showTextGit, showTextGitHub } = this.state;
    return (
      <>
        <Fade left>
          <h1 className='skillTitleHome'>Skills.</h1>
        </Fade>
      <div className='skillsHome'>
            <div onMouseEnter={ () => this.setState({ showTextHTML: true, showText: false }) }
                 onMouseLeave={ () => this.setState({ showTextHTML: false, showText: true }) }
                 className='card 1'>
            <img className='skillsImgHome imgt' src={ htmlLogo } alt='html Logo' />
            <p>HTML</p> 
          </div>

          <div className='card 2'
               onMouseEnter={ () => this.setState({ showTextCSS: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextCSS: false, showText: true }) }>
            <img className='skillsImgHome' src={ cssLogo }  alt='css Logo' />
            <p>CSS</p>
          </div>

          <div className='card 3'
               onMouseEnter={ () => this.setState({ showTextjs: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextjs: false, showText: true }) }>
            <img className='skillsImgHome' src={ jsLogo } alt='js Logo' />
            <p>JavaScript</p>
            {/* <p className='teast' hidden >test</p> */}
          </div>

          <div className='card 4'
               onMouseEnter={ () => this.setState({ showTextReact: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextReact: false, showText: true }) }>
            <img className='skillsImgHome' src={ reactLogo }  alt='react Logo' />
            <p>React</p>
          </div>

          <div className='card 5'
               onMouseEnter={ () => this.setState({ showTextJest: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextJest: false, showText: true }) }>
            <img className='skillsImgHome' src={ jestLogo } alt='jest Logo' />
            <p>Jest</p>
          </div>

          <div className='card 6'
               onMouseEnter={ () => this.setState({ showTextRtl: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextRtl: false, showText: true }) }>
            <img className='skillsImgHome' src={ rtlLogo } alt='rtl Logo' />
            <p>RTL</p>
          </div>

          <div className='card 7'
                onMouseEnter={ () => this.setState({ showTextGit: true, showText: false }) }
                onMouseLeave={ () => this.setState({ showTextGit: false, showText: true }) }>
            <img className='skillsImgHome' src={ gitLogo } alt='git Logo' />
            <p>Git</p>
          </div>

          <div className='card 8'
               onMouseEnter={ () => this.setState({ showTextGitHub: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextGitHub: false, showText: true }) }>
            <img className='skillsImgHome' src={ githubLogo } alt='gitHub Logo' />
            <p>GitHub</p>
          </div>
        </div>
          <div className='skillsKnow'>
            {
              showText && <p className='skillstexts'> Hover over a skill to learn more.</p>
            }
                     
            {
              showTextHTML && <p className='skillstexts'> HTML, or Hypertext Markup Language, is the standard language used to create web pages. It consists of a series of elements, or tags, enclosed in angle brackets, that describe the structure and content of the page. </p> 
            }

            {
              showTextCSS && <p className='skillstexts'> CSS, or Cascading Style Sheets, is a language used to describe the layout and presentation of a document written in a markup language such as HTML. </p>
            }

            {
              showTextjs && <p className='skillstexts'> JavaScript is a programming language that is used primarily to create interactive and dynamic effects on websites. </p>
            }

            {
              showTextReact && <p className='skillstexts'> React is a JavaScript library for building user interfaces, specifically for building reusable UI components. </p>
            }

            {
              showTextJest && <p className='skillstexts'> Jest is a JavaScript testing framework. It is used to test JavaScript code, including React and other JavaScript libraries.  </p>
            }

            {
              showTextRtl && <p className='skillstexts'> React Testing Library is a library for testing React components that encourages good testing practices.  </p>
            }

            {
              showTextGit && <p className='skillstexts'> Git is a distributed version control system (DVCS) that is widely used for software development. It allows multiple people to collaborate on the same codebase, track changes, and maintain different versions of the code. </p>
            }

            {
              showTextGitHub && <p className='skillstexts'> GitHub is a web-based platform that provides hosting for software development and a community platform for developers to collaborate, share and learn together. </p>
            }
          </div>
          </>
    )
  }
}

export default SkillsHome