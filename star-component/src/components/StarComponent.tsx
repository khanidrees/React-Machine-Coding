import React, { useState } from "react";

const StarComponent = ({ starCount = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div style={{ cursor: "pointer" }} className="container">
      {new Array(starCount).fill(0).map((_, index) => {
        return (
          <span
            key={index.toString()}
            className={index < (hover || rating) ? "golden" : ""}
            onClick={(e) => {
              setRating(index + 1);
            }}
            onMouseEnter={(e) => {
              setHover(index + 1);
            }}
            onMouseLeave={(e) => {
              setHover(0);
            }}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarComponent;
