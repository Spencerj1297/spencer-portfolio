import React from "react"
import spencer from "../assets/spencer2.0.png"
import HTML from "../assets/HTML.png"
import newSpencer from "../assets/newSpencer.png"

const Me = () => {
  return (
    <>
    <div className="background-about-me">
      <div className="fadedTitles2">WHO</div>
      <div className="aboutMeContainer">
        <div className="descriptionContainer">
          <h2 className="subHeaders">little about myself </h2>
          <p className="text">
            Thank you for taking the time to checkout my portfolio! I am a
            full-stack software developer, former United States Naval
            Aircrewman, and most importantly husband to my amazing bride. <br />
            <br />
            In my journey to changing career paths I have gained the key skills
            to being an asset within the tech industry. I have a passion for my
            former roots flying in the MH-60R helicopter and dream of working
            the software side of military aviation! <br />
            <br />
            I'd love to get in-touch with you so feel free to send me a message
            down below and checkout my{" "}
            <a
              href="https://www.linkedin.com/in/a-spencer-johnson"
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration:'none', color:"#358bd2"}}
            >
              LinkedIn
            </a>{" "}
            for more about me!
          </p>
        </div>
        <img src={newSpencer} className="me" />
      </div>
      </div>
    </>
  )
}
export default Me
