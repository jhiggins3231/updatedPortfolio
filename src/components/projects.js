import React from 'react';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Port from '../assets/Port.png';
import Pokemon from '../assets/Pokemon.jpg';
import P1150 from '../assets/p1150.jpg';
import Nissan from '../assets/Nissan.jpg';
import Periscope from '../assets/periscope.png';
import Quiz from '../assets/quiz.jpg';

const useStyles = makeStyles(theme => ({
    main: {
        minWidth: '100%',
        backgroundColor: '#00A8E8',
        minHeight: '800px',
        maxHeight: '1000px',
        fontFamily: 'Quicksand',
        fontSize: '20px'
    },
    root: {
        maxWidth: 300,
        maxHeight: 320,
        margin: 5,
        flex: '1',
        borderRadius: '10%',  
        boxShadow: '5px 5px 5px rgba(0, 38, 255, 0.801)'  
      },
    media: {
        height: 120,
      },
    gridRoot: {
        flexGrow: 1,
      },
      periscope: {
        height: 95,
        width: 60,
        margin: 0,
        padding: 0,
        position: "absolute",
        left: '28%',
        top: '-70%',
    },
    cardsTitle: {
      fontFamily: 'Quicksand',
      fontSize: '20px',
      fontWeight: 'bold'
    },
    cards: {
      fontFamily: 'Quicksand',
      fontSize: '16px',
      fontWeight: 'bold'
    }
}))


export default function Projects() {
    const classes = useStyles();


    return (
<div className={classes.main}>
          <div class="wave">
            <Avatar src={Periscope} className={classes.periscope}></Avatar>
          </div>
            <h1>Projects</h1>
            <Grid container direction="row" justify="center" alignItems="baseline">
        <Card className={classes.root}>
          <Tooltip title="Portfolio">
                <CardMedia
                className={classes.media}
                image={Port}
                />
      </Tooltip>
        <CardContent>
            <Typography className={classes.cardsTitle}>
                My First Portfolio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cards}>
            This was the first portfolio I created with React.
            </Typography>
        </CardContent>
      <CardActions>
        <Tooltip title="View Project">
        <Button size="small" color="primary" onClick={() => window.open('https://jhreactportfolio.herokuapp.com')}>
          View
        </Button>
        </Tooltip>
      </CardActions>
    </Card>

    <Card className={classes.root}>
      <Tooltip title="Pokemon Arena">
                <CardMedia
                className={classes.media}
                image={Pokemon}
                />
                </Tooltip>
        <CardContent>
            <Typography className={classes.cardsTitle}>
                Pokemon API
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cards}>
            A simple Pokemon API made during my time at Eleven Fifty.
            </Typography>
        </CardContent>
      <CardActions>
        <Tooltip title="View Project">
        <Button size="small" color="primary" onClick={() => window.open('https://pokemonarenaapi.firebaseapp.com')}>
          View
        </Button>
        </Tooltip>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <Tooltip title="Wishlist Generator">
                <CardMedia
                className={classes.media}
                image={Nissan}
               />
               </Tooltip>
        <CardContent>
            <Typography className={classes.cardsTitle}>
                Wishlist Generator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cards}>
            A Nissan 240sx wishlist generator for specific motors.
            </Typography>
        </CardContent>
      <CardActions>
      <Tooltip title="View Project">
        <Button size="small" color="primary" onClick={() => window.open('https://jh-wishlistclient.herokuapp.com')}>
          View
        </Button>
        </Tooltip>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <Tooltip title="Project Database">
                <CardMedia
                className={classes.media}
                image={P1150}
                />
                </Tooltip>
        <CardContent>
            <Typography className={classes.cardsTitle}>
                Project Database
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cards}>
            An application/project tracker for EFA Students.
            </Typography>
        </CardContent>
      <CardActions>
      <Tooltip title="View Project">
        <Button size="small" color="primary" onClick={() => window.open('https://jke-1150-projects-client.herokuapp.com')}>
          View
        </Button>
        </Tooltip>
      </CardActions>
    </Card>
</Grid>
<Grid container direction="row" justify="center" alignItems="baseline">
        <Card className={classes.root}>
          <Tooltip title="Portfolio">
                <CardMedia
                className={classes.media}
                image={Quiz}
                />
      </Tooltip>
        <CardContent>
            <Typography className={classes.cardsTitle}>
                A Quiz Maze
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.cards}>
            A quiz I made about myself for family and friends.
            </Typography>
        </CardContent>
        <CardActions>
        <Tooltip title="View Project">
        <Button size="small" color="primary" onClick={() => window.open('https://quizyou.herokuapp.com')}>
          View
        </Button>
        </Tooltip>
      </CardActions>
    </Card>
</Grid>

</div>
    )
}