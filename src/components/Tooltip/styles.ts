import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;

    width: 160px;
    background: rgba(47, 110, 181, 1);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    color: #312e38;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      border-style: solid;
      border-color: rgba(47, 110, 181, 1) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`
