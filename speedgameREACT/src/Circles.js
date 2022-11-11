import React from "react";

const Circles = (props) => {
  return <div className="circle" key={props.key} onClick={props.click}></div>;
};

export default Circles;
