import React, { Component } from 'react'
import './Header.css'
import Ofer from '../../files/Ofer.jpeg'



class Header extends Component {
   render() {
      return (
         <div className="header text1">
            <div className="name text1" >Ofer Gilboa- Junior Full Stack Web Developer</div>
            <div className="content">
               <img className="image" src={Ofer} alt="image" ></img>
               <br />
               <div className="headerText text1">
                  A team player, critical thinker, and self-learner with excellent technical skills and academic
                  qualifications.
                  <br />
                  I possess a proven ability to ensure architectural projects are functional, safe, and
                  well-designed.
                  <br />
                  I am an innovative solution seeker with a keen eye for detail, looking to embark
                  on a new journey in the field of full-stack web development.
               </div>
            </div>
         </div>)
   }
}
export default Header