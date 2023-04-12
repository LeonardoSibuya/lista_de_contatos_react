import styled from 'styled-components'

export const Content = styled.div`
  margin-top 32px;

  h2 {
    text-align: center;
    margin-bottom: 8px;
    color: #560056;
  }
`

export const Container = styled.ul`
  overflow-y: scroll;
  max-height: 320px;
  background-color: #f7cfe2;
  position: relative;
  padding: 6px;
  border-radius: 8px;

  ::-webkit-scrollbar {
    width: 8px;
    border: 1px solid #666666;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #560056;
    border-radius: 8px;
  }
`
