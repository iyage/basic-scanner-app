import { IconButton } from '@material-ui/core'
import React, {  useState} from 'react'
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

//   useEffect(()=>{
//     function onScanSuccess(decodedText, decodedResult) {
//   // handle the scanned code as you like, for example:
//   alert(`Code matched = ${decodedText}`, decodedResult);
// }

// function onScanFailure(error) {
//   // handle scan failure, usually better to ignore and keep scanning.
//   // for example:
//   console.warn(`Code scan error = ${error}`);
// }

// let html5QrcodeScanner = new Html5QrcodeScanner(
//   "reader",
//   { fps: 10, qrbox: {width: 250, height: 250} },
//   /* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);

//   },[])

const  [lastResult,setLastResult]= useState(0);
const  [countResults,setCountResults]= useState(0);

    function scannManually() {
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
        if (decodedText !== lastResult) {
          // eslint-disable-next-line no-const-assign
          setCountResults(++countResults);
          setLastResult(decodedText)
            // lastResult = ;
            // gtin = decodedText.trim();
            // gtin = gtin.replace(/[^a-z0-9]/gi, '');
            html5QrCode.stop();
        }
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
        
    }


//   async function runScan ()
//   {
//     let selectedDeviceId = null;
// // eslint-disable-next-line no-undef
//  const codeReader = new ZXing.BrowserBarcodeReader();
//   codeReader.getVideoInputDevices().then((videoInputDevices)=>{
//     console.log(videoInputDevices)
// if (videoInputDevices.length > 1){ 
//   selectedDeviceId = videoInputDevices[1].deviceId
// }
// else selectedDeviceId = videoInputDevices[0].deviceId;


//   codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
// alert(result)
//       if (result) {
//       alert(result)
//           alert(result)
//           console.log('called')
//       }
//       // eslint-disable-next-line no-undef
//       if (err && !(err instanceof ZXing.NotFoundException)) {
//         console.error(err)
//         alert(err)
//       }
//     })
//     // alert("stream  "+selectedDeviceId)

//   }).catch(error=>alert(error))

  
//   }


  
// const video = useRef();
// const [scannerState,setScannerState] = useState(false)
  return (
    <Container>
      <div id='reader' width='90%'></div>
      <ScannerContainer style={{height:'60vh'}}>
      <IconButton
        onClick={()=>{
    // setScannerState(true);
    scannManually();}}
      
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