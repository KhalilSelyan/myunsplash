import { React } from "react";
import "./previewlayout.styles.scss";
import Masonry from "@mui/lab/Masonry";
import { useSelector } from "react-redux";
const PreviewLayout = () => {
  const layout = useSelector((state) => state.image.imageList);
  const searchText = useSelector((state) => state.image.searchText);

  return (
    <Masonry id="masonry" columns={3} spacing={1}>
      {searchText === ""
        ? layout.map((image, index) => {
            return (
              <img className="picture" src={image.link} key={index} alt="" />
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
                <img className="picture" src={image.link} key={index} alt="" />
              );
            })}
    </Masonry>
  );
};

export default PreviewLayout;
