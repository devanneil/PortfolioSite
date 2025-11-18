import React from "react";
import "./titleBar.css"; // we'll create this next

const NAV_ENTRIES = [
  { name: "Home", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];

export default function TitleBar({
  title = "Default Title",
  details = "",
  imageSrc = "/logo192.png",
  imageAlt = "Site logo",
  selectedPage = "None"
}) {
  return (
    <div className="header-wrapper">
        <div className="bars">
            <div className="titlebar">
              <h1 className="titlebar-title">{title}</h1>
              <h2 className="titlebar-text"> {details}</h2>
            </div>
            <div className="navbar">
                {NAV_ENTRIES.map((entry) => (
                    <div
                    key={entry.name}
                    className={`navbarEntry ${
                        selectedPage === entry.name ? "selected" : ""
                    }`}
                    >
                    {entry.name}
                    </div>
                ))}
            </div>
        </div>
        <img
            src={imageSrc}   // replace with your image path
            alt={imageAlt}
            className="titlebar-logo"
        />
    </div>
  );
}
