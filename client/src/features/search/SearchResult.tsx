import * as React from 'react'
import styled from '@emotion/styled'

import { Result } from './types'

type Props = {
  result: Result
}

const SearchResult = ({ result }: Props) => {
  return (
    <Root>
      <img src={result.artworkUrl600} />

    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

export default SearchResult