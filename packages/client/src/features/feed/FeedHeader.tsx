import * as React from 'react'

import styled from '@emotion/styled'
import { ItemTitle, ItemSubtitle } from '../../styles/text'

interface Props {
  meta: {
    title: string
    description: string
    image: string
    author: string
  }
}

const FeedHeader: React.FC<Props> = ({ meta }) => {
  return (
    <Root>
      <Image src={meta.image} />
      <RightContent>
        <Title>{meta.title}</Title>
        <Author>{meta.author}</Author>
        <Subtitle
          dangerouslySetInnerHTML={{ __html: meta.description }}
        ></Subtitle>
      </RightContent>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  margin-top: 20px;
`

const RightContent = styled.div`
  padding-left: 68px;
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  min-height: 300px;
  min-width: 300px;
  flex: 1 1 auto;
`

const Title = styled(ItemTitle)`
  margin-top: 4px;
  font-size: 30px;
`

const Author = styled(ItemSubtitle)`
  font-size: 24px;
  margin-top: 13px;
`

const Subtitle = styled(ItemSubtitle)`
  margin-top: 46px;
  font-size: 16px;
`

export default FeedHeader
