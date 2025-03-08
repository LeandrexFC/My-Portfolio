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
          <img className='cardsImg' src={ tututunes } alt='trybetunes project' />
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
          <img className='cardsImg' src={ moneyImg } alt='trybetunes project' />
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
        <div className='pCard'>
        <p className='cardfir'> Docker To Do List </p>
        <p className='cardsec'> Este projeto envolveu a conteinerização de uma aplicação full-stack de tarefas, criando arquivos de configuração para o front-end, back-end e uma aplicação de teste para validar a comunicação. As imagens Docker foram criadas e configuradas usando o Docker Compose. </p>
        <p className='cardsec2'> Docker </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-docker' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 4'>
        <div className='pCard'>
        <p className='cardfir'> All For One </p>
        <p className='cardsec'> Filtrei, pesquisei e manipulei o banco de dados usando SQL, aplicando os conceitos aprendidos até o momento. O projeto envolveu trabalhar com um novo banco de dados, Northwind, após a transição do banco Sakila.  </p>
        <p className='cardsec2'> Mysql, Docker </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-all-for-one' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 5'>
        <div className='pCard'>
        <p className='cardfir'> One For All </p>
        <p className='cardsec'> Este projeto envolve a normalização e a inserção de planilhas não normalizadas em um banco de dados. O objetivo é aplicar os conceitos aprendidos e executar consultas para obter as informações necessárias, servindo como uma consolidação e revisão dos principais conceitos abordados até o momento. </p>
        <p className='cardsec2'> Mysql, Docker </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-one-for-all' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 6'>
        <div className='pCard'>
        <p className='cardfir'> Talker Manager </p>
        <p className='cardsec'> O projeto consiste em uma aplicação de cadastro de palestrantes, permitindo criar, visualizar, buscar, editar e excluir informações. Para isso, foi desenvolvida uma API com funcionalidades CRUD, utilizando o módulo fs para leitura e escrita de dados em arquivo. </p>
        <p className='cardsec2'> JavaScript, Node, Docker, Mysql </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-talker-manager' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 7'>
        <div className='pCard'>
        <p className='cardfir'> Store Manager </p>
        <p className='cardsec'> O projeto consiste no desenvolvimento de uma API seguindo a arquitetura MSC para gerenciar vendas via dropshipping. A API permite criar, visualizar, atualizar e excluir produtos e vendas, utilizando MySQL como banco de dados e seguindo princípios RESTful.</p>
        <p className='cardsec2'> JavaScript, Node, Docker, Mysql </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-store-manager' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 8'>
        <div className='pCard'>
        <p className='cardfir'> Blogs API </p>
        <p className='cardsec'> Foi desenvolvida uma API e um banco de dados para um sistema de gerenciamento de blogs. A aplicação, feita em Node.js com Sequelize, permite operações CRUD em postagens, seguindo princípios RESTful e implementando autenticação de usuários. </p>
        <p className='cardsec2'> JavaScript, Node, Docker, Mysql, Sequelize </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-blogs-api' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 9'>
        <div className='pCard'>
        <p className='cardfir'> Smith Project </p>
        <p className='cardsec'> Foi criada uma API em TypeScript para uma loja medieval de itens. O projeto envolveu o desenvolvimento de todas as camadas da aplicação, permitindo operações básicas no banco de dados MySQL para gerenciar os itens da loja. </p>
        <p className='cardsec2'> Typescript, Node, Docker, Mysql </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-smith' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 10'>
        <div className='pCard'>
        <p className='cardfir'> Dungeons And Dragons </p>
        <p className='cardsec'> Foram aplicados os princípios SOLID e programação orientada a objetos (OOP) no desenvolvimento de um sistema de RPG, garantindo uma estrutura robusta e bem projetada. </p>
        <p className='cardsec2'> Typescript, Node, Docker, Mysql </p>
        </div>
        <div className='imgsCard'>
        <a href='https://github.com/LeandrexFC/project-dungeos-dragons' target='_blank' rel="noreferrer"> 
        <img src={ GitHubLogo } alt='Git Hub Logo' className='cardLogo' />
        </a>
        </div>
      </div>

      <div className='cards 11'>
      <p className='soon'>
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'Em breve',
              1000,
              'Em breve...',
              1000,
            ]}
          />
          </p>
      </div>

      <div className='cards 11'>
      <p className='soon'>
          <Typical 
            loop={Infinity}
            wrapper='p'
            steps={[
              'Em breve',
              1000,
              'Em breve...',
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
