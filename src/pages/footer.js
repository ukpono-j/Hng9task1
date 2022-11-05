import React from "react"
import zurilogo from '../asset/zurilogo.png'
import logo2 from '../asset/I4G.png'
import '../styles/Footer.css'

const Footer =()=>{
    return(
        <div id='footer'>
      <img src={zurilogo} alt='' />
      <p id='footertext'>HNG Internship 9 Frontend Task</p>
      <img src={logo2} alt='' />
    </div>
    )
}

export default Footer