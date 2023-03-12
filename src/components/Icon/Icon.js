import "./Icon.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function Icon({ isFavorite }) {
  return (
    <>
      <button className="icon-button" aria-label="favorite">
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </>
  );
}
