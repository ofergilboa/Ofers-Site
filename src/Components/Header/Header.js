import React, { Component } from 'react'
import './Header.css'
import Ofer from '../../files/Ofer.jpeg'



class Header extends Component {
   render() {
      return (
         <div className="header">
            <div className="name">Ofer Gilboa- Junior Full Stack Web Developer</div>
            <div className="content">
               <img className="image" src={Ofer} alt="image" ></img>
               <br />
               <div className="headerT">
                  After a long period of devoting myself to Architecture, I started looking for a new
      field that will excite me and found the world of coding.
            <br />
                  highly motivated, organized, sees the big picture and doesn't take things for granted.
                  excited about learning new things, finding better ways of doing things I already know,
                  and solving problems.
            </div>
            </div>
         </div>)
   }
}
export default Header