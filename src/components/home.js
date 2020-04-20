import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Trailhead from '../assets/trailhead.png';




const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        backgroundColor: 'red',
        minHeight: '300px',
        maxHeight: '600px',
        fontFamily: 'Quicksand',
        fontSize: '20px',
    },
    head: {
        fontFamily: 'Quicksand',
        fontSize: '38px',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center'
        
    },
    list: {
        listStyleType: 'none',
        flexWrap: 'wrap',
    },
    bulletOne: {
        cursor: 'pointer',
    },
    bulletTwo: {
        cursor: 'pointer',
    },
    bulletThree: {
        cursor: 'pointer',
    },
    icons: {
        height: 75,
        width: 75,
    },
    root: {
        flexGrow: 1,
    },
    about: {
        fontFamily: 'Quicksand',
        textAlign: 'center',
        margin: '5px',
        padding: '10px',
        fontSize: '18px'
    },
    resume: {
        fontFamily: 'Quicksand',
        fontSize: '26px'
    },
    contact: {
        fontFamily: 'Quicksand',
        fontSize: '20px'
    },
    info: {
        fontFamily: 'Quicksand',
        fontSize: '18px'
    },
    skills: {
        fontFamily: 'Quicksand',
        fontSize: '26px',
        margin: '5px',
        padding: '5px'
    },
    skillset: {
        fontFamily: 'Quicksand',
        fontSize: '18px',
        margin: '5px',
        padding: '5px'
    }
    
}))





export default function Home() {

    const classes = useStyles();

    return(
        <div>

        <h1 className={classes.head}>Junior Full Stack Developer</h1>
        <ul className={classes.list}>
        <Grid container className={classes.root} spacing={2} direction="row" justify="center">
        <Grid item xs>
            <Grid container justify='center' spacing={3}>
            <li className={classes.bulletOne}>
                <Tooltip title="Github">
                <GitHubIcon className={classes.icons} onClick={() => window.open("https://www.github.com/jhiggins3231")}></GitHubIcon>
                </Tooltip>
            </li>
            </Grid>
            </Grid>
            <Grid item xs>
            <Grid container justify='center' spacing={2}>
            <li className={classes.bulletTwo}>
                <Tooltip title="LinkedIn">
                <LinkedInIcon color="primary" className={classes.icons} onClick={() => window.open("https://www.linkedin.com/in/jhiggins3231")}></LinkedInIcon>
                </Tooltip>
            </li>
            </Grid>
            </Grid>
            <Grid item xs>
            <Grid container justify='center' spacing={2}>
            <li className={classes.bulletThree}>
                <Tooltip title="Salesforce Trailhead">
                <Avatar src={Trailhead} className={classes.icons} onClick={() => window.open("https://trailblazer.me/id?lang=en_US&_ga=2.151429369.1108395911.1587052099-15794461.1587052099")}></Avatar>
                </Tooltip>
            </li>
            </Grid>
            </Grid>
        </Grid>
        </ul>
        <br />
        <br />
        <Grid container className={classes.root} spacing={2} direction="row" justify="center">
        <Grid container spacing={2}>
            <Grid item xs={6} justify='center'>
        <p className={classes.about}>            
    My name is James Higgins and I'm a Junior Developer and Navy Submarine Veteran. I am seeking a role within a team to not only continue to grow but to contribute to the overall team goal. I have strong team skills that I have gained throughout my career in the Navy and real world experiences. I have continued to expand upon my skill set by attending meet-ups, going through the Salesforce Pathfinder Program, and practicing upon the foundation of skills I have learned throughout my career.
        </p>
        </Grid>
        <Grid item xs={2} justify='center'>
            <h1 className={classes.resume}>Resume</h1>
            <Tooltip title="Resume">
        <DescriptionIcon className={classes.icons} onClick={() => window.open("https://docs.google.com/document/d/1GbDTedKr0mClCShEcxPQ3JlLv0sR1DomC5aR63F8OE4/edit?usp=sharing")}></DescriptionIcon>
        </Tooltip>
        </Grid>
        <Grid item xs={2} justify='center'>
            <h3 className={classes.skills}>
                Skills
            </h3>
                <ul className={classes.skillset}>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Angular</li>
                    <li>Node</li>
                    <li>HTML/CSS</li>
                    <li>GitHub</li>
                    <li>Node</li>
                    <li>Material UI</li>
                    <li>PostGresQL(SQL)</li>
                </ul>
        </Grid>
        <Grid item xs={2} justify='center'>
        <h3 className={classes.skills}>
                Salesforce Skills
            </h3>
                <ul className={classes.skillset}>
                    <li>Salesforce Platform</li>
                    <li>Apex</li>
                    <li>CRM</li>
                    <li>VisualForce</li>
                    <li>Lightning Apps</li>
                    <li>Trailhead</li>
                    <li>Visual Studio Code</li>
                </ul>

        </Grid>
        </Grid>
        </Grid>
       
</div>
    )}
    