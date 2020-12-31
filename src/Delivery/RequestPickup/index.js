import React, {useState, useEffect, Suspense, useRef} from "react";


import Request from "./Request";
const Map = React.lazy(()=>import("./Map"));

import $s from "./index.scss";

const RequestPickup = () => {
  const pickup = useRef(); //a two element array
  const dest = useRef(); //a two element array
  const [previewReady, setPreviewReady] = useState(false);
  return (
    <div>
      <Request className={$s.Request} pickup={pickup} 
        dest={dest} setPreviewReady={setPreviewReady}/>

      <Suspense fallback={<div>Loading...</div>}>
        {previewReady && <Map locations={{pickup, dest}} className={$s.Map}/>}
      </Suspense>

    </div>
  
  )
}

export default RequestPickup;