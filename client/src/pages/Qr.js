import { useEffect, useState } from "react";
import  QrReader from "react-qr-scanner"
import Certificate from "../components/Certificate/Certificate";
import { getBase64 } from "../utils/utils";
import {Html5Qrcode} from "html5-qrcode"


const Qr = () => {
    const [data, setData] = useState(null)
    const [isScan, setIsScan] = useState(true);
    const onQrScan = async (response, e, uploaded) => {
      let data;
      if (uploaded) {
        const resp = await new Html5Qrcode("file", "reader").scanFile(e.target.files[0])
        data = await JSON.parse(resp)
        console.log(data)
      }else if (response !== null) {
        data = await response.text
      }
      // setIsScan(false)
      const res = await fetch(process.env.REACT_APP_SERVER+"/api/certificates/verify", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        mode: "cors",
        body: JSON.stringify(data)
      })
      const obj = await res.json()
      setData(obj)
    }
    return (
        <div>
        {isScan ? (
          <>
            <QrReader
              delay={100}
              style={{
                height: 240,
                width: 320,
              }}
              onError={(err) => console.log(err)}
              onScan={(response) => onQrScan(response,null, false)}
              constraints = {{
                video: {
                  facingMode:"environment",
                }
              }}
              legacymode = "true"
              />
            <input type="file" id="file" onChange={(e) => onQrScan(null,e, true)} />
          </>
        ) : <button onClick={() => {setIsScan(true); setData(null)}}>Another Scan</button>}
        {data ? <Certificate {...data.certificate} /> : ""}
        {JSON.stringify(data)}

      </div>
    )
}

export default Qr;