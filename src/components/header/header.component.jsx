import React from "react";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="logosearch">
      <div className="header__logo">
        <img src="/my_unsplash_logo.svg" alt="unsplash" />
      </div>
      <div className="header__search">
        <img id="searchicon" src="/search.ico" alt="search" />
        <input id="search" type="text" placeholder="Search by name" />
      </div>
    </div>
    <div className="header__addpicture">
      <button className="addpicture">Add a photo</button>
    </div>
  </div>
);

export default Header;
