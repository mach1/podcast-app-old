import { debounce } from 'lodash'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { search } from './actions'

const SearchBox: React.FC = () => {
  const dispatch = useDispatch()
  const inputEl = React.useRef<HTMLInputElement>(null)
  const triggerSearch = (): void => {
    const value = inputEl.current ? inputEl.current.value : ''
    if (!value || value.length < 2) return
    dispatch(search({ term: value }))
  }

  const throttledSearch = React.useRef(debounce(triggerSearch, 300)).current

  return (
    <Root>
      <SearchInput
        placeholder="Search"
        ref={inputEl}
        type="text"
        onChange={throttledSearch}
      />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const SearchInput = styled.input`
  outline: none;
  border: none;
  box-shadow: none;
  padding: 0.375rem 0.75rem;
  font-size: 16px;
  margin-right: 10px;
  border-radius: 0.25rem;
  border-bottom: 1px solid #ced4da;
  background: transparent;
`

export default SearchBox
