import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';

class Blog extends Component {
    render() {

        return (
            <div>

                <Switch>
                    <Route path="/" exact component={Posts} />
                    {/* <Route render={() => <h1>Not Found</h1>} /> */}
                </Switch>


            </div>

        );
    }
}

export default Blog;