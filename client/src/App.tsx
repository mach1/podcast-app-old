import * as React from 'react'
import Search from './features/search/Search'
import { hot } from 'react-hot-loader'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
      </header>
    </div>
  )
}

export default hot(module)(App)
