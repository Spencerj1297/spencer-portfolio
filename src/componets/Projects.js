import React, { useState } from "react"

const Projects = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <>
      <div className="slide-container">
        <div className="left-arrow" onClick={goToPrevious}>
          〈{" "}
        </div>
        <div className="right-arrow" onClick={goToNext}>
          {" "}
          〉
        </div>
        <div
          className="slides"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="dot-container">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="dot-styles"
              onClick={() => goToSlide(slideIndex)}
            >
              ⏺
            </div>
          ))}
        </div>
      </div>
    
    </>
  )
}
export default Projects
