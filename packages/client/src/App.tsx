import { Global, css } from '@emotion/core'
import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'

import Search from './features/search/Search'
import Feed from './features/feed/Feed'
import Player from './features/player/Player'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          h1 {
            margin-top: 0;
          }
          html,
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
        `}
      />
      <Router basename="/app">
        <Switch>
          <Route path="/feed/:id">
            <Feed />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
      <Player />
    </React.Fragment>
  )
}

export default hot(module)(App)
