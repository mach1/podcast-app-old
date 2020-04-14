import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { Result } from './types'

type Props = {
  result: Result
}

const SearchResult: React.FC<Props> = ({ result }) => {
  return (
    <Link to={`/collections/${result.collectionId}`}>
      <Root>
        <Image src={result.artworkUrl600} />
        <Name>
          <CollectionName>{result.collectionName}</CollectionName>
          <ArtistName>{result.artistName}</ArtistName>
        </Name>
      </Root>
    </Link>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
`

const Name = styled.div`
  margin-top: 10px;
`

const CollectionName = styled.div`
  font-weight: bold;
  font-size: 16px;
`

const ArtistName = styled.div`
  font-size: 14px;
`

export default SearchResult
