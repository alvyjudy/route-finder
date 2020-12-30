import React from "react";
import {Link} from "react-router-dom";

import $s from "./index.scss";

export default () => {
  return (
    <div className={$s.NavBar}>
      <div>Logo</div>
      <Link to="/login" className={$s.Link}>Login</Link>
      <Link to="/signup" className={$s.Link}>Signup</Link>
    </div>
  )
}