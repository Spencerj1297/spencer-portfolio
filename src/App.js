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
import image1 from "./assets/tic-tac.png"
import image2 from "./assets/piglatin.png"
import image3 from "./assets/image3.avif"
import image4 from "./assets/image4.avif"
import image5 from "./assets/image5.avif"
import link from "./assets/link.png"
import github from "./assets/GITHUB.png"


const App = () => {
  const slides = [
    { url: image1, title: "Github" },
    { url: image2, title: "link" },
    { url: image3, title: "me" },
    { url: image4, title: "waves" },
    { url: image5, title: "also me" },
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
      </section>
      <footer>
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
            <img src={github} className="logo-links" />
          </a>
        </footer>
    </>
  )
}
export default App
