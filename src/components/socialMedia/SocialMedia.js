import React from "react";
import s from "../socialMedia/StyledSocialMedia.module.css";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";

export const SocialMedia = () => {
  return (
    <div className={s.socialMediaContainer}>
      <a href="/" className={s.twitter}>
        <img src={twitter} alt="twitter" />
      </a>
      <a href="/" className={s.instagram}>
        <img src={instagram} alt="instagram" />
      </a>
      <a href="/" className={s.facebook}>
        <img src={facebook} alt="facebook" />
      </a>
    </div>
  );
};
