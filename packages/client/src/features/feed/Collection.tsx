import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { useParams } from 'react-router'

import { fetchFeed } from './actions'
import { getResults } from '../search/selectors'

const Collection: React.FC = () => {
  const dispatch = useDispatch()
  const { id = '' } = useParams()
  const results = useSelector(getResults)
  const collection = results.find((result) => result.collectionId === +id)
  console.log(collection)

  React.useEffect(() => {
    if (collection) {
      dispatch(fetchFeed(collection.collectionId, collection.feedUrl))
    }
  }, [])

  return (
    <Root>
      detailed
      {id}
    </Root>
  )
}

const Root = styled.div``

export default Collection
