import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { search } from './actions'
import { getResults } from './selectors'
import SearchResult from './SearchResult'

export default function Search () {
  const dispatch = useDispatch()
  const results = useSelector(getResults)
  const inputEl = React.useRef<HTMLInputElement>(null)

  const onClick = () => {
    const value = inputEl.current ? inputEl.current.value : ''
    dispatch(search({ term: value }))
  }

  return (
    <div>
      <input ref={inputEl} type='text' />
      <button onClick={onClick}>
        Search
      </button>
      {results.map((result, i) => (
        <SearchResult key={i} result={result} />
      ))}
    </div>
  )
}