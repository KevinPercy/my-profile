import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';


import ExperimentList from '../../../components/Experiments/ExperimentList';

class Experiments extends Component {
    state = {
        loading: true,
        repos: [],
        error: false
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/KevinPercy/repos')
            .then(response => {
                console.log(response.data)
                const repositoriesData = response.data;
                this.setState({ repos: repositoriesData, loading: false });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            })
    }

    render() {
        let repositories = <div style={{ textAlign: 'center' }}><CircularProgress /></div>;
        if (!this.state.loading) {
            repositories = <ExperimentList reposList={this.state.repos} />
        }
        return (
            <main>
                {repositories}
            </main>

        );
    }
}

export default Experiments;