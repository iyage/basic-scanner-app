import { Button, IconButton } from '@material-ui/core'
// import React, { useRef } from 'react'

import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';
import useSound from 'use-sound';
import beep from "../beep.wav"
import { scanner, stopScanner } from '../apis/scanner';
import { useState } from 'react';

const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const Container = styled.div`
  width: 98%;
`
function Commission() {
const [play] = useSound(beep);
const [scannedOutput,setScannedOutput] = useState("");
  return (
    <Container>
      <p>{scannedOutput}</p>
      <Button variant='contained' color='secondary'
      onClick={stopScanner}
      >Stop Scanner</Button>
      <div id='reader'  width='97%'></div>
      <ScannerContainer >
      <IconButton
        onClick={()=>{
          
          scanner(play,setScannedOutput);
  }}
      
      >
  <FaCamera size={60}
  />
</IconButton>
      </ScannerContainer>

{/* {   scannerState&& <ScannerContainer> */}
     {/* <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video> */}
    {/* </ScannerContainer>} */}

    </Container>


  )
}

export default Commission