import React from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'

import News from '../components/News'
import NBA from '../components/NBA'
import Economics from '../components/Economic'
import NewsList from '../components/NewsList'
import NotFound from '../components/NotFound'

const router = (
  <BrowserRouter>
    <div>
      <h2>news app</h2>
      <ul>
        <li>
          <NavLink to="/" activeClassName="is-active" exact>news</NavLink>
        </li>
        <li>
          <NavLink to="/nba" activeClassName="is-active">nba</NavLink>
        </li>
        <li>
          <NavLink to="/economics" activeClassName="is-active">economics</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={News} exact></Route>
        <Route path="/nba" component={NBA}></Route>
        <Route path="/economics" component={Economics}></Route>
        <Route path="/newslist/:id" component={NewsList}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  </BrowserRouter>
)

export default router