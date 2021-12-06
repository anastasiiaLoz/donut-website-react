import React from "react";
import s from "../burgerMenu/StyledBurgerMenu.module.css";
import { CloseSharp, MenuSharp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export const BurgerMenu = () => {
  return (
    <>
      <div className={s.burgerMenu}>
        <div className={s.burgerTop}>
          <img className={s.burgerLogo} src={logo} alt="oh my donut label" />
          <button type="button" className={s.burgerOpenButton}>
            <MenuSharp fontSize="medium" />
          </button>
          <button type="button" className={s.burgerCloseButton}>
            <CloseSharp fontSize="medium" />
          </button>
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
      </div>
      <div className={s.burgerMenuOverlay} />
    </>
  );
};
