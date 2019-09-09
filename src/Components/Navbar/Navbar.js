import React, { Component } from 'react'
import moment from 'moment'


class Navbar extends Component {
   render() {
      return (
         <div className="navbar">
            <div className="updated">Last updated on: <br />
               Sep 9, 2019 <br />
               {moment("2019090913", "YYYYMMDDHH").fromNow()}</div>
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