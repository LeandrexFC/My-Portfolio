import React, { Component } from 'react'
import htmlLogo from '../images/htmlLogo.png'
import cssLogo from '../images/cssLogo.png'
import jsLogo from '../images/javascriptLogo.png'
import reactLogo from '../images/reactLogo.png'
import jestLogo from '../images/jestLogo.png'
import rtlLogo from '../images/rtlLogo.png'
import reduxLogo from '../images/reduxLogo.png'
import mochaLogo from '../images/mocha.png'
import sinon from '../images/sinon.png'
import chai from '../images/chai.png'
import docker from '../images/docker.png'
import sql from '../images/sql.png'
import node from '../images/node.png'
import sequelize from '../images/sequelize.png'
import typescript from '../images/typescript.png'
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
    showTextRedux: false,
    showTextMocha: false,
    showTextChai: false,
    showTextSinon: false,
    showTextNode: false,
    showTextDocker: false,
    showTextMysql: false,
    showTextSequelize: false, 
    showTextType: false,
  }
  render() {
    const { showText, showTextHTML, showTextCSS, showTextjs, showTextReact, showTextJest,
      showTextRtl, showTextGit, showTextGitHub, showTextRedux, showTextMocha,
      showTextChai, showTextSinon, showTextNode, showTextDocker, showTextMysql, showTextSequelize, showTextType } = this.state;
    return (
      <>
        <Fade left>
          <h1 className='skillTitleHome skillTitle'>Skills.</h1>
        
          <div className='classSkillsTItle'>
            <h2 className='frontTitle'>Dev</h2>
            <h2 className='frontTitle'>Dados</h2>
          </div>
          </Fade>
        <div className='skill-content skill'>
        <Fade left>
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
              <img className='skillsImgHome imgt' src={ cssLogo }  alt='css Logo' />
              <p>CSS</p>
            </div>

            <div className='card 3'
               onMouseEnter={ () => this.setState({ showTextjs: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextjs: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ jsLogo } alt='js Logo' />
              <p>JavaScript</p>
            {/* <p className='teast' hidden >test</p> */}
            </div>

            <div className='card 4'
               onMouseEnter={ () => this.setState({ showTextReact: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextReact: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ reactLogo }  alt='react Logo' />
              <p>React</p>
            </div>
            </div>
            <div className='skillsHome'>
            <div className='card 8'
                onMouseEnter={ () => this.setState({ showTextMocha: true, showText: false }) }
                onMouseLeave={ () => this.setState({ showTextMocha: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ mochaLogo } alt='mocha Logo' />
              <p>Power Bi</p>
            </div>

            <div className='card 9'
               onMouseEnter={ () => this.setState({ showTextChai: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextChai: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ chai } alt='chai Logo' />
              <p>Excel</p>
            </div>


            <div className='card 11'
               onMouseEnter={ () => this.setState({ showTextNode: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextNode: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ node } alt='node Logo' />
              <p>SQL</p>
            </div>

            <div className='card b14'
               onMouseEnter={ () => this.setState({ showTextSequelize: true, showText: false }) }
               onMouseLeave={ () => this.setState({ showTextSequelize: false, showText: true }) }>
              <img className='skillsImgHome imgt' src={ sequelize } alt='sequelize Logo' />
              <p>AWS</p>
            </div>

            </div>
        </Fade>
            </div>
        { <Fade left>
          <div className='skillsKnow'>
            {
              showText && <p className='skillstexts'> Toque ou passe o mouse sobre a habilidade ao lado para saber mais.</p>
            }
                     
            {
              showTextHTML && <p className='skillstexts'> HTML é a linguagem de marcação usada para estruturar páginas da web, definindo elementos como textos, imagens, links e formulários. </p> 
            }

            {
              showTextCSS && <p className='skillstexts'> CSS é a linguagem de estilo que define a aparência de páginas da web, permitindo personalizar cores, fontes, layouts e responsividade. </p>
            }

            {
              showTextjs && <p className='skillstexts'> JavaScript é uma linguagem de programação que torna páginas da web interativas, permitindo manipular elementos, criar animações e desenvolver aplicações dinâmicas. </p>
            }

            {
              showTextReact && <p className='skillstexts'> React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário interativas e dinâmicas, utilizando componentes reutilizáveis e tornando o desenvolvimento web mais eficiente e escalável. </p>
            }

            {
              showTextMocha && <p className='skillstexts'>Power BI é uma ferramenta de Business Intelligence da Microsoft que permite analisar e visualizar dados de forma interativa. Com integração a diversas fontes, facilita a criação de dashboards e relatórios para apoiar a tomada de decisões.  </p>
            }

            {
              showTextChai && <p className='skillstexts'> Excel é uma ferramenta da Microsoft para criação e análise de planilhas, permitindo organizar dados, aplicar fórmulas, gerar gráficos e criar relatórios interativos. </p>
            }

            {
              showTextNode && <p className='skillstexts'> SQL é uma linguagem de consulta usada para gerenciar e manipular bancos de dados, permitindo armazenar, recuperar e analisar dados de forma eficiente. </p>
            }

            {
              showTextSequelize && <p className='skillstexts'> AWS é uma plataforma de computação em nuvem da Amazon que oferece serviços como armazenamento, banco de dados, computação e machine learning, permitindo escalabilidade e alta disponibilidade para aplicações. </p>
            }

          </div>
          </Fade> }
        
          </>
    )
  }
}

export default SkillsHome