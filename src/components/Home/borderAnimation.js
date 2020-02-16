import { keyframes, css } from 'styled-components'

const drawBorder = keyframes`
  0% {
    width: 0;
    height: 0;
  }
  25% {
    width: 100%;
    height: 0;
  }
  50% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
`
const borderColor = keyframes`
  from {
    border-bottom-color: #131313;
    border-left-color: #131313;
  }
  to {
    border-bottom-color: #131313;
    border-left-color: #131313;
  }
`

const animatedBorderStyle = () => css`
  background: none;
  border: 0;
  box-sizing: border-box;
  vertical-align: middle;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
    border-top-color: #131313;
    border-right-color: #131313;
    animation: ${drawBorder} 2s 1 forwards;
  }

  &::after {
    bottom: 0;
    right: 0;
    animation: ${drawBorder} 2s 1s 1 forwards, ${borderColor} 2s 1s 1 forwards;
  }
`

export { animatedBorderStyle }
