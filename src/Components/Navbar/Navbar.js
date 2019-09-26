import React, { Component } from 'react'
import moment from 'moment'
import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            <div className="updated">Last updated on: <br />
               Sep 25, 2019 <br />
               {moment("2019092522", "YYYYMMDDHH").fromNow()}</div>
            <br />
            <div className="sites">sites
            <br />
               <div className="priceless">PriceLess</div>
               <div className="crm">CRM</div>
               <div className="podman">PodMan</div>
            </div>
            <br />
            <div className="arch">Cool Arch Stuff</div>
            <br />
            <div className="cv">CV</div>
            <br />
            <div className="aboutMe">About Me</div>
         </div>)
   }
}
export default Navbar