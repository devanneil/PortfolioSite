import React from "react";
import "./contentBlock.css";

export default function ContentBlock({
    children,
    image = "None",
    imageAlt = ""
}) 
{
    if (image !== "None") {
        return <div>

        </div>
    };
    return <div className="contentBlock">{children}</div>
}