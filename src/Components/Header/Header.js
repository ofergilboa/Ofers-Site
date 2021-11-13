import React, { Component } from 'react'
import './Header.css'
// import Ofer from '../../files/Ofer.jpeg'
import Typical from 'react-typical'


class Header extends Component {
    render() {
        return (
            <div id="header" className="header links">
                <div className=" ofer name links" >Ofer Gilboa</div>
                <br />
                {/* <div className="name links" style={{ color: "black", fontSize: "30px" }} >Full Stack Developer</div> */}
                <div className="name links" style={{ color: "black", fontSize: "30px" }} >
                    <Typical loop={Infinity}
                        steps={[
                            "...", 1200,
                            "A Junior Full-Sta...", 400,
                            "A Junior Front-End...", 600,
                            "A Full-Stack Developer (Front-End Orientated)", 46000,
                        ]}
                    />
                </div>
                <div className="name links" style={{ color: "white", fontSize: "20px" }} >
                    <Typical loop={Infinity}
                        steps={[
                            "...", 10000,
                            "Dog Owner...-", 500,
                            "Dog Dad.", 1000,
                            "B-Arch (Architecture Degree)", 1000,
                            "B-Arch from Tel Aviv University", 1000,
                            "Sport enthusiast:", 1000,
                            "Basketball, Football.....-", 800,
                            "Basketball, Soccer...!?", 600,
                            "Basketball, Football.", 1000,
                            "A fan of The Big Screen...", 1000,
                            "A fan of The Small Screen...", 1000,
                            "A fan of Music...", 1000,
                            "A Guitar Player...", 1000,
                            "A Guitar Playerish", 1000,
                            "And I think that's enough for now", 1000,
                            "...", 4000,
                        ]}
                        />
                </div>
                <br />
                <br />
                <div className="content">
                    {/* <img className="image" src={Ofer} alt="image" ></img> */}
                    <div className="headerText text1">
                        A team player with an analytical mind.
                        <br />
                        A critical thinker, and self-learner with excellent technical skills and academic qualifications.
                        <br />
                        An innovative solution seeker with a keen eye for detail.
                        <br />
                        looking to embark on a new journey in the tech world.
                    </div>
                    <br />
                </div>
            </div>)
    }
}
export default Header