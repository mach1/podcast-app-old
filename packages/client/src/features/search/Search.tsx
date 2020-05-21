import * as React from 'react'
import { useSelector } from 'react-redux'

import { Page, Container, Header, Content } from '../../styles/components'
import { PageTitle } from '../../styles/text'

import { getResults } from './selectors'
import SearchResult from './SearchResult'
import SearchBox from './SearchBox'

const Search: React.FC = () => {
  const results = useSelector(getResults)

  return (
    <Page>
      <Container>
        <Header>
          <PageTitle>Podcasts</PageTitle>
          <SearchBox />
        </Header>
        <Content>
          {results.map((result, i) => (
            <SearchResult key={i} result={result} />
          ))}
        </Content>
      </Container>
    </Page>
  )
}

export default Search
