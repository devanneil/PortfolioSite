import React from "react";
import { Link } from "react-router-dom";
import Logo from './pictures/LogoSmall.png'
import "./titleBar.css"; // we'll create this next

const NAV_ENTRIES = [
  { name: "Home", route: "/" },
  { name: "Projects", route: "/projects" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
  { name: "3D Neil Tech", route: "/company"}
];

export default function TitleBar({
  title = "Default Title",
  details = "",
  imageSrc = Logo,
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
                    <Link
                    key={entry.name}
                    to={entry.route}
                    className={`navbarEntry`}
                    >
                    {entry.name}
                    {selectedPage === entry.name && <div className="navbarHighlight" />}
                    </Link>
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
