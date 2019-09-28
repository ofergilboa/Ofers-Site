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
               <div className="contact link" >LinkedIn</div>
               <div className="contact link" >GitHub</div>
               <div className="contact link" >CodeWars</div>
            </div>
         </div>
      )
   }
}
export default Contact