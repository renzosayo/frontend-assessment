import React from "react";

function Card({ item, color }) {
  return (
    <div
      className={
        "card" + (color === "yellow" ? " card--yellow" : " card--blue-green")
      }
    >
      <div className="card__half">
        <img src={item.img} alt="card image" className="card__img" />
        <button className="card__button">{item.btnText}</button>
      </div>
      <div className="card__half align-right">
        <p className="card__action">{item.action}</p>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__description">{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
