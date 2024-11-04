import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';
import '../assets/css/escaner.css'; 

const ScannerView = () => {
  const [scanResult, setScanResult] = useState('');
  let data = JSON.parse(localStorage.getItem("registro"))
  
  useEffect(() =>{
    const scanner = new Html5QrcodeScanner("reader",{
      fps: 5
    });

    scanner.render(success, error);

    function success(result) {

      console.log("usuaro =>", data.p_id_usuario, " valor => ",result);
      
      scanner.clear()
      
    }
  
    function error(err) {
        
    }
  },[])

  return (
        <div className='scanner-container'>
          <div id='reader' className='qr-reader-container'></div>
      </div>
  );
};

export default ScannerView;