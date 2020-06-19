import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import Layout from './hoc/Layout/Layout';
import Experiments from './containers/Blog/Experiments/Experiments';
import Posts from './containers/Blog/Posts/Posts';
import FullPost from './containers/Blog/Posts/FullPost';

class App extends Component {

  // initializeReactGA() {
  //   ReactGA.initialize('UA-165333455-1');
  //   ReactGA.pageview('/homepage');
  // }
  render() {
    ReactGA.initialize('UA-165333455-1');
    ReactGA.pageview('/homepage');
    const routes = (
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/experiments" component={Experiments} />
        <Route path="/posts/:id" exact component={FullPost} />
        <Route path="/posts" component={Posts} />
        {/* <Redirect from="/" to="/posts" /> */}
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
