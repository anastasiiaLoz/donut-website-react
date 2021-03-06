import React from "react";
import s from "../header/StyledHeader.module.css";
import background from "../img/bg.png";
import donuts from "../img/picdonuts.png";
import logo from "../img/logo.png";
import { Button } from "../button/Button.js";
import { SocialMedia } from "../socialMedia/SocialMedia";

export const Header = () => {
  return (
    <div className={s.headerContainer}>
      <img className={s.background} src={background} alt="background" />
      <img className={s.donuts} src={donuts} alt="donuts" />
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.masterclassContainer}>
        <div className={s.headingContainer}>
          <h1 className={s.heading}>Donut Masterclass with the Donut King</h1>
          <p className={s.host}>Hosted by Eva Green</p>
        </div>
        <Button label="Register" />
        <SocialMedia />
      </div>
    </div>
  );
};
