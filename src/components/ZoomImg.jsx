import React,{useContext} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GalleryContext } from '../context/GlobalState';
const ZoomImg = () => {
  const {isZoomed,setisZoomed}=useContext(GalleryContext)
  return (
    <>
      <div
        style={{ zIndex: 5000 }}
        className="position-fixed opacity-75 w-100 h-100 bg-black"
      ></div>
      <div
        onClick={() => setisZoomed("Nothing")}
        className="w-100 h-100 d-flex flex-column justify-content-center position-absolute text-center "
        style={{ zIndex: 5001 }}
      >
        <LazyLoadImage
          effect="black-and-white"
          className="img-fluid col-12 col-md-6 border border-2 border-white rounded-5 "
          src={isZoomed.urls.full}
          alt=""
        />
        <div className="fs-6 fw-bold justify-content-between mx-auto col-12 col-md-6 flex-column flex-md-row d-flex text-white">
          <div>
            <span className="fs-5 text-secondary">Name:</span> <br />
            {isZoomed.user.name}
          </div>
          <div>
            <span className="fs-5 text-secondary">Created at:</span> <br />
            {isZoomed.created_at}
          </div>
          <div>
            <span className="fs-5 text-secondary">Views:</span> <br />
            {isZoomed.views}
          </div>
          <div>
            <span className="fs-5 text-secondary">Downloads:</span> <br />
            {isZoomed.downloads}
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomImg;
