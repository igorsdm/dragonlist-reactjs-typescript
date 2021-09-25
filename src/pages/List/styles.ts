import styled from 'styled-components'

export const ScrollY = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
    border-radius: 5px;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background: #f4f4f4;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius: 5px;
  }
`

export const Item = styled.div`
  display: flex;
  flex: 0 0 auto;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0;
  border-radius: 5px;
  height: 3rem;
  margin-right: 0.5rem;
`
