import React, { Component } from 'react'
import moment from 'moment'
import './Navbar.css'

class Navbar extends Component {
   render() {
      return (
         <div className="navbar links">
            <div>
               <div className="top nav2">Back To Top</div>
               <div className="sites nav2">
                  <div className="sites">WEB</div>
                  <div className="priceless">PriceLess</div>
                  <div className="crm">CRM</div>
                  <div className="podman">PodMan</div>
               </div>
               <div className="arch nav2">Arch Stuff</div>
               <div className="cv nav2">CV</div>
               <div className="aboutMe nav2">About Me</div>
               <div className="updated text2">Last updated: <br />
                  Oct 14, 2019 <br />
                  {moment("2019101413", "YYYYMMDDHH").fromNow()}
               </div>
            </div >
         </div>)
   }
}
export default Navbar