import React, { useState, useEffect } from "react"
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
import image1 from "./assets/Yum.png"
import image2 from "./assets/Pokemon.png"
import image3 from "./assets/apartment.png"
import image4 from "./assets/tic-tac.png"
import image5 from "./assets/piglatin.png"
import link from "./assets/link.png"
import github from "./assets/GITHUB.png"


const App = () => {
  const slides = [
    { image: image1, title: "Yum", url: "https://yum-web-application-front.onrender.com/" },
    { image: image2, title: "I Choose You", url: "https://www.linkedin.com/in/a-spencer-johnson" },
    { image: image3, title: "Apartment app", url: "https://www.linkedin.com/in/a-spencer-johnson" },
  ]

  useEffect(() => {
    const reveal = () => {
      let reveals = document.querySelectorAll('.reveal')
      for(let i = 0; i < reveals.length; i++){
        let windowheight = window.innerHeight
        let revealtop = reveals[i].getBoundingClientRect().top
        let revealpoint = 150
        if(revealpoint < windowheight - revealtop){
          reveals[i].classList.add('active')
        }
        else{
          reveals[i].classList.remove('active')
        }
      }
    }
    window.addEventListener("scroll", reveal)

    return () => {
      window.removeEventListener("scroll", reveal)
    }
  }, [])

  return (
    <>
      <Cursor  />
      <section>
      <HeaderMain />
      <ContactButton />
      <ScrollMouse />
      </section>
      <section className="container reveal">
      <ProjectDescription />

      <div className="projectsContainer">
        <Projects slides={slides} />
      </div>
      </section>
      <section className="container reveal">
      <Me />
      </section>
      <section className="container reveal">
      <Contact />
      <div className="footer-styles">
          <a
            href="https://www.linkedin.com/in/a-spencer-johnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link} className="logo-links" />
          </a>
          <a
            href="https://github.com/Spencerj1297"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="logo-links" id="github-link" />
          </a>
        </div>
      </section>
    </>
  )
}
export default App
