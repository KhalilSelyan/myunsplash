import "./App.css";
import Header from "./components/header/header.component";
import PreviewLayout from "./components/previewlayout/previewlayout.component";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
//import { addImage } from "./redux/image/image.actions";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const images = JSON.parse(localStorage.getItem("images"));
  //   console.log(images);
  //   if (images) {
  //     dispatch(addImage(images));
  //   }
  // });
  return (
    <div className="App">
      <div>
        <Header />
        <PreviewLayout />
      </div>
    </div>
  );
}

export default App;
