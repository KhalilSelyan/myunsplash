import React from "react";
import Popup from "reactjs-popup";
import "./header.styles.scss";
import prependImage from "../previewlayout/previewlayout.component";
let getLink = () => {
  return document.getElementById("url").value;
};

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
      <Popup trigger={<button className="button"> Add a photo </button>} modal>
        <div className="modal">
          <span id="newpictext">Add a new photo</span>
          <span className="label">Label</span>
          <input className="input" type="text" />
          <span className="label">Photo URL</span>
          <input className="input" id="url" type="text" />
          <div className="modal__buttons">
            <button className="button2">Cancel</button>
            <button className="button3" onClick={prependImage}>
              Submit
            </button>
          </div>
        </div>
      </Popup>
    </div>
  </div>
);

export default Header;
