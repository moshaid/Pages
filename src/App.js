import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';
import OrderCreated from './components/orderCreated';
import OrderCancelled from './components/orderCancelled';
import Navbar from './components/navbar';

class App extends Component {
  render () {
    return ( 
      <React.Fragment>
        <Switch>

          <Route path="/navbar" component={Navbar} />
          <Route path="/orderCancelled" component={OrderCancelled} />
          <Route path="/orderCreated" component={OrderCreated} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/' component={Login} />
        </Switch>

      </React.Fragment>
     );

  }
  }
 
export default App;