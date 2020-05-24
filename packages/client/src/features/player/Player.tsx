import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import PlayIcon from '../../common/icons/PlayIcon'
import PauseIcon from '../../common/icons/PauseIcon'
import { ItemTitle } from '../../styles/text'
import { getPlayerItem, getIsPlaying } from './selectors'
import { togglePlaying } from './actions'

const Player: React.FC = () => {
  const dispatch = useDispatch()
  const [audio, setAudio] = React.useState<HTMLAudioElement | null>(null)
  const item = useSelector(getPlayerItem)
  const isPlaying = useSelector(getIsPlaying)

  const onClickPlayPause = (): void => {
    dispatch(togglePlaying())
  }
  React.useEffect(() => {
    if (item) {
      if (audio) audio.pause()
      const newAudio = new Audio(item.enclosure.url)
      setAudio(newAudio)
      newAudio.play()
    }
  }, [item])

  React.useEffect(() => {
    if (!audio) return

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [isPlaying])

  if (!item) return null

  return (
    <Root>
      <LeftContent>{item && <ItemTitle>{item.title}</ItemTitle>}</LeftContent>
      <CenterContent>
        <PlayContainer onClick={onClickPlayPause}>
          {isPlaying ? <PlayIcon /> : <PauseIcon />}
        </PlayContainer>
      </CenterContent>
      <RightContent></RightContent>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  background: #f2fdff;
  box-shadow: -1px -1px 4px #4e3d42;
  filter: brightness(0.9);
`

const PlayContainer = styled.div`
  cursor: pointer;
`

const RightContent = styled.div``

const CenterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftContent = styled.div`
  padding-left: 20px;
`

export default Player
