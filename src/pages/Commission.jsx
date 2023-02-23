// import { IconButton } from '@material-ui/core'
import React, {  useEffect} from 'react'
import {Html5QrcodeScanner} from "html5-qrcode"
// import styled from 'styled-components';
// import { FaCamera } from 'react-icons/fa';

// const ScannerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

// `
// const Container = styled.div`
//   width: 98%;
// `






function Commission() {

  useEffect(()=>{
    function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  alert(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);

  },[])


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
    <div id='reader' width="400px" style={{color:'red'}}></div>
  )}

    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>
    //     Last Scan:
    //     {selected}
    //   </h2>
    //   <button
    //     onClick={() => {
    //       setStartScan(!startScan);
    //     }}
    //   >
    //     {startScan ? "Stop Scan" : "Start Scan"}
    //   </button>
    //   {startScan && (
    //     <>
    //       <select onChange={(e) => setSelected(e.target.value)}>
    //         <option value={"environment"}>Back Camera</option>
    //         <option value={"user"}>Front Camera</option>
    //       </select>
    //       <QrReader
    //         facingMode={selected}
    //         delay={1000}
    //         onError={handleError}
    //         onScan={handleScan}
    //         // chooseDeviceId={()=>selected}
    //         style={{ width: "300px" }}
    //       />
    //     </>
    //   )}
    //   {loadingScan && <p>Loading</p>}
    //   {data !== "" && <p>{data}</p>}
    // </div>

//     <Container>
//      {!scannerState&& <ScannerContainer style={{height:'60vh'}}>
//       <IconButton
//         onClick={()=>{
//     setScannerState(true);
//      runScan ()

//                    }}
      
//       >
//   <FaCamera size={60}
//   />
// </IconButton>
//       </ScannerContainer>
// }

// {   scannerState&& <ScannerContainer>
//      <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video>
//     </ScannerContainer>}

//     </Container>


  // )
// }

export default Commission