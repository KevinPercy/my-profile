import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Link } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://i.pinimg.com/564x/51/bb/e3/51bbe3ccf6ffef95d429bb7226671c32.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));


const FeaturedPost = (props) => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${props.image})` }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={props.image} alt={props.imageText} />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {props.title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {props.description}
                        </Typography>
                        <Link variant="subtitle1" href={this.props.link}>
                            {props.linkText}
                        </Link>
                    </div>

                </Grid>
            </Grid>
        </Paper>
    )
}

export default FeaturedPost;