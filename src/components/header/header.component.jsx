import { React } from "react";
import Popup from "reactjs-popup";
import "./header.styles.scss";
import { useDispatch } from "react-redux";
import { addImage, setSearchText } from "../../redux/image/image.actions";

const Header = () => {
  const dispatch = useDispatch();
  let idCounter = 0;
  return (
    <div className="header">
      <div className="logosearch">
        <div className="header__logo">
          <img src="/my_unsplash_logo.svg" alt="unsplash" />
        </div>
        <div className="header__search">
          <img id="searchicon" src="/search.ico" alt="search" />
          <input
            id="search"
            type="text"
            placeholder="Search by name"
            onChange={(e) => {
              const search = e.target.value;
              dispatch(setSearchText(search));
            }}
          />
        </div>
      </div>
      <div className="header__addpicture">
        <Popup trigger={<button className="button">Add a photo</button>} modal>
          {(close) => (
            <div className="modal">
              <span id="newpictext">Add a new photo</span>
              <span className="label">Label</span>
              <input className="input" id="label" type="text" required />
              <span className="label">Photo URL</span>
              <input className="input" id="url" type="text" required />
              <div className="modal__buttons">
                <button
                  className="button2"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="button3"
                  onClick={() => {
                    let item = {
                      link: document.getElementById("url").value,
                      label: document.getElementById("label").value,
                      id: idCounter,
                    };
                    if (item.link.length > 0 && item.label.length > 0) {
                      dispatch(addImage(item));
                      idCounter++;
                      close();
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Header;
