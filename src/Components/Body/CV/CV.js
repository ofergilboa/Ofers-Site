import React, { Component } from 'react'
import './CV.css'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OferGilboaCVJ from '../../../files/OferGilboaCVCut.jpeg'
import OferGilboaCVJ2 from '../../../files/OferGilboaCVslides.jpg'
import OferGilboaCV from '../../../files/OferGilboaCV.pdf'


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
        <div>
            <div id="cv">CV</div>
            <div className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Personal Statement</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            A team player, critical thinker, and self-learner with excellent technical skills.
                     <br />An innovative solution seeker with a keen eye for detail, looking to embark
                                       on a new journey in the field of full-stack web development.
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Education</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>2019 | Full-Stack Web Development</b>, Elevation Academy, Tel Aviv
            <br />An intensive 3-month coding course that covered the entire <b>MERN</b> stack and beyond. <br />Built a
                                       number of end-to-end projects from scratch while adhering to solid OOP principles and
                                       communicating with a number of external APIs.
            <br /><br /><b>2011-2017 | Architecture </b>(B.Arch), Tel Aviv University
            <br />● Created multiple projects from concept and schematic design to detailed construction and
                                       presentation
            <br />● Prepared 2D and 3D models using Autocad and Rhinoceros, as well as physical models.
            <br />● Worked in collaboration with others and independently.
            <br /><br />GPA | 82
            <br />Psychometric exam score | <b>742</b>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Skills</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>Client Side :</b> React and Redux, React-Native, JavaScript (ES5/6) , HTML, CSS, LESS
            <br /><b>Server Side and DataBase :</b> Node.js, Express, MongoDB, Mongoose, SQL
            <br /><b>Tools :</b> Git, working in collaboration in Github, Heroku
            <br /><b>Software applications :</b> PowerPoint, Word, Photoshop, Rhinoceros, Autocad
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Projects</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>CRM -</b> A web application for tracking and managing a company's interaction with current and
                                       potential customers. <br />Client side uses React, server side uses Node.JS, Express, and MongoDB.
                                       <br /><br /><b>Recorder- </b> A mobile app for recording, displaying, filtering and playing audio files. <br />Built with: React-Native, Redux, Node.JS, Express, Expo, Mongo Atlas.
                                       <br /><br /><b>PriceLess -</b> A marketplace for fans to buy and sell last-minute concert tickets using a bidding
                     system. The seller offers concert tickets up for bid, takes bids, and then sells them to the highest
                     bidder . <br />Client side uses React and MobX, server side uses Node.JS, Express, and SQL. Built by a team of 4.
            <br /><br /><b>Ofer’s Site - </b> you are currently in it.
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Internships</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>June 2020 -</b> Shout- an Instagram Influencer Marketing Platform. Working with Python, JavaScript, React-Native, Redux.
                                       <br /><br />
                            <b>December 2019 -</b> Bimmatch- a startup connecting customers with products in the construction field, working with GraphQL, Apollo, Netlify.
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Work Experience</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>2018 | Project Manager -</b> TransPerfect - a translation company
            <br />Coordinated multiple projects simultaneously, ensuring that all deadlines are met, projects stay
                                       within budget , and deliverables are of the highest quality.
            <br />
                            <br /><b>2011-2016 |</b> Student jobs - Sales representative and escape-room operator
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Other</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <b>Military Service</b>
                            <br />2006-2009 | Collected technological materials for a variety of classified projects in
                     collaboration with high-ranking officials.
            <br />
                            <br /><b>Languages</b>
                            <br />Hebrew - mother tongue
            <br />English - mother tongue level
          </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>CV</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            <img className="cv1" src={OferGilboaCVJ} alt="image"  ></img>
                            <img className="cv2" src={OferGilboaCVJ2} alt="image"  ></img>
                            <br />
                            <br />
                            <a className="textDownload" href={OferGilboaCV} download="Ofer Gilboa CV">Download CV as PDF</a>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

        </div>)
}