import React, { useState } from 'react'
import './Projects.css'
import PodMan1 from '../../../img/PodMan/PodMan1.png'
import gif from '../../../img/PodMan/PodManGif.gif'
import image from '../../../img/PodMan/PodManImg.png'


export default function PodMan() {

    const [isGif, setIsGif] = useState(image)

    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        PodMan
                    </div>
                    <div className="description">
                        a podcast manager app designed for phones, which shows podcasts by categories and plays selected episode.
                    </div>
                    <div className="technologies">
                        Built with: jQuery, handlebars.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{ color: "white" }} href="https://github.com/ofergilboa/podcastManager" target="blank">GitHub</a>
                        <a className="linkButton" style={{ color: "white" }} href="https://podman-podcast-manager.herokuapp.com" target="blank">App</a>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={isGif} className="imageOnly" height="450px"
                        onMouseEnter={(() => setIsGif(gif))}
                        onMouseLeave={(() => setIsGif(image))}
                        onClick={(() => isGif === gif ? setIsGif(image) : setIsGif(gif))} />
                </div>
            </div>

        </div>
    )
}
