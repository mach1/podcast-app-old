import * as React from 'react'
import styled from '@emotion/styled'
import { useParams } from 'react-router'

const Collection: React.FC = () => {
  const { id } = useParams()

  return (
    <Root>
      detailed
      {id}
    </Root>
  )
}

const Root = styled.div``

export default Collection
