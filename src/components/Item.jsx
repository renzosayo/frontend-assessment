import React from "react";

function Item({ item, direction = "left" }) {
  return (
    <div
      className={
        "item container--narrow" +
        (direction === "left" ? "" : " item--reverse")
      }
    >
      <div
        className={
          "item__text-panel" +
          (direction === "left" ? " align-left" : " align-right")
        }
      >
        <h3 className="item__text-panel__title black">{item.title}</h3>
        <p className="item__text-panel__text black">{item.text}</p>
      </div>
      <img
        src={item.image}
        alt="item image"
        className="item__image image--large"
      />
    </div>
  );
}

export default Item;
