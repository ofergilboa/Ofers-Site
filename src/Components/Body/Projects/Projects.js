import React, { Component } from 'react'
import PriceLess from './PriceLess'
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CRM1 from '../../../img/CRM/Home.PNG'
import CRM2 from '../../../img/CRM/Clients.PNG'
import CRM3 from '../../../img/CRM/ClientsByCountry.PNG'
import CRM4 from '../../../img/CRM/CRMclients.PNG'
import CRM5 from '../../../img/CRM/Actions.PNG'
import CRM6 from '../../../img/CRM/Analytics.PNG'
import CRM7 from '../../../img/CRM/AnalyticsOwner.PNG'

import PriceLess1 from '../../../img/PriceLess/homepage.png'
import PriceLess2 from '../../../img/PriceLess/concertPage.png'
import PriceLess3 from '../../../img/PriceLess/front.png'
import PodMan1 from '../../../img/PodMan/PodMan1.png'
import PodMan2 from '../../../img/PodMan/PodMan2.PNG'
import PodMan3 from '../../../img/PodMan/PodMan3.PNG'
import PodMan4 from '../../../img/PodMan/PodMan4.PNG'
import PodMan5 from '../../../img/PodMan/PodMan5.PNG'
import OfersSite1 from '../../../img/OfersSite/header.PNG'
import OfersSite2 from '../../../img/OfersSite/headerM.PNG'
import OfersSite3 from '../../../img/OfersSite/body.PNG'
import OfersSite4 from '../../../img/OfersSite/bodyM.PNG'
import OfersSite5 from '../../../img/OfersSite/ZBar.PNG'
import OfersSite6 from '../../../img/OfersSite/ZBarM.PNG'
import { Gallery, GalleryImage } from "react-gesture-gallery";

import test1 from '../../../img/Recorder/test1.mp4'
import CRM from './CRM';
import Recorder from './Rcorder';
import PodMan from './PodMan';
import MySite from './MySite';



export default function Projects() {
    // const classes = useStyles();
    let images1 = [test1]
    // let images1 = [test1, CRM1, CRM2, CRM3, CRM4, CRM5, CRM6, CRM7]
    let images2 = [PriceLess1, PriceLess2, PriceLess3]
    let images3 = [PodMan1, PodMan2, PodMan3, PodMan4, PodMan5]
    let images4 = [OfersSite1, OfersSite2, OfersSite3, OfersSite4, OfersSite5, OfersSite6]
    // const [index, setIndex] = React.useState(0);


    return (
        <div >
            <div id="web">Projects</div>
            <CRM/>
            <Recorder />
            <PriceLess />
            <PodMan />
            <MySite />

        </div>
    );
}
