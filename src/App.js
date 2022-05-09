import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/BeaniesPage">BeaniesList</Link>
            </li>
            <li>
              <Link to="/BeanieDetail">BeaniePage</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="App">
        <Switch>
          <Route path="/BeaniesPage">
            <BeaniesPage />
            {/* this home page route should list all the beanies */}
          </Route>
          <Route path="/BeanieDetail">
            <BeanieDetail />
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
