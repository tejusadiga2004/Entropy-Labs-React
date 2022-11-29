import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
        </div>
        <div className="home-hero">
          <img
            alt="pastedImage"
            src="/playground_assets/muteonbessel-1200w-1000h.png"
            className="home-pasted-image"
          />
          <div className="home-content">
            <h1 className="home-title">Micro Mute</h1>
            <span className="home-text">
              Control your Microphone the way you like
            </span>
            <span className="home-caption">
              <span>    • Keyboard hotkeys</span>
              <br></br>
              <span>    • Push to talk</span>
              <br></br>
              <span>    • Works with any video conferencing app</span>
              <br></br>
            </span>
            <img
              alt="image"
              src="/playground_assets/appstoreicon.svg"
              className="home-image"
            />
          </div>
          <div className="home-container1">
            <div className="home-container2">
              <img
                alt="image"
                src="/playground_assets/zoom-500h-1500h.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/slack-500h-1500h.png"
                className="home-image02"
              />
            </div>
            <div className="home-container3">
              <img
                alt="image"
                src="/playground_assets/googlemeet-500h-1500h.png"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/teams-500h-1500h.png"
                className="home-image04"
              />
            </div>
            <div className="home-container4">
              <img
                alt="image"
                src="/playground_assets/gtm-500h-1500h.png"
                className="home-image05"
              />
            </div>
          </div>
          <div className="home-container5">
            <img
              src="/playground_assets/googlemeet-500h-1500h.png"
              alt="image"
              className="home-image06"
            />
            <img
              src="/playground_assets/zoom-500h-1500h.png"
              alt="image"
              className="home-image07"
            />
            <img
              src="/playground_assets/teams-500h-1500h.png"
              alt="image"
              className="home-image08"
            />
            <img
              src="/playground_assets/slack-500h-1500h.png"
              alt="image"
              className="home-image09"
            />
            <img
              src="/playground_assets/gtm-500h-1500h.png"
              alt="image"
              className="home-image10"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
