import React from "react";
// import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { Header } from "../components/header/Header";
import { About } from "./about/about/About";
import {Reviews} from "./reviews/Reviews"

function App() {
  return (
    <>
      <Header />
      <About/>
      <Reviews/>
    </>
  );
}

export default App;
