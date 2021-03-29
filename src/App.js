import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Transactions from './component/Transactions';

function App() {
  return (
  <Router>
    <Switch>
      <Route path='/' exact component={Transactions} />
      <Route path='/transactions' component={Transactions} />
    </Switch>
  </Router>
  );
};

export default App;
