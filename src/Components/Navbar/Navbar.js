import React, { Component } from 'react'
import moment from 'moment'
import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar links">
            <div>
               <div className="top nav2"  ><a className="links" href="#header">Back To Top</a></div>
               <div className="sites nav2">
                  <div className="sites"><a className="links" href="#web">WEB</a></div>
                  <div className="priceless"><a className="links" href="#priceless">PriceLess</a></div>
                  <div className="crm"><a className="links" href="#crm">CRM</a></div>
                  <div className="podman"><a className="links" href="#ofersSite">Ofer's Site</a></div>
               </div>
               <div className="arch nav2"><a className="links" href="#arch">Arch Stuff</a></div>
               <div className="cv nav2"><a className="links" href="#cv">CV</a></div>
               <div className="aboutMe nav2"><a className="links" href="#aboutMe">About Me</a></div>
               <div className="updated text2">Last updated: <br />
                  Oct 27, 2019 <br />
                  {moment("2019102713", "YYYYMMDDHH").fromNow()}
               </div>
            </div >
         </div>)
   }
}
export default Navbar