import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import Post from '../../../components/Post/Post';
import instance from '../../../axios-blog';

class FullPost extends Component {
    state = {
        loadedPost: null
    }
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                instance.get('/posts/' + this.props.match.params.id)
                    .then((response) => {
                        this.setState({ loadedPost: response.data });
                    })
                    .catch(error => {
                        console.log("error", error);
                    });
            }
        }
    }

    render() {
        let fullPost = (<div>
            <p style={{ textAlign: 'center' }}>Please select a Post!</p>
        </div>);
        if (this.props.match.params.id) {
            fullPost = (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress />;
                </div>
            );
        }
        if (this.state.loadedPost) {
            fullPost = (
                <Post post={this.state.loadedPost.body} />
            );
        }
        return fullPost;
    }
}

export default FullPost;