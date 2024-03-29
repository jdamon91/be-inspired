import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import CarouselSlide from '../Carousel/CarouselSlide'
import './Home.css'
import Video5 from '../../images/video5.mp4'

const Home = (props) => {
  return (
    <Fragment>
      <div className="main">
        <h1 className="main-heading fade-in-1">Inspire</h1>
        <h2 className="sub-heading fade-in-2">Discover</h2>
        <h3 className="support-heading fade-in-3">Create</h3>
      </div>
      <div className="sub-main fade-in-heading">
        <h2 className="alt-heading">"The journey matters more than the destination."</h2>
      </div>
      <div className="carousel">
        <CarouselSlide />
      </div>
      <div className="container">
        <h2 className="heading-text">Serving content made to Inspire</h2>
        <p className="heading-text-support">A new wave of social media change built to MOTIVATE, REJUVENATE, and INSPIRE!</p>
      </div>
      <div className="row row-main">
        <Link to="/Feed">
          <div className="card-title bd-right-w">
            <i className="far fa-lightbulb"></i>
            <h3>Inspire Others</h3>
            <p>Bring the fire you have in you and show it off to the world!</p>
            <button className="main-btn">Start Inspiring <i className="fas fa-caret-right"></i></button>
          </div>
        </Link>
        <Link to="/Feed">
          <div className="card-title bd-right-w">
            <i className="fas fa-heartbeat"></i>
            <h3>Be Inspired</h3>
            <p>With neverending content made to inspire we have all you could want!</p>
            <button className="main-btn">Get Inspiration <i className="fas fa-caret-right"></i></button>
          </div>
        </Link>
        <Link to="/Feed">
          <div className="card-title">
            <i className="fas fa-hiking"></i>
            <h3>Discovery Awaits</h3>
            <p>It all starts with a click & we will be your tour guide!</p>
            <button className="main-btn">Explore Now <i className="fas fa-caret-right"></i></button>
          </div>
        </Link>
      </div>
      <div className="video-full-container">
        <video autoPlay loop muted className="video-full">
          <source src={Video5} type="video/webm" /> 
          <source src={Video5} type="video/ogg" /> 
          <source src={Video5} type="video/mp4" />
          <source src={Video5} type="video/3gp" />
        </video>
      </div>
      <div className="container">
        <h2 id="launch-heading" className="heading-text">The time to LAUNCH is here & now</h2>
        <p className="heading-text-support">Be the change that seeks to inspire and join a community that seeks to uplift, promote, and support their users through their content!</p>
      </div>
      <Link to="/Login">
        <button className="main-btn-ext">Get Started <i className="fas fa-caret-right"></i></button>
      </Link>
    </Fragment>
  )
}

export default Home;