import * as React from 'react'
import { format } from 'date-fns'
import styled from '@emotion/styled'

import { Divider } from '../../styles/components'
import { ItemTitle, ItemSubtitle } from '../../styles/text'
import type { FeedItem } from './types'

interface Props {
  item: FeedItem
}

const FeedItemComponent: React.FC<Props> = ({ item }: Props) => {
  const formattedDate = format(new Date(item.date), 'do MMM')
  return (
    <Root>
      <PublishDate>{formattedDate}</PublishDate>
      <Title>{item.title}</Title>
      <Description
        dangerouslySetInnerHTML={{ __html: item.description }}
      ></Description>
      <StyledDivider />
    </Root>
  )
}

const Root = styled.div`
  padding: 10px 0 23px;
`

const PublishDate = styled(ItemSubtitle)`
  font-size: 24px;
`

const Title = styled(ItemTitle)`
  margin-top: 15px;
`

const Description = styled(ItemSubtitle)`
  margin-top: 15px;
`

const StyledDivider = styled(Divider)`
  margin-top: 15px;
`

export default FeedItemComponent
