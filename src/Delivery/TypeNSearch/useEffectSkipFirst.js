import {useEffect, useRef} from "react";


export default (effect, deps) => {
  const firstRender = useRef(true);
  useEffect(()=>{
    let effectReturns = undefined;

    if (firstRender.current) {
      firstRender.current = false;
    } else {
      effectReturns = effect()
    }

    return effectReturns;
  }, deps)
}