import React, { Component } from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import routes from './../../routes';
import { Switch, Route, HashRouter } from 'react-router-dom';


class App extends Component {

  showContent = (routes) => {
    var result = '';
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })
    }
    return <Switch>{result}</Switch>;
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContent(routes)}
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
