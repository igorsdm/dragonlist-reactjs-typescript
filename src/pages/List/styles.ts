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
  height: 6rem;

  margin: 0.5rem 0;
  margin-right: 0.5rem;
  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.1);
  img {
    margin-right: 1.5rem;
    margin-left: 0.5rem;
    height: 4rem;
    width: 4rem;

    border-radius: 50%;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  a {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;

  svg {
    margin-left: 0.5rem;
  }
`
