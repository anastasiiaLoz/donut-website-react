import React from "react";
import s from "../reviews/StyledReviews.module.css";
import reviewBg from "../img/reviewBg.png"
import reviewer from "../img/reviewer.png"



export const Reviews = () => {
  return (
    <>
        <img className={s.reviewBg} src={reviewBg} alt="Review Background"/>
        <div className={s.reviewsContainer}>
            <h3 className={s.reviewsTitle}>Reviews</h3>
            <img className={s.reviewer} src={reviewer} alt="reviewer"/>
            <div className={s.starImg} />
            <h4 className={s.reviewersName}>Will</h4>
            <p className={s.reviewsText}>Last time I have visited a cooking course by Eva&nbsp;&nbsp; I was impressed with the way she explained everything
            to people. You can be sure you will manage to cook a delicious dish even if it is your first time in the kitchen!<br/>
           Thank you so much for the masterclass! Looking forward to the next one and highly recommend it to everyone!</p>
           <span className={s.numberOfReviews}>2/15</span>
        </div>
    </>
  );
};
