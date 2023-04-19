import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

export default function Season(props) {
  let { id } = useParams();

  const season = data.find((item) => {
    return item.id.toString() === id;
  });

  return (
    <div>
      <img src={season.img} />
      <h1>{season.season}</h1>
      <p>{season.description}</p>
      <img src={season.colorPalette} />
      <p>Celebrities: {season.celebs}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
