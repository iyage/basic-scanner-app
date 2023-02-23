// import { IconButton } from '@material-ui/core'
import React, {  useState } from 'react'
// import styled from 'styled-components';
// import { FaCamera } from 'react-icons/fa';
 import QrReader from "react-qr-reader";
 import "./style.css";
// const ScannerContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

// `
// const Container = styled.div`
//   width: 98%;
// `

function Commission() {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };


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

    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Last Scan:
        {selected}
      </h2>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>

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


  )
}

export default Commission