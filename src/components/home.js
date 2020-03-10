import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';

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
        cursor: 'grab'
    },
    bulletTwo: {
        fontFamily: 'Quicksand',
        position: 'absolute',
        right: '50px',
        fontSize: '30px',
        cursor: 'grab'

    }
}))





export default function Home() {

    const classes = useStyles();

    return(
    <div>
        <h1 className={classes.head}>Junior Full Stack Developer</h1>
        <ul className={classes.list}>
            <li className={classes.bulletOne} onClick={() => window.open("https://www.github.com/jhiggins3231")}>https://www.github.com/jhiggins3231/</li>
            <li className={classes.bulletTwo} onClick={() => window.open("https://www.linkedin.com/in/jhiggins3231")}>https://www.linkedin.com/in/jhiggins3231/</li>
        </ul>
    </div>

    )}
    