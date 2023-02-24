import {Html5Qrcode} from "html5-qrcode"

let html5QrCode =  null;
export function scanner(play,output)
{
     html5QrCode = new Html5Qrcode("reader");
// eslint-disable-next-line no-unused-vars
          let  lastResult,countResults=0;
            const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            /* handle success */
            if (decodedText !== lastResult) {
                ++countResults;
                lastResult = decodedText;
                play();
                 alert(decodedText)
                 output(decodedText)
              
                
            }
        };
        const config = { fps: 10, qrbox: { width: 230, height: 230 } };
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}


export const stopScanner = ()=>{
html5QrCode.stop();
}

