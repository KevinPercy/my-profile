import React, { Component } from 'react';

class NewPost extends Component {
    state = {
        title: '',
        autor: '',
        description: '',
        imageLink: '',
        content: '',
        submitted: false
    }

    render() {
        return (
            <div>
                <h1>Nuevo Post</h1>
                <label>Titulo</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Autor</label>
                <input type="text" value={this.state.autor} onChange={(event) => this.setState({ autor: event.target.value })} />
                <label>Descripcion</label>
                <input type="text" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} />
                <label>Link de la Imagen</label>
                <input type="url" value={this.state.imageLink} onChange={(event) => this.setState({ imageLink: event.target.value })} />
                <label>Contenido</label>
                <textarea rows="5" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
            </div>
        );
    }
}

export default NewPost;