import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { getResults } from './selectors'
import SearchResult from './SearchResult'
import SearchBox from './SearchBox'

const Search: React.FC = () => {
  const results = useSelector(getResults)

  return (
    <div>
      <SearchBox />
      <SearchResultsContainer>
        <SearchResults>
          {results.map((result, i) => (
            <SearchResult key={i} result={result} />
          ))}
        </SearchResults>
      </SearchResultsContainer>
    </div>
  )
}

const SearchResults = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 15px;
  row-gap: 10px;
  max-width: 1800px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SearchResultsContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default Search
