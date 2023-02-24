import { Button } from '@material-ui/core'
// import React, { useRef } from 'react'

import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';
import useSound from 'use-sound';
import beep from "../beep.wav"
import { scanner, stopScanner } from '../apis/scanner';
import { useState } from 'react';
import PanToolIcon from '@material-ui/icons/PanTool';

const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
const Container = styled.div`
  width: 98%;
`
function Commission() {
const [play] = useSound(beep);
const [scannedOutput,setScannedOutput] = useState("");
const [scannerStatus,setScanStatus] = useState(false)
  return (
    <Container>
      <p>{scannedOutput}</p>
         
      <ScannerContainer >
        
        {!scannerStatus&&<Button endIcon={<FaCamera/>} variant='contained' color='secondary'
                onClick={()=>{
          scanner(play,setScannedOutput);
          setScanStatus(true)
  }}
        >Start Scanner</Button>}
            {scannerStatus&&<Button variant='contained' color='secondary'
            endIcon={<PanToolIcon/>}
      onClick={()=>{stopScanner();
         setScanStatus(false)}}
      >Stop Scanner</Button>}
      </ScannerContainer>
       <div id='reader' style={{width:'260px',height:'400px'}}></div>

{/* {   scannerState&& <ScannerContainer> */}
     {/* <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video> */}
    {/* </ScannerContainer>} */}

    </Container>


  )
}

export default Commission