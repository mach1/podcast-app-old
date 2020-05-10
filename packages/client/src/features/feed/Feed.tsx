import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { useParams } from 'react-router'

import { lookUp } from '../search/actions'
import Loading from '../../common/Loading'
import { fetchFeed } from './actions'
import { getFeedById } from './selectors'
import { getResults } from '../search/selectors'
import FeedItem from './FeedItem'

import { RootState } from '../../app/rootReducer'
import type { FeedItem as FeedItemType } from './types'

const Feed: React.FC = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()
  const results = useSelector(getResults)
  const feedItems = useSelector((state: RootState) =>
    getFeedById(state, { id: +id })
  )
  const collection = results.find((result) => result.collectionId === +id)

  React.useEffect(() => {
    if (collection) {
      dispatch(fetchFeed(collection.collectionId, collection.feedUrl))
    } else {
      dispatch(lookUp({ id }))
    }
  }, [collection])

  if (!feedItems) return <Loading />

  return (
    <Root>
      {feedItems.map((feedItem: FeedItemType, i) => (
        <FeedItem key={i} item={feedItem} />
      ))}
    </Root>
  )
}

const Root = styled.div``

export default Feed
