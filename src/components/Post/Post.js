import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        marginBottom: '20px',
        marginTop: '20px'
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

const Post = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <CardActionArea component="a" href={props.link}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {props.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {props.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {props.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continuar leyendo...
              </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia} image={props.image} title={props.imageTitle} />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    );
}


export default Post;