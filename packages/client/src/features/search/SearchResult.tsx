import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { Divider } from '../../styles/components'
import { ItemSubtitle, ItemTitle } from '../../styles/text'
import { Result } from './types'

type Props = {
  result: Result
}

const SearchResult: React.FC<Props> = ({ result }) => {
  return (
    <Root to={`/feed/${result.collectionId}`}>
      <Image src={result.artworkUrl600} />
      <CollectionName>{result.collectionName}</CollectionName>
      <ArtistName>{result.artistName}</ArtistName>
      <Divider />
    </Root>
  )
}

const Root = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  margin-top: 30px;
`

const Image = styled.img`
  height: 200px;
  width: 200px;
`

const CollectionName = styled(ItemTitle)`
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 450px;
`

const ArtistName = styled(ItemSubtitle)`
  margin-top: 10px;
`

export default SearchResult
