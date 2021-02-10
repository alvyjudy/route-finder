import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import $s from "./Quote.scss";

const Quote = () => {
  const distance = useSelector((store) => store.distance);

  if (!distance) {
    return null;
  }

  return (
    <div className={$s.QuoteBox}>
      <p className={$s.Title}>Distance</p>
      <p className={$s.Subtitle}>{distance} km</p>
    </div>
  );
};

export default Quote;
