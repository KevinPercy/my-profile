import React, { Component } from 'react';

import FeaturedPost from '../../../components/Post/FeaturedPost/FeaturedPost';
import instance from '../../../axios-blog';

class MainPost extends Component {
    state = {
        post: {},
        error: false
    }

    componentDidMount() {
        const queryParams = '?is_featured=True';
        instance.get('posts.json' + queryParams).
            then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.data);
                error = true;
            });
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}><strong>Algo inesperado Ocurrio...!</strong></p>;
        if (!this.state.error) {
            post = <FeaturedPost
                image="https://i.pinimg.com/564x/51/bb/e3/51bbe3ccf6ffef95d429bb7226671c32.jpg"
                imageText="Imagen del post principal"
                title={this.state.post.title}
                description={this.state.post.body}
                linkText="Continuar leyendo..."
                link="posts/1" />
        }
        return (
            <div>
                {post}
            </div>
        );
    };
}

export default MainPost;