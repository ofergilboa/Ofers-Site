import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CRM1 from '../../../img/CRM/Clients.PNG'
import CRM2 from '../../../img/CRM/ClientsByCountry.PNG'
import CRM3 from '../../../img/CRM/Actions.PNG'
import CRM4 from '../../../img/CRM/Analytics.PNG'
import CRM5 from '../../../img/CRM/tryGif.gif'
import { Gallery, GalleryImage } from "react-gesture-gallery";


// class Web extends Component {
//    render() {
//       return (
//          <div className="web" id="web">
//             <div>my sites</div>
//             <br />
//             <SimpleExpansionPanel />
//             <br />
//             {/* <CRM /> */}
//          </div>)
//    }
// }
// export default Web


const useStyles = makeStyles(theme => ({
   root: {
      width: '90vw',
      // padding: "0px 0px 0px -50px", 
      zIndex: 1,
   },
   heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
   },
}));


export default function SimpleExpansionPanel() {
   const classes = useStyles();
   let images = [CRM1, CRM2, CRM3, CRM4, CRM5]
   const [index, setIndex] = React.useState(0);

   React.useEffect(() => {
      // const timer = setInterval(() => {
      //    if (index === 4) {
      //       setIndex(0);
      //    } else {
      //       setIndex(prev => prev + 1);
      //    }
      // }, 10000);
      // return () => clearInterval(timer);
   }, [index]);

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
               <Typography style={{color: "rgb(59, 58, 63)"}}>
                  a web application for tracking and managing a company's interaction with current and
   potential customers.
   <br />
                  Client side uses React, server side uses Node.JS, Express, and MongoDB.
   <br />
                  <br />
                  <a href="https://github.com/ofergilboa/Ofers-Site" target="blank">See on GitHub</a>
                  <a href="https://crm-ofer-gilboa.herokuapp.com/" target="blank">See on Heroku</a>

                  <br />
                  <br />
                  {/* <img className="imgWeb" src={CRM1} /> */}
                  <Gallery 
                     style={{
                        background: "rgb(59, 58, 63)",

                        // height: "100vh",
                        width: "90%",
                        padding: "4vMin 0px 4vMin 0px",
                        borderRadius: "2vMax",
                        margin: "auto"
                     }}
                     index={index}
                     onRequestChange={i => {
                        setIndex(i);
                     }}
                  >
                     {images.map(image => (
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
