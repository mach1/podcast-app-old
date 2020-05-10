import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Search from './features/search/Search'
import Collection from './features/feed/Collection'

const App: React.FC = () => {
  return (
    <Router basename="/app">
      <Switch>
        <Route path="/collections/:id">
          <Collection />
        </Route>
        <Route path="/">
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default hot(module)(App)
