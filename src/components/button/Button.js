import React from "react";
import s from "../button/StyledButton.module.css";

export const Button = props => {
  return (
    <div>
      <button className={s[props.type]} onClick={props.handleClick}>
        {props.label}
      </button>
    </div>
  );
};
