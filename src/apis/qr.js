
    let selectedDeviceId = null;
// eslint-disable-next-line no-undef
export const codeReader = new ZXing.BrowserBarcodeReader();

  codeReader.getVideoInputDevices().then((videoInputDevices)=>{
    console.log(videoInputDevices)
    
if (videoInputDevices.length > 1)  selectedDeviceId = videoInputDevices[0].deviceId;
else selectedDeviceId = videoInputDevices[0].deviceId;
  })

//      codeReader.decodeOnceFromVideoDevice(videoDevice[0].deviceId, 'video').then((result) => {
// console.log(result)
//      }).catch((error)=>console.log(error))
