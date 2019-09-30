import React, { Component } from 'react'
import './Contact.css'
import OferGilboaCV from '../../files/OferGilboaCV.pdf'


class Contact extends Component {
   render() {
      return (
         <div className="contactDiv">
            {/* <button className="contactCV" >Download CV</button> */}
            <a className="contactCV" href={OferGilboaCV} download="Ofer Gilboa CV">Download CV</a>
            <div className="contactInfo">
               <div className="contact" >ofer1gilboa@gmail.com</div>
               <div className="contact" >0528283312</div>
               <div className="contact" >Tel Aviv</div>
               <a href="https://www.linkedin.com/in/ofer-gilboa" target="blank" className="contact link" >LinkedIn</a>
               <a href="https://github.com/ofergilboa" target="blank" className="contact link" >GitHub</a>
               <a href="https://www.codewars.com/users/ofergilboa" target="blank" className="contact link" >CodeWars</a>
            </div>
         </div>
      )
   }
}
export default Contact

