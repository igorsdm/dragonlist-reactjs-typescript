import styled from 'styled-components'

export const ScrollY = styled.div`
  overflow-y: auto;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
    border-radius: 4px;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background: #f4f4f4;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e25822;
    border-radius: 3px;
  }
`

export const DragonContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
  height: 6rem;
  margin-right: 0.5rem;
  border-radius: 5px;

  img {
    margin-right: 1.5rem;
    margin-left: 0.5rem;
    height: 4rem;
    width: 4rem;

    border-radius: 50%;
  }
`
