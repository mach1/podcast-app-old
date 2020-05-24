import * as React from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import styled from '@emotion/styled'

import PlayIcon from '../../common/icons/PlayIcon'
import { Divider } from '../../styles/components'
import { ItemTitle, ItemSubtitle } from '../../styles/text'
import { play } from '../player/actions'
import type { FeedItem } from './types'

interface Props {
  item: FeedItem
}

const FeedItemComponent: React.FC<Props> = ({ item }: Props) => {
  const dispatch = useDispatch()
  const formattedDate = format(new Date(item.date), 'do MMM')
  const onClick = (): void => {
    dispatch(play(item))
  }
  const description = item.description.replace(/<(.|\n)*?>/g, '')
  return (
    <Root>
      <PublishDate>{formattedDate}</PublishDate>
      <Title>{item.title}</Title>
      <Description>{description}</Description>
      <RightContent>
        <div onClick={onClick}>
          <StyledPlayIcon />
        </div>
      </RightContent>
      <StyledDivider />
    </Root>
  )
}

const Root = styled.div`
  padding: 10px 0 23px;
  display: grid;
  grid-template-columns: 1fr 100px;
  grid-template-rows: 30px 30px 70px 10px;
  grid-template-areas:
    'date date'
    'title right'
    'description right'
    'divider divider';
`

const PublishDate = styled(ItemSubtitle)`
  grid-area: date;
  font-size: 24px;
`

const Title = styled(ItemTitle)`
  margin-top: 15px;
  grid-area: title;
`

const Description = styled(ItemSubtitle)`
  margin-top: 15px;
  overflow: hidden;
  grid-area: description;
`

const StyledDivider = styled(Divider)`
  margin-top: 15px;
  grid-area: divider;
`

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: right;
`

const StyledPlayIcon = styled(PlayIcon)`
  cursor: pointer;
`
export default FeedItemComponent
