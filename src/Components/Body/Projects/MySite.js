import React, { useState } from 'react'
import './Projects.css'

let mobile = 'https://i.imgur.com/xHUPALV.png'
let web = 'https://i.imgur.com/kDlmvYa.png'


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
                        <a className="linkButton" style={{ color: "white" }} href="https://github.com/ofergilboa/Ofers-Site" target="blank">GitHub</a>
                        <a className="linkButton" style={{ color: "white" }} target="blank">You are actually already here</a>
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
