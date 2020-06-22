import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import classes from './NewPost.css';

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
            <div className={classes.NewPost}>

                <h1>Nuevo Post</h1>
                <TextField label="Titulo"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => this.setState({ title: event.target.value })} />
                <TextField
                    label="Autor"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => this.setState({ autor: event.target.value })} />
                <TextField
                    label="Descripcion"
                    variant="outlined"
                    fullWidth
                    onChange={(event) => this.setState({ description: event.target.value })} />
                <TextField
                    label="URL de la imagen"
                    variant="outlined"
                    fullWidth
                    type="url"
                    onChange={(event) => this.setState({ imageLink: event.target.value })} />

                <TextField
                    label="Contenido"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(event) => this.setState({ content: event.target.value })} />



            </div>
        );
    }
}

export default NewPost;