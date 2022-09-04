import React, { useState } from "react";
import s from "../burgerMenu/StyledBurgerMenu.module.css";
import { CloseSharp, MenuSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export const BurgerMenu = () => {
const [open, setOpen] = useState(false)

const handleToggle = () => {
  setOpen(!open)
}


  return (
    <>
    <button type="button" className={s.burgerButton} onClick={handleToggle}>{!open ? (<MenuSharp fontSize="medium" />) : (<CloseSharp fontSize="medium" /> )}
    </button>
    {open ?  
      (<div className={s.burgerMenu}>
        <div className={s.burgerTop}>
          <img className={s.burgerLogo} src={logo} alt="oh my donut label" />
        </div>
        <ul className={s.burgerNavList}>
          <li className={s.burgerNavLinks}>
            <Link className={s.burgerLink} type="button" to="/main#anchortag">
              About us
            </Link>
          </li>
          <li className={s.burgerNavLinks}>
            <Link className={s.burgerLink} type="button" to="/">
              Program
            </Link>
          </li>
          <li className={s.burgerNavLinks}>
            <Link className={s.burgerLink} type="button" to="/">
              Reviews
            </Link>
          </li>
          <li className={s.burgerNavLinks}>
            <Link className={s.burgerLink} type="button" to="/">
              Contacts
            </Link>
          </li>
        </ul>
      </div>) : null
    }
    </>
  );
};
