import React, { Component } from 'react'
import './Body.css'
import Projects from './Projects/Projects'
import Arch from './Arch/Arch'
import CV from './CV/CV'
import AboutMe from './AboutMe/AboutMe'
import SimpleExpansionPanel from './Projects/WebOld'
import test1 from '../../img/Recorder/test1.mp4'


class Body extends Component {
    render() {
        return (
            <div className="body text1">
                <br />
                <Projects />
                {/* <SimpleExpansionPanel /> */}
                <br />
                <CV />
                <br />
                <Arch />
                <br />
                {/* <AboutMe /> */}
            </div>)
    }
}
export default Body