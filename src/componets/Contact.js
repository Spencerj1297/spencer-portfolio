import React, { useState } from "react"
import link from "../assets/link.png"
import github from "../assets/GITHUB.png"

const FORM_ENDPOINT = "" // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true)
    }, 100)
  }

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    )
  }

  return (
    <>
  <div className="contactContainer" id="contact-container">
  
    <div className="contact-header-container">
    <p className="subHeaderContact">Contact me</p>
    </div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="form"
    >
      <div className="container-contact-form1">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="your-name"
          required
        />
      </div>
      <div className="container-contact-form2">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="your-email"
          required
        />
      </div>
      <div className="container-contact-form3">
        <textarea
          placeholder="Your message"
          name="message"
          className="your-message"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <br />
        <br />
        <button
          className="send-a-message"
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
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
  </div>
    </>
  )
}

export default Contact
