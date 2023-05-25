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
        <p className='cardsec'> This project involved containerizing a full-stack task application, creating configuration files for the front-end, back-end, and a test application to validate communication. Docker images were created and configured using docker-compose. </p>
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
        <p className='cardsec'> I filtered, searched, and manipulated the database using SQL, applying the concepts learned so far. The project involved working with a new database, Northwind, after transitioning from the Sakila database.  </p>
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
        <p className='cardsec'> This project involves normalizing and populating unnormalized spreadsheets into a database. The objective is to apply the learned concepts and execute queries to retrieve the required information. It serves as a consolidation and review of the key concepts covered thus far. </p>
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
        <p className='cardsec'> The project involves building a talkers registration application that enables users to perform operations like creating, viewing, searching, editing, and deleting speaker information. This requires developing an API with CRUD functionality for talkers and implementing endpoints that read and write data to a file using the fs module. </p>
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
        <p className='cardsec'> The project involves developing an API using the MSC architecture. The API serves as a dropshipping sales management system, allowing users to perform operations like creating, viewing, deleting, and updating products and sales. MySQL is utilized as the database for data management, and the API is designed to follow RESTful principles. </p>
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
        <p className='cardsec'> an API and database were developed for a blog content management system. The application, built with Node.js and utilizing the Sequelize package, allows for CRUD operations on blog posts. RESTful principles were followed, including user authentication for post creation. </p>
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
        <p className='cardsec'> a medieval item store was created as an API using TypeScript. The project involved developing all application layers to enable basic database operations. Endpoints were implemented to read from and write to a MySQL database, providing functionality for managing the store's items. </p>
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
        <p className='cardsec'> the principles of SOLID architecture and object-oriented programming OOP were applied to develop a role-playing game RPG system. The project focused on designing and implementing a robust RPG structure that adheres to SOLID principles and effectively utilizes OOP concepts. </p>
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
              'SOON',
              1000,
              'SOON...',
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
