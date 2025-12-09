import React from "react";
import "./contentBlock.css";

let figureCounter = 1;

export default function ContentBlock({
  children,
  image = null,
  imageAlt = "",
  caption = ""
}) 
{
    return (
    <div className="contentBlock">
      {image && (
        <figure className="figureWrapper">
          <img className="figure" src={image} alt={imageAlt} />
          {(caption) && (
            <figcaption className="figureCaption">
              {caption}
            </figcaption>
          )}
        </figure>
      )}
      <div className="textContent">{children}</div>
    </div>
    );
}