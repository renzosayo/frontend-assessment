import React from "react";

function Section({
  title,
  text,
  children = null,
  color = "white",
  isFullWidth = false,
  classToAdd = "",
}) {
  return (
    <div
      className={
        "section container section--centered" +
        (color === "blue" ? " section--blue" : "") +
        (isFullWidth ? " container--full" : "") +
        ` ${classToAdd}`
      }
    >
      {title && (
        <h2 className={"section__title" + (color === "blue" ? "" : " black")}>
          {title}
        </h2>
      )}
      <p className={"section__text" + (color === "blue" ? "" : " black")}>
        {text}
      </p>

      {children}
    </div>
  );
}

export default Section;
