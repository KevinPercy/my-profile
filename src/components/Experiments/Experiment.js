import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
    card: {
        height: '250px',
        display: 'flex',

    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 100,
    },
});

const Experiment = (props) => {
    const { repo, link } = props;
    const { owner, name, description } = repo;
    const classes = useStyles();
    return (
        <Grid item md={6} xs={12}>
            <CardActionArea
                component="a"
                href={link}
                target="_blank"
                rel="noopener">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <img className={classes.cardMedia} src={owner.avatar_url} alt="hey" />
                            <article>
                                <h1>{name}</h1>
                                <span>{description}</span>
                            </article>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>


    );
}
export default Experiment;


