import { Link, useParams } from "react-router-dom";
import data from "../data/seasons";
import { getPublicAssetUrl } from "../utils/get-public-image-src";

export default function Season() {
  let { id } = useParams();

  const season = data.find((item) => {
    return item.id.toString() === id;
  });

  return (
    <div className="season">
      <img src={getPublicAssetUrl(season.img)} className="season-img" />
      <h1 className="title">{season.season}</h1>
      <p className="text">{season.description}</p>
      <img
        src={getPublicAssetUrl(season.colorPalette)}
        className="color-palette"
      />
      <p className="text">
        <strong>Celebrities:</strong> {season.celebs}
      </p>
      <Link className="season-link" to="/">
        Back
      </Link>
    </div>
  );
}
