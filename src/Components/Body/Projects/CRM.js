import React, { useState } from 'react'
import './Projects.css'
import CRM1 from '../../../img/CRM/CRM.gif'
import CRM2 from '../../../img/CRM/forWeb.JPG'


export default function Recorder() {

    const [isGif, setIsGif] = useState(CRM2)

    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        CRM
                    </div>
                    <div className="description">
                        A web application for tracking and managing a company's interaction with current and
                        potential customers.
                  <br />
                  Client side uses React, server side uses Node.JS, Express, and MongoDB.
                    </div>
                    <div className="technologies">
                        Built with: React, Node.JS, Express, MongoDB.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{ color: "white" }} href="https://github.com/ofergilboa/Ofers-Site" target="blank">GitHub</a>
                        <a className="linkButton" style={{ color: "white" }} href="https://crm-ofer-gilboa.herokuapp.com/" target="blank">View Website</a>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={isGif} className="imageOnly" width="100%"
                        onMouseEnter={(() => setIsGif(CRM1))}
                        onMouseLeave={(() => setIsGif(CRM2))}
                        onClick={(() => isGif === CRM1 ? setIsGif(CRM2) : setIsGif(CRM1))} />
                </div>
            </div>

        </div>
    )
}
