import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


import Post from '../../../components/Post/Post';
import instance from '../../../axios-blog';

class Posts extends Component {
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        instance.get('/posts.json')
            .then(response => {
                console.log("[Posts]", response.data)
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        date_published: post.date_published.substring(0, 10)
                    }
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log("[error]", error.data)
                this.setState({ error: true })
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}><strong>Oops, algo inesperado sucedió!</strong></p>;
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        title={post.title}
                        date={post.date_published}
                        description={post.body}
                        image="https://i.pinimg.com/564x/51/bb/e3/51bbe3ccf6ffef95d429bb7226671c32.jpg"
                        imageTitle="imagenPost"
                        link="#" />
                );
            });
        }
        return (
            <main>
                <section className="Posts">
                    <Grid container
                        justify="center"
                        style={{ width: '100%', paddingLeft: '26px' }}
                        spacing={4}
                    >
                        {posts}
                    </Grid>
                </section>
            </main>
        );
    }
}

export default Posts;