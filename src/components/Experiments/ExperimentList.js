import React from 'react';
import { Grid } from '@material-ui/core';

import Experiment from './Experiment';

const ExperimentList = (props) => {
    const { reposList } = props;
    const cardList = reposList.map((item, index) => (
        <Experiment repo={item} index={index} key={item.id} link={item.html_url} />
    ))
    return (
        <Grid container
            justify="center"
            style={{ width: '100%', paddingLeft: '26px' }}
            spacing={4}>
            {cardList}
        </Grid>
    );
}

export default ExperimentList;