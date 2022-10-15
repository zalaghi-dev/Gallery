import React, { useContext } from "react";
import Header from "./components/Header";
import Imgs from "./components/Imgs";
import ZoomImg from "./components/ZoomImg";
import Carousel from "./components/Carousel";
import { Loadinggrow } from "./components/Loadinggrow";
import { GalleryContext } from "./context/GlobalState";
const App = () => {
  const { isZoomed, isLoading, isCarousel } = useContext(GalleryContext);
  return (
    <>
      {isZoomed === "Nothing" ? "" : <ZoomImg />}

      <Header />

      {isLoading ? (
        <div className="w-100 h-100 d-flex align-items-center position-absolute text-center">
          <Loadinggrow />
        </div>
      ) : isCarousel ? (
        <Carousel />
      ) : (
        <Imgs />
      )}
    </>
  );
};

export default App;
