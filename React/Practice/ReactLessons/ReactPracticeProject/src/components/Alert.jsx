import React from 'react';
import "./Alert.css";


function Alert({color, message}) {
  return (
    <p className={color === "red" ? "red" : "green"} >{message}</p>
  )
}

export default Alert