/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import {useState} from 'react'
import Console from './Console'
import Title from './Title'
import Button from './Button'


const StyledDiv = styled.div`
  ${(props) => props};
`

const Flex = (props) => {
    const [color, SetColora] = useState('green')

    const Change = () => {
        if (color==='green') { 
            SetColora('red')
          }
        else {
            SetColora('green')
         }}

    return (  
         <> 
    <Button margin='16px' background={color} text="Сменить тему"  width="300px"
  height="30px" click={Change}/><StyledDiv {...props}>
     <Title color={color} >Console CMD. REACT</Title>
<Console color={color} />
   </StyledDiv></>)
} 

export default Flex