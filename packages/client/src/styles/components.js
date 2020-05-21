import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

export const Page = styled.div`
  padding: 60px 0;
  background: #f2fdff;
  min-height: 100vh;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 30px;
`

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 10px;
  background: #4e3d42;
`
