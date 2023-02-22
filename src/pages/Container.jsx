import { Button } from '@material-ui/core'
import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'

const PagesContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white;
    position: relative;
    overflow: hidden;
`

const ButtonContainer = styled.div`
  width: 90%;
  margin: auto;
  padding: 5px;
`
const ForMControl = styled.div`
    width: 100%;
    margin: 20px 0;
`
function Container() {
  return (
    <PagesContainer>

<ButtonContainer>
      <ForMControl>
<Button type='button' component={Link} to="/pages/commission"   variant='contained'
size='large'
fullWidth
  style={{
  
        backgroundColor: "rgb(190, 2, 3)",
        color:'white',

    }}

 >Commission</Button>
  </ForMControl>
    <ForMControl>
<Button type='button' variant='contained'
size='large'
fullWidth
  style={{
  
        backgroundColor: "rgb(190, 2, 3)",
        color:'white',

    }}
 >Pack</Button>
  </ForMControl>
    <ForMControl>
<Button type='button' variant='contained'
size='large'
fullWidth
  style={{
  
        backgroundColor: "rgb(190, 2, 3)",
        color:'white',

    }}
 >Unpack</Button>
  </ForMControl>
      <ForMControl>
<Button type='button' variant='contained'
size='large'
fullWidth
  style={{
  
        backgroundColor: "rgb(190, 2, 3)",
        color:'white',

    }}
 >Ship</Button>
  </ForMControl>
      <ForMControl>
<Button type='button' variant='contained'
size='large'
fullWidth
  style={{
  
        backgroundColor: "rgb(190, 2, 3)",
        color:'white',

    }}
 >Receive</Button>
  </ForMControl>
</ButtonContainer>
    </PagesContainer>
  )
}

export default Container