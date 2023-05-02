import React from "react"

const ProjectDescription = () => {
  return (
    <>
      <span className="fadedTitles">WORK</span>
      <div className="descriptionContainer">
        <div className="subHeaders">Portfolio</div>
        <p className="text">
          Here is a list of a few of the projects I have created! Some are ideas
          created to solve everyday problems I have interest in, while others
          were a colobrateive effort with some awesome people. For more of my
          work click{" "}
          <a
            href="https://github.com/Spencerj1297"
            target="_blank"
            rel="noopener noreferrer"
            className="intext-link"
          >
            <span className="intext-link">see more</span>
          </a>{" "}
          or the Github link at the bottom of my page. Enjoy!
          
        </p>
        
      </div>
      <a
          href="https://github.com/Spencerj1297"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="NavBarBut2">See more</button>
        </a>
    </>
  )
}
export default ProjectDescription
