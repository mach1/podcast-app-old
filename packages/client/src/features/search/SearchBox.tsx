import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { search } from './actions'

const SearchBox: React.FC = () => {
  const dispatch = useDispatch()
  const inputEl = React.useRef<HTMLInputElement>(null)

  const onClick = (): void => {
    const value = inputEl.current ? inputEl.current.value : ''
    dispatch(search({ term: value }))
  }

  return (
    <Root>
      <SearchInput ref={inputEl} type="text" />
      <SearchButton onClick={onClick}>Search</SearchButton>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const SearchInput = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
`

const SearchButton = styled.button`
  border-radius: 0.3rem;
  font-size: 18px;
`

export default SearchBox
