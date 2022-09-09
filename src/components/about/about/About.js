import React from 'react'
import s from "../about/StyledAbout.module.css"
import singleDonut from "../../img/singleDonut.png"
import cupcakeBox from "../../img/cupcakeBox.png"
import { EventCircle } from '../eventCircle/EventCircle';
import zebraGlazedDonut from "../../img/zebraGlazedDonut.png"
import chefHat from "../../img/chefHat.png"
import chat from "../../img/chat.png"
import clock from "../../img/clock.png"
import people from "../../img/people.png"
import coloredSprinkleDonut from "../../img/coloredSprinkleDonut.png"
import chocGlazedDonut from "../../img/chocGlazedDonut.png"
import chocSprinkleDonut from "../../img/chocSprinkleDonut.png"


export const About = () => {
    return (
        <>
            <div className={s.aboutUsContainer}>
                <div className={s.aboutUs}>
                    <h3 className={s.aboutUsTitle}>About Us</h3>
                    <p className={s.aboutUsFirstParagraph}>Oh My Donut is the shop which adores tasty deserts and spend hours to create sophisticated donuts which will save the world!</p>
                    <p className={s.aboutUsSecondParagraph}>Eva has been baking since she was six years old and over the last 49 years, she has created hundreds of cakes for weddings and has baked for many celebrities. Eva and our shop have received multiple awards & recognition for excellence. </p>
                    <button className={s.readMoreButton} type="button">Read more</button>
                </div>
                <div className={s.program}>
                    <h3 className={s.programTitle}>Program</h3>
                    <p className={s.programParagraph}>Indulge in this immersive sweet treat experience with The Chef Donut Queen in her New York donut shop!</p>
                    <p className={s.programParagraph}>> A stand up history of donuts </p>
                    <p className={s.programParagraph}>> Make 3 donut flavors of your choice</p>
                    <p className={s.programParagraph}>> Enjoy all-you-can-eat donuts</p>
                    <p className={s.programParagraph}>> Cocktail pairings and coffee included</p>
                    <p className={s.programParagraph}>> Photoshoot by professional photographer</p>
                    <p className={s.programParagraph}>> Secret receipt of cooking from Eva</p>
                    <p className={s.programParagraph}>> All products are included in the price</p>
                    <button className={s.readMoreButton} type="button">Read more</button>
                </div>
                

                <div className={s.eventContainer}>

                    <EventCircle
                        imgURL={zebraGlazedDonut}
                        title="Type of the event"
                        details="Cooking classes"
                        imgUrl={chefHat}
                    />
                    <EventCircle
                        imgURL={coloredSprinkleDonut}
                        title="Number of guests"
                        details="1 to 20"
                        imgUrl={people}
                    />
                    <EventCircle
                        imgURL={chocSprinkleDonut}
                        title="Time of the event"
                        details="18:30 (2.5 hours)"
                        imgUrl={clock}
                    />
                    <EventCircle
                        imgURL={chocGlazedDonut}
                        title="The host speaks"
                        details="English, French"
                        imgUrl={chat}
                    />
                </div>
            </div>

        </>

    )
};