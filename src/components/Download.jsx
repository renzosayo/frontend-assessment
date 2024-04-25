import React from "react";

function Download({ isBordered = false, isPadded = false }) {
  return (
    <div
      className={
        "download container section--centered" +
        (isBordered ? " download--divider" : " ")
      }
    >
      <button className="btn download__btn download__btn--play-store"></button>
      <button className="btn download__btn download__btn--app-store"></button>
    </div>
  );
}

export default Download;
