import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Blog from './components/blog';
import About from './components/about';

class Routs extends Component {
  constructor(props) {
    super(props);
    const session = sessionStorage.getItem("username");
    if (session == null) {
      this.props.chekUser('fail')
    }
  }
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
      </Switch>
    )
  }
}

export default Routs;