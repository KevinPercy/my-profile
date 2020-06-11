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
        height: '150px',
        display: 'flex',
        "@media (min-width: 950px)": {// eslint-disable-next-line
            height: '300px',
        }
    },
    cardDetails: {
        flex: 1,
        width: '200px',
        textOverflow: "ellipsis"

    },
    cardMedia: {
        width: 160,
    },
    Description: {
        // maxWidth: "20rem",
        overflow: "hidden",
        position: "relative",
        lineHeight: "1.2em",
        maxHeight: "9.6em",
        textAlign: "justify",
        marginRight: "-1em",
        paddingRight: "1em",
        marginBottom: "0.5em",
        "&&:before": {
            content: '"..."',
            position: "absolute",
            right: 0,
            bottom: 0
        },
        "&&:after": {
            content: '""',
            position: "absolute",
            right: 0,
            width: "1em",
            height: "1em",
            marginTop: "0.2em",
            background: "white"
        },
        "@media (max-width: 950px)": {// eslint-disable-next-line
            maxHeight: '2.4em',
        }
    }
});

const Post = (props) => {
    const classes = useStyles();

    return (
        <Grid item md={6} xs={12} onClick={props.clicked}>
            <CardActionArea component="a" >
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {props.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {props.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph className={classes.Description} >
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