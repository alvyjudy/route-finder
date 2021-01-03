import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";
import {setLocations} from "./actions";

const Request = (props) => {
  const distance = useSelector(store=>store.distance);
  const dispatch = useDispatch();
  const pickup = useRef();
  const dest = useRef();

  const calculateRoute = e => {
    e.preventDefault();
    dispatch(setLocations(pickup.current, dest.current));
  }

  return (
    <div className={props.className} data-cy={props['data-cy']}>
      <p className={$s.ReqPickupTitle}>Deliver your parcel now</p>
      <form className={$s.RequestPickupForm}
        onSubmit={calculateRoute}
      >
          <TypeNSearch 
            valueRef={pickup}
            className={$s.SearchBox}
            data-cy="PickupLocation" 
            whatToType="Enter pickup location"/>
          <TypeNSearch 
            valueRef={dest}
            className={$s.SearchBox} 
            data-cy="Destination" 
            whatToType="Enter destination"/>
          <TypeNSearch 
            className={$s.SearchBox} 
            whatToType="Enter destination"/>
          <button type="submit" className={$s.RequestButton} data-cy="LoadMap"
          >Request</button>
      </form>

      {distance && <div>{distance} KM</div>}
    </div>
  )
}

export default Request;