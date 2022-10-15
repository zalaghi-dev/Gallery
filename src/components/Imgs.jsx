import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useContext, useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { GalleryContext } from '../context/GlobalState';
const Imgs = () => {
  const {isZoomed,setisZoomed,pictures}=useContext(GalleryContext)
  const [whichHovered, setwhichHovered] = useState();
  return (
    <>
      <div className={`row m-auto ${isZoomed==="Nothing"?"":"visually-hidden"} w-100`}>
        {pictures.map((picture) => (
          <div
            key={picture.id}
            onMouseEnter={() => setwhichHovered(picture.id)}
            onMouseLeave={() => setwhichHovered()}
            onClick={() => setisZoomed(picture)}
            className="col-12 p-1 col-sm-6 col-md-4 col-lg-3 col-xl-2 position-relative d-flex justify-content-center align-items-center"
          >
            {whichHovered === picture.id && (
              <div
                style={{ zIndex: 1 }}
                className="position-absolute w-100 text-center zindex-fixed"
              >
                <MdOutlineZoomOutMap className="fs-1 text-primary" />
              </div>
            )}

            <LazyLoadImage
              style={
                whichHovered === picture.id
                  ? { filter: "blur(4px)", }
                  : { filter: "blur(0px)" }
              }
              className="img-fluid rounded-5 d-block"
              src={`${picture.urls.thumb}`}
              alt="Henry Gallery Pic"
              effect="blur"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Imgs;
