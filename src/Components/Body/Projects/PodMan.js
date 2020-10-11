import React from 'react'
import './Projects.css'
import PodMan1 from '../../../img/PodMan/PodMan1.png'


export default function PodMan() {
    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        PodMan
                    </div>
                    <div className="description">
                        A marketplace for fans to buy and sell last-minute concert tickets using a bidding
                        system.
                        The seller offers concert tickets up for bid, takes bids, and then sells them to the highest
                        bidder. Built by a team of 4 programmers.
                    </div>
                    <div className="technologies">
                        Built with: React, MobX, Node.JS, Express, SQL.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{color:"white"}} href="https://github.com/ofergilboa/PriceLess" target="blank">GitHub</a>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={PodMan1} className="imageOnly" max-width="100%" max-height="500px" />
                </div>
            </div>

        </div>
    )
}
