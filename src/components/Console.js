/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Line from './Line'
import Button from './Button'


const circlePit = keyframes`
transform : rotateZ()
`

const StyledConsole = styled.textarea`
 width: 100%
 height: 70vh;
 background: black;
 font-size: 24px;
 border: none;
 resize: none;
 &:focus{
   outline:none
 }
 animation : ${circlePit} 2s
`

const Console = (props) => {
  const {color } = props

  const [lines, setLines] = useState(['C/users/>'])
  const [text, setText] = useState(lines[0])
  const [show, setShow] = useState("disabled")



  const onKeyPress = (e) => {
    if (e.key==='Enter') {
      setLines((pre)=>([...pre, 'C/users/>']))

      setText('C/users/>')
     }

     if (e.key.length===1) {

      const textcopy = text + e.key

      setText(textcopy)
      setShow("")
      const copy = Object.assign([], lines)
      copy.splice(-1, 1, textcopy)
      setLines(copy)
     }



  }
  const ClearConsole = () => {
    setLines(['C/users/>'])
    setShow("disabled")



   }

  return (
  <>
      {lines.map((line, i) => (
       
        <Line color={color} key={i+line} >{line}</Line>
      ))}
      <StyledConsole color={color} onKeyDown={onKeyPress} {...props} />
      <Button text="Очистить" show={show}  click={ClearConsole} background={color}/>

    </>
  )
}
export default Console
