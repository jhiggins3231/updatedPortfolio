import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Trailhead from '../assets/trailhead.png';




const useStyles = makeStyles(theme => ({
    head: {
        fontFamily: 'Quicksand',
        fontSize: '38px'
    },
    list: {
        listStyleType: 'none'
    },
    bulletOne: {
        // fontFamily: 'Quicksand',
        position: 'absolute',
        left: '50px',
        // fontSize: '30px',
        cursor: 'grab',
    },
    bulletTwo: {
        // fontFamily: 'Quicksand',
        position: 'absolute',
        left: '130px',
        // fontSize: '30px',
        cursor: 'grab'
    },
    bulletThree: {
        position: 'absolute',
        cursor: 'grab',
        left: '210px',
        filter: 'grayscale(150%)'
    },
    icons: {
        height: 75,
        width: 75,
    }
}))





export default function Home() {

    const classes = useStyles();

    return(
    <div>
        <h1 className={classes.head}>Junior Full Stack Developer</h1>
        <ul className={classes.list}>
            <li className={classes.bulletOne}>
                <Tooltip title="Github">
                <GitHubIcon className={classes.icons} onClick={() => window.open("https://www.github.com/jhiggins3231")}></GitHubIcon>
                </Tooltip>
            </li>
            <li className={classes.bulletTwo}>
                <Tooltip title="LinkedIn">
                <LinkedInIcon className={classes.icons} onClick={() => window.open("https://www.linkedin.com/in/jhiggins3231")}></LinkedInIcon>
                </Tooltip>
            </li>
            <li className={classes.bulletThree}>
                <Tooltip title="Salesforce Trailhead">
                <Avatar src={Trailhead} className={classes.icons} onClick={() => window.open("https://trailblazer.me/id?lang=en_US&_ga=2.151429369.1108395911.1587052099-15794461.1587052099")}></Avatar>
                </Tooltip>
            </li>
        </ul>
    </div>

    )}
    