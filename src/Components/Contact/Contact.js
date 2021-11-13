import React, { Component } from 'react'
import './Contact.css'
import OferGilboaCV from '../../files/OferGilboaCV.pdf'
import InfoMenu from './InfoMenu'
import LinksMenu from './LinksMenu'
import moment from 'moment'
import AnchorLink from 'react-anchor-link-smooth-scroll'



class Contact extends Component {
    render() {
        return (
            <div className="contactDiv">
                <div className="linksMenu">
                    <InfoMenu />
                    <LinksMenu />
                </div>
                {/* <div className="lastUpdate">Last Updated {moment("2020010713", "YYYYMMDDHH").fromNow()} (Jan 07, 2020)
            </div> */}
                <div className="innerLinks">
                    <AnchorLink className="links" offset='50' href="#web">projects</AnchorLink>
                    <AnchorLink className="links" offset='50' href="#cv">cv</AnchorLink>
                    <AnchorLink className="links" offset='30' href="#arch">arch</AnchorLink>
                    <AnchorLink className="links" href='#header'>back to top</AnchorLink>
                    {/* <a className="links" href="#aboutMe">me</a> */}
                </div>
            </div>
        )
    }
}
export default Contact

