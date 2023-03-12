import { useState } from "react";
import "./Icon.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function Icon() {
  const [isFavorite, setisFavorite] = useState(false);
  return (
    <>
      <button
        className="icon-button"
        aria-label="favorite"
        onClick={() => setisFavorite(!isFavorite)}
      >
        {isFavorite ? <StarFilled /> : <Star />}
      </button>
    </>
  );
}
