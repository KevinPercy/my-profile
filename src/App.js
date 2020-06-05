import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Experiments from './components/Experiments/Experiments';
import Posts from './containers/Blog/Posts/Posts';

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/experiments" component={Experiments} />
        <Route path="/" exact component={Posts} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
