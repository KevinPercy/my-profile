import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';


const styles = (theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
    photo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
    },
    cardContent: {
        width: 200,
        margin: 'auto'
    }
});

const options = {
    overrides: {
        h1: {
            component: Typography,
            props: {
                gutterBottom: true,
                variant: 'h5',
                align: 'center',
            },
        },
        h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
        h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
        h4: {
            component: Typography,
            props: { gutterBottom: true, variant: 'caption', paragraph: true },
        },
        p: { component: Typography, props: { paragraph: true, align: 'justify', component: 'div' } },
        a: { component: Link },
        li: {
            component: withStyles(styles)(({ classes, ...props }) => (
                <li className={classes.listItem}>
                    <Typography component="span" {...props} />
                </li>
            )),
        },
        img: {
            component: withStyles(styles)(({ classes, ...props }) => (
                <Card className={classes.cardContent}>
                    <img className={classes.photo} src={props.src} alt={props.alt} />
                </Card>
            )),
        },
    },
};

export default function Markdown(props) {
    return <ReactMarkdown options={options} {...props} />;
}