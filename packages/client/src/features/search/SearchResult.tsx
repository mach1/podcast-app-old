import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

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

const CollectionName = styled.div`
  font-weight: bold;
  font-size: 16px;
  font-family: 'Oswald', sans-serif;
  color: #0d1821;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 450px;
`

const ArtistName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  color: #153b50;
`

const Divider = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 10px;
  background: #4e3d42;
`

export default SearchResult
