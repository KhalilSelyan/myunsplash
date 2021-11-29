import { React, useState } from "react";
import "./previewlayout.styles.scss";
import Masonry from "@mui/lab/Masonry";
import { useSelector, useDispatch } from "react-redux";
import { removeImage } from "../../redux/image/image.actions";
const PreviewLayout = () => {
  const layout = useSelector((state) => state.image.imageList);
  const searchText = useSelector((state) => state.image.searchText);
  const dispatch = useDispatch();
  const [mouseIn, setMouseIn] = useState(null);

  // useEffect(() => {
  //   if (layout.length > 0) {
  //     localStorage.setItem("images", JSON.stringify(layout));
  //   }
  // }, [layout]);
  const mouseEntered = (index) => {
    setMouseIn(index);
    // document.getElementById(index).classList.add("image-info2");
  };
  const mouseLeft = (index) => {
    setMouseIn(null);
    // document.getElementById(index).classList.remove("image-info2");
  };
  return (
    <Masonry id="masonry" columns={3} spacing={3}>
      {searchText === ""
        ? layout.map((image, index) => {
            return (
              <div
                onMouseOver={() => mouseEntered(index)}
                onMouseOut={() => mouseLeft(index)}
                key={index}
                className="picture-container"
              >
                <img className="picture" src={image.link} key={index} alt="" />
                <div
                  className={`image-info ${
                    mouseIn === index ? "image-info2" : ""
                  }`}
                >
                  <span className="label1">{image.label}</span>
                  <button
                    className="delete-button"
                    onClick={() => {
                      dispatch(removeImage(layout, image));
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        : layout
            .filter((image) => {
              return image.label
                .toLowerCase()
                .includes(searchText.toLowerCase());
            })
            .map((image, index) => {
              return (
                <div
                  onMouseOver={() => mouseEntered(index)}
                  onMouseOut={() => mouseLeft(index)}
                  key={index}
                  className="picture-container"
                >
                  <img
                    className="picture"
                    src={image.link}
                    key={index}
                    alt=""
                  />
                  <div
                    className={`image-info ${
                      mouseIn === index ? "image-info2" : ""
                    }`}
                  >
                    <span className="label1">{image.label}</span>
                    <button
                      className="delete-button"
                      onClick={() => {
                        dispatch(removeImage(layout, image));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
    </Masonry>
  );
};

export default PreviewLayout;
