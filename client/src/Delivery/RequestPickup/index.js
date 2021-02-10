import React, {useState, useEffect, Suspense, useRef} from "react";
import {Provider} from "react-redux";

import Request from "./Request";
import Quote from "./Quote";
const Map = React.lazy(()=>import("./Map"));
import store from "./reducer";

import $s from "./index.scss";

const RequestPickup = () => {
  return (
    <div className={$s.RequestPickup}>
      <Provider store={store}>
        <Request data-cy="Request" />
        <Quote/>
        <Suspense fallback={<div>Loading...</div>}>
          <Map className={$s.Map}/>
        </Suspense>

        

      </Provider>

    </div>
  
  )
}

export default RequestPickup;