import React, {useState, useEffect, Suspense} from "react";

import Request from "./Request";
const Map = React.lazy(()=>import("./Map"));

import $s from "./index.scss";

const RequestPickup = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  return (
    <div>
      <Request className={$s.Request} dataSetters={{setStart, setEnd}}/>
      <Suspense fallback={<div>Loading...</div>}>
        {start && end && <Map coordinates={{start, end}} className={$s.Map}/>}
      </Suspense>
    </div>
  
  )
}

export default RequestPickup;