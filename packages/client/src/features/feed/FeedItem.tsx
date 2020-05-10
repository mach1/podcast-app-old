import * as React from 'react'

import type { FeedItem } from './types'

interface Props {
  item: FeedItem
}

const FeedItemComponent: React.FC<Props> = ({ item }: Props) => {
  return <div>{item.title}</div>
}

export default FeedItemComponent
