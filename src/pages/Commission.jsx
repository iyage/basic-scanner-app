import { Button } from '@material-ui/core'
// import React, { useRef } from 'react'

import styled from 'styled-components';
import { FaCamera, FaCloudUploadAlt, FaStopCircle } from 'react-icons/fa';
import useSound from 'use-sound';
import beep from "../beep.wav"
import { scanner, stopScanner } from '../apis/scanner';
import { useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const ScannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 1px;
  flex-direction: column;
  row-gap: 20px;
`
const Container = styled.div`
  width: 98%;
`
function Commission() {
const [play] = useSound(beep);
const [scannedOutput,setScannedOutput] = useState("");
const [scannerStatus,setScanStatus] = useState(false)
const [scannedVals,setScannedVals]= useState([]);
const [totalScanned,setTotalScanned] = useState(0)
const navigate = useNavigate();
   const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor:'red'
          }).then((response)=>{
                if(response.isConfirmed){
     navigate("/")
                }
          });
    }
  return (
    <Container>
      <p><strong>Total Scan :</strong> {totalScanned}</p>
      <p style={{fontSize:'12px'}}>{scannedOutput}</p>
         <div id='reader' style={{width:'260px',height:'300px',margin:'auto'}}></div>  
      <ScannerContainer >
        
        {!scannerStatus&&<Button endIcon={<FaCamera/>} variant='contained' color='secondary'
                onClick={()=>{
          scanner(play,setScannedOutput,scannedVals,setScannedVals,setTotalScanned);
          setScanStatus(true)
  }}
        >Start Scanner</Button>}
            {scannerStatus&&<Button variant='contained' color='secondary'
            endIcon={<FaStopCircle/>}
      onClick={()=>{stopScanner();
         setScanStatus(false)}}
      >Stop Scanner</Button>}
         {totalScanned>0&&<Button variant='outlined' color='secondary' endIcon={<FaCloudUploadAlt/>}
         onClick={()=>{
          showAlert()
          stopScanner();
          setTotalScanned(0)
           setScannedVals([])
           setScannedOutput("")

         }}
         >Commission All</Button>}
      </ScannerContainer>
     

{/* {   scannerState&& <ScannerContainer> */}
     {/* <video  ref={video} id="video" width="97%" height="250" style={{border: "1px solid red"}}></video> */}
    {/* </ScannerContainer>} */}

    </Container>


  )
}

export default Commission