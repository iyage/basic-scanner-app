import { IconButton } from '@material-ui/core'
import React, { useRef, useState } from 'react'
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

    

  async function runScan ()
  {
    let selectedDeviceId = null;
// eslint-disable-next-line no-undef
 const codeReader = new ZXing.BrowserBarcodeReader();
  codeReader.getVideoInputDevices().then((videoInputDevices)=>{
    console.log(videoInputDevices)
if (videoInputDevices.length > 1){ 
  selectedDeviceId = videoInputDevices[1].deviceId
}
else selectedDeviceId = videoInputDevices[0].deviceId;


  codeReader.decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
alert(result)
      if (result) {
      alert(result)
          alert(result)
          console.log('called')
      }
      // eslint-disable-next-line no-undef
      if (err && !(err instanceof ZXing.NotFoundException)) {
        console.error(err)
        alert(err)
      }
    })
    // alert("stream  "+selectedDeviceId)

  }).catch(error=>alert(error))

  
  }


  
const video = useRef();
const [scannerState,setScannerState] = useState(false)
  return (
    <Container>
     {!scannerState&& <ScannerContainer style={{height:'60vh'}}>
      <IconButton
        onClick={()=>{
    setScannerState(true);
     runScan ()

                   }}
      
      >
  <FaCamera size={60}
  />
</IconButton>
      </ScannerContainer>
}

{   scannerState&& <ScannerContainer>
     <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video>
    </ScannerContainer>}

    </Container>


  )
}

export default Commission