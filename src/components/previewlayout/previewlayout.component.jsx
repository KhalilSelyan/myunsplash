import React from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import getLink from "../header/header.component";
import "./previewlayout.styles.scss";

// const grid = document.querySelector(".grid");

// var msnry = new Masonry(grid, {
//   itemSelector: ".grid-item",
//   gutter: 20,
// });
// msnry.layout();

var grid = document.querySelector(".grid");
var msnry;

// window.onload = () => {
imagesLoaded(grid, function () {
  msnry = new Masonry(grid, {
    initLayout: false,
    itemSelector: ".grid-item",
    // columnWidth: 200,
    // gutter: 20,
  });
  msnry.layout();
});
// };

const prependImage = () => {
  let fragment = document.createDocumentFragment();
  let div = document.createElement("div");
  div.className = "grid-item";
  let img = document.createElement("img", {
    src: { getLink },
    alt: "unsplash picture",
  });

  div.appendChild(img);
  fragment.appendChild(div);

  grid.insertBefore(fragment, grid.firstChild);
  msnry.prepended(div);
};

const PreviewLayout = () => {
  return (
    <div className="grid">
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1637002057988-c380c8c59a5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1637050132818-0f658dc01e20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1164&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1637068334885-d73f3076bd84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1077&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1636990536161-710184e1047f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=685&q=80"
          alt=""
        />
      </div>{" "}
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1633114127188-99b4dd741180?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>{" "}
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
          alt=""
        />
      </div>{" "}
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1637049395387-3c2aab25f825?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1637049081841-948a8205b05a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          alt=""
        />
      </div>
      <div className="grid-item">
        <img
          src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default PreviewLayout;
