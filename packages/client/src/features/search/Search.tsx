import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { getResults } from './selectors'
import SearchResult from './SearchResult'
import SearchBox from './SearchBox'

const Search: React.FC = () => {
  const results = useSelector(getResults)

  return (
    <Container>
      <Header>
        <Title>Podcasts</Title>
        <SearchBox />
      </Header>
      <Content>
        {results.map((result, i) => (
          <SearchResult key={i} result={result} />
        ))}
      </Content>
    </Container>
  )
}

const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #ff206e;
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 30px;
`

export default Search
