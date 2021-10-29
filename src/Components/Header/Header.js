import React, { Component } from 'react'
import './Header.css'
import Ofer from '../../files/Ofer.jpeg'



class Header extends Component {
    render() {
        return (
            <div id="header" className="header links">
                <div className=" ofer name links" >Ofer Gilboa</div>
                <br />
                <div className="name links" style={{ color: "black", fontSize: "30px" }} >Developer, Data Analyst, Product Manager, Digital Marketing</div>
                <br />
                <br />
                <div className="content">
                    {/* <img className="image" src={Ofer} alt="image" ></img> */}
                    <div className="headerText text1">
                        A team player with an analytical mind.
                        <br /> A critical thinker, and self-learner with excellent technical skills and academic qualifications.
                        <br />An innovative solution seeker with a keen eye for detail.
                        <br />looking to embark on a new journey in the tech world.
                    </div>
                    <br />
                </div>
            </div>)
    }
}
export default Header