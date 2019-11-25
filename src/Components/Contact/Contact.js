import React, { Component } from 'react'
import './Contact.css'
import OferGilboaCV from '../../files/OferGilboaCV.pdf'
import InfoMenu from './InfoMenu'
import LinksMenu from './LinksMenu'
import moment from 'moment'



class Contact extends Component {
   render() {
      return (
         <div className="contactDiv">
            <div className="linksMenu">
               <InfoMenu />
               <LinksMenu />
            </div>
            <div className="lastUpdate">Last Updated {moment("2019112513", "YYYYMMDDHH").fromNow()} (Nov 25, 2019)
            </div>
            <div className="innerLinks">
               <a className="links" href="#web">web</a>
               <a className="links" href="#arch">arch</a>
               <a className="links" href="#cv">cv</a>
               <a className="links" href="#aboutMe">me</a>
            </div>
         </div>
      )
   }
}
export default Contact

