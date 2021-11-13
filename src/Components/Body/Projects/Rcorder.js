import React, { useState } from 'react'
import './Projects.css'
import video from '../../../img/Recorder/video3.mp4'

let image = 'https://i.imgur.com/SEydfzY.jpg'

export default function Recorder() {

    const [isVideo, setIsVideo] = useState(image)

    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        Recorder
                    </div>
                    <div className="description">
                        A mobile app for recording, displaying, filtering and playing audio files.
                        <br />
                  *Hover image to view
                    </div>
                    <div className="technologies">
                        Built with: React-Native, Redux, Node.JS, Express, Expo, Mongo Atlas.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{ color: "white" }} href="https://github.com/ofergilboa/PriceLess" target="blank">GitHub</a>
                    </div>
                </div>
                {<div className="projectImage"


                    onClick={(() => isVideo === image ? setIsVideo(video) : setIsVideo(image))} >
                    {isVideo === image ?
                        <img src={image} className="imageOnly" height="450px" onMouseEnter={(() => setIsVideo(video))} />
                        : <video controls className="imageOnly video-container video-container-overlay" height='450px' muted={false}>
                            <source src={video} type="video/mp4" />
                        </video>}
                </div>}
            </div>

        </div>
    )
}
