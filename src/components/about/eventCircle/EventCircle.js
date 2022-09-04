import React from 'react'
import s from "../eventCircle/StyledEventCircle.module.css"
import circleBg from "../../img/circleBg.png"

export const EventCircle = ({imgURL, desription, title, details, name, imgUrl}) => {
  return (
    <div className={s.eventContainer}>
        <img className={s.circleBg} src={circleBg} alt="Light Circle Background"/>
        <img className={s.eventImg} src={imgURL} alt={desription}/>
        <h3 className={s.eventTitle}>{title}</h3>
        <p className={s.eventDetails}>{details}</p>
        <img className={s.eventSvg} src={imgUrl} alt={name}/>
    </div>
  );
};
