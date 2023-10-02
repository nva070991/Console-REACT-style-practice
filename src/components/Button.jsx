/* eslint-disable react/jsx-props-no-spreading */
import styled, { keyframes } from 'styled-components'

const circlePit = keyframes`
transform : rotateZ()
`

const StyledButton = styled.button`
background: ${(props) => props.background || 'green'};
border-radius: 8px;
  width: 300px;
  heigh: 30px;
  font-size: 24px;
  border: none;
  resize: none;
  &:hover{
    outline:10px

    animation : ${circlePit} 2s
  }
  
  `

const Button = ({text = 'text', click, show, ...props}) => (  <StyledButton onClick={click} disabled={show} style={{...props}}>{text}</StyledButton>)
export default Button