import { IconButton } from '@material-ui/core'
// import React, { useRef } from 'react'
import {Html5Qrcode} from "html5-qrcode"
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
//   function onScanSuccess(decodedText, decodedResult) {
//   // handle the scanned code as you like, for example:
//   alert(`Code matched = ${decodedText}`, decodedResult);
// }
// function onScanFailure(error) {
//   // handle scan failure, usually better to ignore and keep scanning.
//   // for example:
//   console.warn(`Code scan error = ${error}`);
// }
// const reader = useRef()

// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  return (
    <Container>
      <div id='reader'  width='90%'></div>
      <ScannerContainer style={{height:'60vh'}}>
      <IconButton
        onClick={()=>{
          
          // eslint-disable-next-line no-unused-vars
          let  lastResult,countResults=0;
            const html5QrCode = new Html5Qrcode("reader");
            const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            /* handle success */
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                alert(decodedText)
                // gtin = decodedText.trim();
                // gtin = gtin.replace(/[^a-z0-9]/gi, '');
                // fetchDetails(gtin);
                html5QrCode.stop();
            }
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
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