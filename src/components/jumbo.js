import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import { animated, useTrail } from 'react-spring';
import './jumbo.css';

const useStyles = makeStyles(theme => ({
    jumbo: {
        padding: 0,
        margin: 0,
        backgroundColor: "#020202",
        minHeight: 400,
        minWidth: '100%'
    },
    intro: {
        color: '#999999'
    },
    blob: {
        position: 'absolute',
        width: 0,
        height: 0
    },
    head: {
        padding: 0,
        margin: 0,
        color: 'white',
        letterSpacing: '5px',
        opacity: '0.5',
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -150%)',
        fontSize: '100px',
        fontFamily: 'Sedgwick Ave Display'
    }
}))

const fast = { tension: 2000, friction: 100}
const slow = { mass: 30, tension: 500, friction: 150}
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%, -50%, 0)`


export default function Jumbo() {
    const classes = useStyles();
    const [trail, set] = useTrail(3, () => ({ xy: [0, 0], config: i => (i === 0 ? fast : slow)}));
    

    
    return (
    <MDBContainer className={classes.jumbo}>
        <MDBRow>
          <MDBJumbotron>
                   <h1 className={classes.head}>James Higgins</h1>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -9" />
        </filter>
      </svg>
      <div className="hooks-main" onMouseMove={e => set({ xy: [e.clientX, e.clientY] })}>
        {trail.map((props, index) => (
          <animated.div key={index} style={{ transform: props.xy.interpolate(trans) }} />
        ))}
      </div> 
           </MDBJumbotron>
        </MDBRow>
    </MDBContainer>

    )
}

// render(<Jumbo />, document.getElementById('root'))