import React from "react"
const ContactButton = () => {
    return (
      <button
        className="NavBarBut"
        onClick={() =>
          document
            .getElementById("subHeaderContact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact me
      </button>
    );
  };
  export default ContactButton