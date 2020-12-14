import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
