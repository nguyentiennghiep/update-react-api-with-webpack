import React, { Component } from 'react';
import './App.css';
import Menu from './../Menu/Menu';
import routes from './../../routes';
import { Switch, Route, HashRouter ,BrowserRouter} from 'react-router-dom';
import { graphql } from 'react-apollo';
import ListProducts from '../../aws/queries/ListProducts';
import { Query } from "react-apollo";

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
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showContent(routes)}
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


