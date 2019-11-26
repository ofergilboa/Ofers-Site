import React, { Component } from 'react'
import './ZBar.css'
import moment from 'moment'
import OferGilboaCV from '../../files/OferGilboaCV.pdf'




class ZBar extends Component {
   render() {
      return (
         <div>
            <div className="ZBarA">
               <div><a href="https://github.com/ofergilboa" target="blank">GitHub</a></div>
               <div><a href="https://www.linkedin.com/in/ofer-gilboa" target="blank">LinkedIn</a></div>
               <div><a href="https://www.codewars.com/users/ofergilboa" target="blank">CodeWars</a></div>
               <div><a href={OferGilboaCV} download="Ofer Gilboa CV">Download CV</a></div>
            </div>
            <div className="ZBarB">
               <div >Last Updated {moment("2019112513", "YYYYMMDDHH").fromNow()} (Nov 25, 2019)</div>
               <div >ofer1gilboa@gmail.com</div>
               <div >0528283312</div>
               <div className="city">Tel Aviv</div>
            </div>
         </div>
      )
   }
}
export default ZBar