import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";

import $s from "./Quote.scss";

const Quote = () => {
  const distance = useSelector(store=>store.distance);
  const time = 1;
  const price = Math.floor((distance*0.9 + 4) * 100)/100;

  if (!distance) {return null}

  return (
    <div className={$s.QuoteBox}>
      <p className={$s.Title}>Est. Delivery</p>
      <p className={$s.Subtitle}>{time} day</p>
      <p className={$s.TextLeft}>${price} CAD</p>
      <button className={$s.SubmitButton}>Confirm</button>
    </div>
  )
}

export default Quote;