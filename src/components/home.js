import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {useSpring, animated} from 'react-spring';




const useStyles = makeStyles(theme => ({
    head: {
        fontFamily: 'Quicksand',
        fontSize: '38px'
    },
    list: {
        listStyleType: 'none'
    },
    bulletOne: {
        fontFamily: 'Quicksand',
        position: 'absolute',
        left: '50px',
        fontSize: '30px',
        cursor: 'grab',
    },
    bulletTwo: {
        fontFamily: 'Quicksand',
        position: 'absolute',
        right: '50px',
        fontSize: '30px',
        cursor: 'grab'
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
                <GitHubIcon className={classes.icons} onClick={() => window.open("https://www.github.com/jhiggins3231")}></GitHubIcon>
            </li>
            <li className={classes.bulletTwo}>
                <LinkedInIcon className={classes.icons} onClick={() => window.open("https://www.linkedin.com/in/jhiggins3231")}></LinkedInIcon>
            </li>
        </ul>
    </div>

    )}
    