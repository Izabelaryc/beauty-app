import { Link } from "react-router-dom";
import { getPublicAssetUrl } from "../utils/get-public-image-src";

export default function HomePage() {
  return (
    <div className="homepage">
      <h1 className="title">Four Beauty Seasons</h1>
      <h2 className="homepage-text">What is your color season?</h2>
      <Link className="homepage-link" to="/test">
        Start the test!
      </Link>
      <img
        className="homepage-img02"
        src={getPublicAssetUrl("images/butterfly02.jpg")}
      />
    </div>
  );
}
