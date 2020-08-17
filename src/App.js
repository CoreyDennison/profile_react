import React, { Component } from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
import JOCImages  from '../src/JOCGallery';
import SBAImages from '../src/SBAGallery';
import MSAImages from '../src/MSAGallery';
import OTBImages from '../src/OTBGallery';
import MMImages from '../src/MMGallery';
import './style.css';


class Projects extends Component {

  constructor(){
    super()
    this.state = {
      title: 'Projects',
      setVisible: true,
      showGallery: false,
      backArrow: false,
      projectTitle: '',
      projectDescrip: '',
      projectDescrip2: '',
      jocVisible: false,
      sbaVisible: false,
      msaVisible: false,
      otbVisible: false,
      mmVisible: false
    }
  }

  openProject1() {
    document.title='Joy of Chá';
    this.setState({
      title: '',
      projectTitle: 'Joy Of Chá website',
      setVisible: false,
      showGallery: true,
      backArrow: true,
      projectDescrip: `As part of my 1st Year at Dublin Institute of Design, I was tasked to locate a business of my chosing 
      in the Temple Bar district of Dublin City and rebrand their idenity with a logo and website of my own 
      design. This project required me to experiment with logos, colour schemes, layouts, and create wireframes 
      and mock-ups, as well as a vast amount of research on competitors and ways of promoting the business, 
      such as though SEOs, email campaigns, social media and advertising.`,
      jocVisible: true
    }) 
  }

  openProject2() {
    document.title='Spotify API battle';
    this.setState({
      title: '',
      projectTitle: 'Spotify artist battle',
      setVisible: false,
      backArrow: true,
      projectDescrip: `For this project, I was tasked with developing and app with Node JS which compared two artists 
      of the user's choosing and judged them on specific criteria, such as the popularity, followers, number of songs,
      and so on. This information was located on either a local JSON file or from the Spotify API using a fetch 
      protocol. I decided to access the information from the JSON file. I then uploaded to the cloud platform 
      service provided by Heroku, which was able to host the app on one of its external servers.`,
      sbaVisible: true
    }) 
  }

  openProject3() {
    document.title='Movie Search API';
    this.setState({
      title: '',
      projectTitle: 'Movie API',
      setVisible: false,
      backArrow: true,
      projectDescrip: `This college project required me to create a single page application through the React JS 
      framework that would fetch information from an API of my own choosing and display the data in an orderly 
      fashion. I chose to access a movie database to fetch the information, and to then display it and feature a 
      header photo, the title of the movie, the year of the movie's release and its rating.`,
      msaVisible: true
    }) 
  }

  openProject4() {
    document.title='Over The Bump Mobile App';
    this.setState({
      title: '',
      projectTitle: 'Over The Bump',
      setVisible: false,
      backArrow: true,
      projectDescrip: `This project involved me to come up with an idea for a unique mobile app that serves a 
      specific need or problem. Following that, I was then required to develop user personas, competitos analysis, 
      carry our user interviews and surveys, sketches, userflows and wireflows, and wireframes for the app. Once 
      that had been completed I began the design process for the app, giving it the name "Over The Bump", and 
      evaluating inpirations for its design, the app's logo, the apps colour scheme, typography and imagery used, 
      and eventually building a minimal viable product of the app by creating an interactive prototype of the app 
      using InVision and carrying out user testing in order to recieve feedback. Finally, I created a specifications 
      document detailing the whole process from beginning to end, listing my findings and decisions.`,
      otbVisible: true,
      projectDescrip2: `Once Over The Bump had been developed, I was then tasked with a new project which involved establishing a 
      marketing campaign for the app. For this, I analysed previous marketing campaigns with similar motivations to the Over The Bump 
      app, and review what they did and didn't find successful and implement that to my own. As well as this, I also came up with social 
      media campaigns for specifically chosen social media sites and when would be a suitable date to roll out my campaign depending on 
      relevant data I had researched. I used the task managment software MeisterTask and its corresponding mind mapping software 
      MindMeister to organise my work, come up with ideas and keep record of my work. From the knowledge I gathered for the app's 
      marketing campaign, I was then tasked with creating Facebook advertisements for a course at my college, and then recording and 
      presenting the results and my findings.`
    }) 
  }

  openProject5() {
    document.title='Mac Motors Database';
    this.setState({
      title: '',
      projectTitle: 'Mac Motors',
      setVisible: false,
      backArrow: true,
      projectDescrip: `This personal project saw me creating a establishing a car dealership database, which 
      involved creating an Entity Relationship diagram in order to define the relationships between tables, their 
      attributes and how different users would interact with the database. I used XAMPP, which implemented myphpAdmin 
      and MariaDB to create the SQL database. I then connented to the database using the web server scripting language, 
      PHP. After I had successfully established a connection, I set about writing code that would allow PHP to create 
      an SQL query to display the desired table in the database in a table layout on a webpage, and subsequently 
      queries that would allow the user to add, delete and edit information within the tables of the database.`,
      mmVisible: true
    }) 
  }

  openProjects(){
    document.title='Projects';
    this.setState({
      title: 'Projects',
      projectTitle: '',
      projectDescrip2: '',
      setVisible: true,
      showGallery: false,
      backArrow: false,
      projectDescrip: '',
      jocVisible: false,
      sbaVisible: false,
      msaVisible: false,
      otbVisible: false,
      mmVisible: false
    })
  }

  render(){

    return (
      <div id="parent">
        <h3 style={{display: this.state.backArrow ? null : 'none'}} onClick={() => this.openProjects()}>&larr;</h3>
        <h1>{this.state.title}</h1>
        <h2>{ this.state.projectTitle }</h2>
        <div className = 'projects' style={{display: this.state.setVisible ? null : 'none'}}>

          <div className="joc_con" onClick={() => this.openProject1()}>           
            <p>The Joy Of Chá</p> 
          </div>

          <div className="spotify_con" onClick={() => this.openProject2()}>
            <p>Spotify Artist Battle</p>
          </div>

          <div className="movie_con" onClick={() => this.openProject3()}>
            <p>Movie Search React App</p>
          </div>

          <div className="otb_con" onClick={() => this.openProject4()}>
            <p>Over The Bump Mobile App</p>
          </div>

          <div className="mm_con" onClick={() => this.openProject5()}>
            <p>Mac Motors Database</p>
          </div>

        </div>

        <div id="projectPage">
          <p>{this.state.projectDescrip}</p>

          <SimpleReactLightbox>
            { this.state.jocVisible ? <JOCImages/> : null }
            { this.state.sbaVisible ? <SBAImages /> : null }
            { this.state.msaVisible ? <MSAImages /> : null }
            { this.state.otbVisible ? <OTBImages /> : null }
            { this.state.mmVisible ? <MMImages /> : null }
          </SimpleReactLightbox>

          <p>{this.state.projectDescrip2}</p>

          <SimpleReactLightbox>
            { this.state.otbVisible ? <OTBImages /> : null }
          </SimpleReactLightbox>
        </div>

      </div>
    )
  }
}

export default Projects;
