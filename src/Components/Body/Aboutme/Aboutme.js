import React, { Component } from 'react'
import './Aboutme.css'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OferGilboaCVJ from '../../../files/OferGilboaCVCut.jpeg'


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
   const [index, setIndex] = React.useState(0);

   return (
      <div className ="aboutMe">
         <div id="aboutMe">About Me</div>
         <div className={classes.root}>
            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <Typography className={classes.heading}>About this section</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Who am I- outside of work and school related stuff, very informal.
                     <br/>
                     Not exactly sure how this is going to look.
                     <br/>
                     <br/>
                     <b>Music-</b> Recordings of song covers I played, maybe playlists or videos, we'll see.
                     <br/>
                     <b>Sport-</b> not sure yet how this will work, maybe next time I'll go play basketball or football (soccer) I'll take a camera with me. Probably not.
                     <br/>
                     <b>TV and Movies-</b> lists, my favorites, rankings, reviews, plot holes that got me upset, not sure yet...
                     <br/>
                     <b>Food-</b> recommendations, recipes, images of stuff I cooked.
                     <br/>
                     <br/><b>December 2019, starting to create materials to put here... wish me luck</b>
                     {/* To big of a question for the moment- will fill this up someday. */}
                     {/* <br/> */}
                     {/* For now let's just say im passionate about music and sport, I'm into movies and TV */}
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <Typography className={classes.heading}>Music</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Nothing yet, see "About this section"
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <Typography className={classes.heading}>Sport</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Nothing yet, see "About this section"
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <Typography className={classes.heading}>TV and Movies</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Nothing yet, see "About this section"
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
               <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
               >
                  <Typography className={classes.heading}>Food</Typography>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <Typography>
                     Nothing yet, see "About this section"
                  </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>

         </div>
      </div>)
}