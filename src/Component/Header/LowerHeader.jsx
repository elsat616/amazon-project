import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import classes from "./header.module.css";

function LowerHeader(props) {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li onClick={props.click} className={classes.hamberger_btn}>
          <IoMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
