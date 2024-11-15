import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

function App() {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 350,
        height: 350,
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result)
    }
    function error(err) {
      console.error(err)
    }
  }, [])


  return (
    <div>
      <h1>Qr Code Scanner</h1>
      {scanResult ? <div>success: <a href={'http://' + scanResult}>{scanResult}</a></div> : <div id='reader'></div>}
    </div>
  )
}

export default App
