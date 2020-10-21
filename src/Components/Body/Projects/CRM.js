import React, { useState } from 'react'
import './Projects.css'
import gif from '../../../img/CRM/CRM.gif'
import image from '../../../img/CRM/forWeb.JPG'


export default function Recorder() {

    const [isGif, setIsGif] = useState(false)

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
                    <img src={isGif ? gif : image} className="imageOnly" width="100%"
                        onMouseEnter={(() => setIsGif(true))}
                        onMouseLeave={(() => setIsGif(false))}
                        onClick={(() => !isGif ? setIsGif(true) : setIsGif(false))}
                    />
                </div>
            </div>

        </div>
    )
}
