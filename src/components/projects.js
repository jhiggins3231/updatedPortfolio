import React from 'react';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Port from '../assets/Port.png';
import Pokemon from '../assets/Pokemon.jpg';
import P1150 from '../assets/p1150.jpg';
import Nissan from '../assets/Nissan.jpg'

const useStyles = makeStyles(theme => ({
    main: {
        minWidth: '100%',
        backgroundColor: 'red',
        minHeight: '200px',
        height: '400px'
    },
    root: {
        maxWidth: 300,
        maxHeight: 320,
        margin: 5,
        flex: '1',
        
      },
    media: {
        height: 120,
      },
    gridRoot: {
        flexGrow: 1,
      },
}))


export default function Projects() {
    const classes = useStyles();


    return (
        <div className={classes.main}>
            <h1>Projects</h1>
            <Grid container direction="row" justify="center" alignItems="baseline">
        <Card className={classes.root}>
                <CardMedia
                className={classes.media}
                image={Port}
                title="Portfolio"
                />
        <CardContent>
            <Typography>
                My First Portfolio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This was a the first portfolio I created with React.
            </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://jhreactportfolio.herokuapp.com')}>
          View
        </Button>
      </CardActions>
    </Card>

    <Card className={classes.root}>
            
                <CardMedia
                className={classes.media}
                image={Pokemon}
                title="Pokemon"
                />
        <CardContent>
            <Typography>
                Pokemon API
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A simple Pokemon API made during my time at Eleven Fifty.
            </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://pokemonarenaapi.firebaseapp.com')}>
          View
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
            
                <CardMedia
                className={classes.media}
                image={Nissan}
                title="Nissan"
                />
        <CardContent>
            <Typography>
                Wishlist Generator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            A wishlist creator for specific motors for the Nissan 240sx.
            </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://jh-wishlistclient.herokuapp.com')}>
          View
        </Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
            
                <CardMedia
                className={classes.media}
                image={P1150}
                title="p1150"
                />
        <CardContent>
            <Typography>
                Project Database
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            An application/project tracker for EFA Students.
            </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open('https://jke-1150-projects-client.herokuapp.com')}>
          View
        </Button>
      </CardActions>
    </Card>
</Grid>


        </div>
    )
}