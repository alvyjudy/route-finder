import React, {useState, useEffect, Suspense, useRef} from "react";
import {Provider} from "react-redux";

import Request from "./Request";
const Map = React.lazy(()=>import("./Map"));
import store from "./reducer";

import $s from "./index.scss";

const RequestPickup = () => {
  return (
    <div>
      <Provider store={store}>
        <Request className={$s.Request} data-cy="Request" />

        <Suspense fallback={<div>Loading...</div>}>
          <Map className={$s.Map}/>
        </Suspense>

      </Provider>

    </div>
  
  )
}

export default RequestPickup;