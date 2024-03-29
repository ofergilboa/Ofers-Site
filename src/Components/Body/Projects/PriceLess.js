import React from 'react'
import './Projects.css'

let PriceLess1 = 'https://i.imgur.com/xv8LEUo.png'


export default function PriceLess() {
    return (
        <div>
            <div className="project">
                <div className="projectText">
                    <div className="header">
                        PriceLess
                    </div>
                    <div className="description">
                        A marketplace for fans to buy and sell last-minute concert tickets using a bidding
                        system.
                        The seller offers concert tickets up for bid, takes bids, and then sells them to the highest
                        bidder. Built by a team of 4.
                    </div>
                    <div className="technologies">
                        Built with: React, MobX, Node.JS, Express, SQL.
                    </div>
                    <div className="links">
                        <a className="linkButton" style={{color:"white"}} href="https://github.com/ofergilboa/PriceLess" target="blank">GitHub</a>
                    </div>
                </div>
                <div className="projectImage">
                    <img src={PriceLess1} className="imageOnly" width="100%" />
                </div>
            </div>

        </div>
    )
}
