import React, { useContext, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GalleryContext } from '../context/GlobalState';
const Carousel = () => {
  const {isZoomed,setisZoomed,pictures}=useContext(GalleryContext)
  const [whichPic, setwhichPic] = useState(1);
  return (
    <div className={`col-12 col-sm-10 col-md-8 col-lg-6 position-relative mt-2 m-auto ${isZoomed==="Nothing"?"":"visually-hidden"}`} >
      <div style={{top:20,left:20}} className="text-secondary fw-bold position-absolute zindex-fixed">
        {whichPic + "/" + pictures.length}
      </div>
      <IoIosArrowForward onClick={()=>{whichPic===pictures.length?setwhichPic(1):setwhichPic(prev=>prev+1)}} className="position-absolute zindex-fixed text-secondary display-3 top-50 end-0" />
      <IoIosArrowBack onClick={()=>{whichPic===1?setwhichPic(pictures.length):setwhichPic(prev=>prev-1)}} className="position-absolute zindex-fixed text-secondary display-3 top-50 " />
      <LazyLoadImage
      style={{userSelect: "none"}}
      onClick={()=>setisZoomed(pictures[whichPic-1])}
        className="img-fluid rounded-5 "
        src={pictures[whichPic - 1].urls.regular}
        alt=""
      />
    </div>
  );
};

export default Carousel;
