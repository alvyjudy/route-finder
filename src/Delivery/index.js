import React, {Suspense} from "react";

import LoadingUI from "./LoadingUI";

const RequestPickup = React.lazy(()=>import("./RequestPickup"));

const Delivery = () => {
  return (
    <div>
      <Suspense fallback={<LoadingUI/>}>
        <RequestPickup/>
      </Suspense>
    </div>
  )
}

export default Delivery;