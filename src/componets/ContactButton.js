import React from "react"
const ContactButton = () => {
    return (
      <button
        className="NavBarBut"
        onClick={() =>
          document
            .getElementById("contact-container")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact me
      </button>
    );
  };
  export default ContactButton