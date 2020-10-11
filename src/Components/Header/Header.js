import React, { Component } from 'react'
import './Header.css'
import Ofer from '../../files/Ofer.jpeg'



class Header extends Component {
   render() {
      return (
         <div id="header" className="header links">
            <div className=" ofer name links" >Ofer Gilboa</div>
            <br />
            <div className="name links" style={{color: "black", fontSize:"30px"}} >Full Stack Web Developer</div>
            <br />
            <br />
            <div className="content">
               {/* <img className="image" src={Ofer} alt="image" ></img> */}
               <div className="headerText text1">
                  A team player, critical thinker, and self-learner with excellent technical skills.
                  <br />
                   An innovative solution seeker with a keen eye for detail.
                  <br />
                  Looking to embark on a new journey in the field of full-stack web development.
               </div>
               <br />
            </div>
         </div>)
   }
}
export default Header