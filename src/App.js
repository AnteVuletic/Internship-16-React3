import React, { Component } from 'react';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Dogs from './Components/Dogs/Dogs';
import Cats from './Components/Cats/Cats';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={props => <LandingPage {...props}/>} />
            <Route path="/dogs" render={props => <Dogs {...props}/>} />
            <Route path="/cats" render={props => <Cats {...props}/>} />
            <Route exact path="/404" render={props => <NotFound {...props}/>} />
            <Redirect to='/404' />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
