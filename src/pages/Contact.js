// import '../styles/contact.css'

// function Contact() {
//     return (
//         <div id='_main'>
//             <div className='main_container'>

//                 <form>
//                     <div className='contact_title'>
//                         <h1>Contact</h1>
//                         <p>
//                             This is the contact page.
//                         </p>
//                     </div>
//                     <div className='fields'>
//                         <div>
//                             <label>First Name</label>
//                             <div>
//                                 <input type='text' className='first' placeholder='First name' />
//                             </div>
//                         </div>
//                         <div>
//                             <label>Last Name</label>
//                             <div>
//                                 <input type='text' className='second' placeholder='Last name' />
//                             </div>
//                         </div>
//                     </div>
//                     {/* the email area */}
//                     <div className='email_area'>
//                         <label>Email</label>
//                         <div>
//                             <input type="email" placeholder="yourname@gmail.com" />
//                         </div>
//                         {/* Messsage area */}
//                         <div className='message_area'>
//                             <label className='mess'>Messsage</label>
//                             <div>
//                                 <textarea type='text' placeholder="Send me a message and I'll reply you as soon as possible..." ></textarea>
//                             </div>

//                         </div>
//                         <div className='terms'>
//                         <div>
//                           <input type='checkbox' />

//                         </div>
//                         <div>
//                             <label>
//                                 Click here to accept terms
//                             </label>
//                         </div>
                           

//                         </div>
//                         <div className='submit_btn'>
//                                 <button type='submit'>Submit</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Contact


import '../styles/contact.css'


function Contact() {

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
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div id="second-name-container">
                  <label>Last Name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div id="email" className="inputs">
                <label>Email</label>
                <input type="email" placeholder="yourname@email.com" required />
              </div>
              <div id="message" className="inputs">
                <label>Message</label>
                <textarea
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  required
                />
              </div>
              <div id="checkbox-area" className="inputs">
                <input type="checkbox" id="checkbox" required />
                <p>
                  You agree to providing your data to {name} who may
                  contact you.
                </p>
              </div>
              <div id="submit-btn-section" className="inputs">
                <button id="btn__submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;