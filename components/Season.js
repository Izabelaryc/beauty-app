import React from "react";
import spring from "../images/spring.jpg";
import summer from "../images/summer.jpg";
import autumn from "../images/autumn.jpg";
import winter from "../images/winter.jpg";
import SpringColorPalette from "../images/Spring-Color-Palette.jpg";
import SummerColorPalette from "../images/Summer-Color-Palette.jpg";
import AutumnColorPalette from "../images/Autumn-Color-Palette.jpg";
import WinterColorPalette from "../images/Winter-Color-Palette.jpg";

export default function Season(props) {
  let src;
  if (props.id === 1) {
    src = spring;
  } else if (props.id === 2) {
    src = summer;
  } else if (props.id === 3) {
    src = autumn;
  } else {
    src = winter;
  }
  return (
    <div>
      <img src={src} />
      <img src={props.img} />
      <h1>{props.season}</h1>
      <p>{props.description}</p>
      <p>{props.colorPalette}</p>
      <p>Celebrities {props.celebs}</p>
    </div>
  );
}
