import React, { useState } from "react"
import "./App.css"
import HeaderMain from "./componets/HeaderMain"
import ContactButton from "./componets/ContactButton"
import ScrollMouse from "./componets/ScrollMouse"
import ProjectDescription from "./componets/ProjectDescription"
import Projects from "./componets/Projects.js"
import Me from "./componets/Me"
import Contact from "./componets/Contact"
import Cursor from "./Cursor"
// import Footer from "./componets/Footer"
import image1 from "./assets/tic-tac.png"
import image2 from "./assets/piglatin.png"
import image3 from "./assets/image3.avif"
import image4 from "./assets/image4.avif"
import image5 from "./assets/image5.avif"

const App = () => {
  const slides = [
    { url: image1, title: "Github" },
    { url: image2, title: "link" },
    { url: image3, title: "me" },
    { url: image4, title: "waves" },
    { url: image5, title: "also me" },
  ]

  return (
    <>
      <Cursor />
      <HeaderMain />
      <ContactButton />
      <ScrollMouse />
      <ProjectDescription />

      <div className="projectsContainer">
        <Projects slides={slides} />
      </div>
    
      <Me />
      <Contact />
  
    </>
  )
}
export default App
