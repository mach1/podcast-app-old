import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import styled from '@emotion/styled'

import { lookUp } from '../search/actions'
import Loading from '../../common/Loading'
import { fetchFeed } from './actions'
import { getFeedById } from './selectors'
import { getResults } from '../search/selectors'
import FeedItem from './FeedItem'
import { Page, Container, Header } from '../../styles/components'
import { PageTitle } from '../../styles/text'

import { RootState } from '../../app/rootReducer'
import type { FeedItem as FeedItemType } from './types'
import SearchBox from '../search/SearchBox'
import FeedHeader from './FeedHeader'

const Feed: React.FC = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()
  const results = useSelector(getResults)
  const feed = useSelector((state: RootState) =>
    getFeedById(state, { id: +id })
  )
  const collection = results.find((result) => result.collectionId === +id)

  React.useEffect(() => {
    if (collection) {
      dispatch(fetchFeed(collection.collectionId, collection.feedUrl))
    } else {
      dispatch(lookUp({ id: +id }))
    }
  }, [])

  if (!feed) return <Loading />

  return (
    <Page>
      <Container>
        <Header>
          <PageTitle>Feed</PageTitle>
          <SearchBox />
        </Header>
        <Content>
          <FeedHeader meta={feed.meta} />
          <FeedList>
            {feed.items.map((feedItem: FeedItemType, i) => (
              <FeedItem key={i} item={feedItem} />
            ))}
          </FeedList>
        </Content>
      </Container>
    </Page>
  )
}

const FeedList = styled.div`
  padding-top: 50px;

  & > div {
    margin-bottom: 34px;
  }
`

const Content = styled.div``

export default Feed
