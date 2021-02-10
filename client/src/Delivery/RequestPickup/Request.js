import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import $s from "./Request.scss";
import TypeNSearch from "../TypeNSearch";
import { setLocations } from "./actions";

const Request = (props) => {
  const distance = useSelector((store) => store.distance);
  const dispatch = useDispatch();
  const pickup = useRef();
  const dest = useRef();

  const calculateRoute = (e) => {
    e.preventDefault();
    dispatch(setLocations(pickup.current, dest.current));
  };

  return (
    <div className={$s.Request} data-cy="Request">
      <p className={$s.ReqPickupTitle}>Find your way</p>
      <form className={$s.RequestPickupForm} onSubmit={calculateRoute}>
        <TypeNSearch
          valueRef={pickup}
          className={$s.SearchBox}
          data-cy="PickupLocation"
          whatToType="Enter starting location"
        />
        <TypeNSearch
          valueRef={dest}
          className={$s.SearchBox}
          data-cy="Destination"
          whatToType="Enter destination"
        />
        <button type="submit" className={$s.RequestButton} data-cy="LoadMap">
          Search
        </button>
      </form>
    </div>
  );
};

export default Request;
