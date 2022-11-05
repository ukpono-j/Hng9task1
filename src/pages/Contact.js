


import { useState } from 'react'
import '../styles/contact.css'
import Footer from './footer'


function Contact() {
  const [errorr, setError] = useState(false)
  const [message, setMessage] = useState("")
  function submit() {
    if (!message) setError(true)
  }
  const name = "Itoro Brown"


  return (
    <>
      <div id="contact-me-container">
        <div id="inner-container">
          <div id="contact-header">
            <h2 id="contact-me">Contact Me</h2>
            <p id="contact-me-text">
              Hi there, contact me to ask me about anything you have in mind
            </p>
          </div>
          <div id="form-container">
            <form>
              <div id="name-row" className="inputs">
                <div id="first-name-container">
                  <label>First Name</label>
                  <input
                    id="first_name"
                    placeholder="Enter your first name" required


                  />
                </div>
                <div id="second-name-container">
                  <label>Last Name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your last name" required

                  />
                </div>
                <div>

                </div>
              </div>

              <div id="email" className="inputs">
                <label>Email</label>
                <input type="email" placeholder="yourname@email.com" />
              </div>
              <div id="message" className="inputs">
                <label>Message</label>
                <textarea
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  onChange={(e)=>{
                      setError(false)
                      setMessage(e.target.value)}}
               required />
                {errorr ? <div>error</div> : ""}
              </div>
              <div id="checkbox-area" className="inputs">
                <input type="checkbox" id="checkbox" required/>
                <p>
                  You agree to providing your data to {name} who may
                  contact you.
                </p>
              </div>
              <div id="submit-btn-section" className="inputs">
                <button id="btn__submit" onClick={submit}>Send Message</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;