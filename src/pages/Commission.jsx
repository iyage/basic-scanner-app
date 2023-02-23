import { IconButton } from '@material-ui/core'
import React, { useRef } from 'react'
import {Html5QrcodeScanner} from "html5-qrcode"
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';

const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`
const Container = styled.div`
  width: 98%;
`
function Commission() {
  function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  alert(`Code matched = ${decodedText}`, decodedResult);
}
function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}
const reader = useRef()

// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  return (
    <Container>
      <div id='reader' ref={reader} width='90%'></div>
      <ScannerContainer style={{height:'60vh'}}>
      <IconButton
        onClick={()=>{
          let html5Qrcoder= new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
        html5Qrcoder.start({ facingMode: "environment" },onScanSuccess,onScanFailure);
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