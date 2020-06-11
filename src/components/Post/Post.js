import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Markdown from './Markdown/Markdown';

const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

const Post = (props) => {
    const classes = useStyles();
    return (
        <Markdown className={classes.markdown}>
            {props.post}
        </Markdown>
    );
}

export default Post;