import React, { Component } from 'react'
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


const useStyles = makeStyles(theme => ({
   root: {
      width: '90vw',
      zIndex: 1,
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));


export default function SimpleExpansionPanel() {
   const classes = useStyles();
   let images1 = [CRM1, CRM2, CRM3, CRM4, CRM5, CRM6, CRM7]
   let images2 = [PriceLess1, PriceLess2, PriceLess3]
   let images3 = [PodMan1, PodMan2, PodMan3, PodMan4, PodMan5]
   let images4 = [OfersSite1, OfersSite2, OfersSite3, OfersSite4, OfersSite5, OfersSite6]
   const [index, setIndex] = React.useState(0);

   // React.useEffect(() => {
   // const timer = setInterval(() => {
   //    if (index === 4) {
   //       setIndex(0);
   //    } else {
   //       setIndex(prev => prev + 1);
   //    }
   // }, 10000);
   // return () => clearInterval(timer);
   // }, [index]);

   return (
      <div className={classes.root}>
         <div id="web">Projects</div>
         {/* <br /> */}
         <ExpansionPanel >
            <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography className={classes.heading}>CRM</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
               <Typography style={{ color: "rgb(59, 58, 63)" }}>
                  a web application for tracking and managing a company's interaction with current and
                  potential customers.
                  <br />
                  Client side uses React, server side uses Node.JS, Express, and MongoDB.
                  <br />
                  <br />
                  <div>
                  <a href="https://github.com/ofergilboa/Ofers-Site" target="blank">see on : GitHub | </a>
                  <a href="https://crm-ofer-gilboa.herokuapp.com/" target="blank">Heroku</a>
                  </div>
                  <br />
                  <br />
                  {/* <img className="imgWeb" src={CRM1} /> */}
                  <Gallery
                     style={{
                        background: "rgb(243, 243, 243)",

                        // height: "100vh",
                        // width: "100%",
                        // padding: "4vMin 0px 4vMin 0px",
                        // borderRadius: "2vMax",
                        // margin: "auto"
                     }}
                     index={index}
                     onRequestChange={i => {
                        setIndex(i);
                     }}
                  >
                     {images1.map(image => (
                        <GalleryImage objectFit="contain" key={image} src={image} />
                     ))}
                  </Gallery>

               </Typography>
            </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel>
            <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2a-content"
               id="panel2a-header">
               <Typography className={classes.heading} style={{
               }}>PriceLess</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
               <Typography>
                  a marketplace for fans to buy and sell last-minute concert tickets using a bidding
                  system.
                  <br />
                  The seller offers concert tickets up for bid, takes bids, and then sells them to the highest
                  bidder.
                  <br />
                  Client side uses React and MobX, server side uses Node.JS, Express, and SQL.
                  <br />
                  <br />
                  <a href="https://github.com/ofergilboa/PriceLess" target="blank">See on : GitHub</a>
                  <br />
                  <br />
                  <Gallery
                     style={{
                        background: "rgb(243, 243, 243)",
                     }}
                     index={index}
                     onRequestChange={i => {
                        setIndex(i);
                     }}
                  >
                     {images2.map(image => (
                        <GalleryImage objectFit="contain" key={image} src={image} />
                     ))}
                  </Gallery>
          </Typography>
            </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel>
            <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel2a-content"
               id="panel2a-header"
            >
               <Typography className={classes.heading} style={{
                  // height: "100vh",
                  // width: "100%",
                  // padding: "0vh 0px 4vmin 0px"
               }}>PodMan</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
               <Typography>
                  a podcast manager app designed for phones, which shows podcasts by categories and plays selected episode.  <br />Using jQuery and handlebars. *best viewed on mobile
                  <br />
                  <br />
                  <a href="https://github.com/ofergilboa/podcastManager" target="blank">See on : GitHub | </a>
                  <a href="https://crm-ofer-gilboa.herokuapp.com/" target="blank">Heroku</a>
                  <br />
                  <br />
                  <Gallery
                     style={{
                        background: "rgb(243, 243, 243)",
                        // paddingLeft: "50%",
                        // maxHeight: "90vh"
                     }}
                     index={index}
                     onRequestChange={i => {
                        setIndex(i);
                     }}
                  >
                     {images3.map(image => (
                        <GalleryImage objectFit="contain" key={image} src={image} />
                     ))}
                  </Gallery>
          </Typography>
            </ExpansionPanelDetails>
         </ExpansionPanel>

         <ExpansionPanel>
            <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel1a-content"
               id="panel1a-header"
            >
               <Typography className={classes.heading}>Ofer's Site</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
               <Typography>
                  A web page for showcasing chosen apps, architecture stuff, my CV, about me.
                  <br />
                  *constantly being updated
                  <br />
                  <br />
                  <Gallery
                     style={{
                        background: "rgb(243, 243, 243)",
                        // paddingLeft: "50%",
                        // maxHeight: "90vh"
                     }}
                     index={index}
                     onRequestChange={i => {
                        setIndex(i);
                     }}
                  >
                     {images4.map(image => (
                        <GalleryImage objectFit="contain" key={image} src={image} />
                     ))}
                  </Gallery>
          </Typography>
            </ExpansionPanelDetails>
         </ExpansionPanel>

         {/* <ExpansionPanel disabled>
            <ExpansionPanelSummary
               expandIcon={<ExpandMoreIcon />}
               aria-controls="panel3a-content"
               id="panel3a-header"
            >
               <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
            </ExpansionPanelSummary>
         </ExpansionPanel> */}
      </div>
   );
}
