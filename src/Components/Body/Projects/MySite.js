import React, { useState } from 'react'
import './Projects.css'
import mobile from '../../../img/OfersSite/bodyM.PNG'
import web from '../../../img/OfersSite/body.PNG'


export default function MySite() {

    // const [isGif, setIsGif] = useState(image)


    let isWeb = window.screen.width > 700 ? mobile : web


    console.log(isWeb)

    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        MySite
                    </div>
                    <div className="description">
                        A web and mobile app for showcasing chosen apps, architecture stuff, my CV.
                        <br />
                        <br />
                        *You are viewing the example on the right on the opposite platform than you are on.
                    </div>
                    <div className="technologies">
                        Built with: React.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{ color: "white" }} href="https://github.com/ofergilboa/PriceLess" target="blank">GitHub</a>
                    </div>
                </div>
                <div className="projectImage">
                    {isWeb === web ?
                        <img src={isWeb} className="imageOnly" width="100%" />
                        :
                        <img src={isWeb} className="imageOnly" height='450px' />
                    }
                </div>
            </div>

        </div>
    )
}
