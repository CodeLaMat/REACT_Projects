import React from "react";

import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={style.button} /* Here .button is the class name got from css*/type={props.type || "button"} onClick={props.click}>
      {props.children}
    </button>
  );
};
export default Button;
