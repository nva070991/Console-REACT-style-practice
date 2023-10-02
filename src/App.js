import styled, { createGlobalStyle } from 'styled-components'
// import useState from 'react'


import Flex from './components/Flex'



const AppWrapper = styled.div`
  background: black;
  width: 100%;
  paddind: 2rem;
  min-height: 100vh;
`

const GlobalStyles = createGlobalStyle`
body{
  margin: 0px;
  font-family: consolas;
  box-sizing: border-box;
}

`

const App = () => ( 
<AppWrapper>
  <GlobalStyles/>
  

   <Flex display="flex" flex-direction="column" margin='16px' />

</AppWrapper>)

export default App
