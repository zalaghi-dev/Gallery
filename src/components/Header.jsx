import React,{useContext} from "react";
import { BiCarousel, BiGrid } from "react-icons/bi";
import { GalleryContext } from '../context/GlobalState';
 const Header=()=> {
  const {setisCarousel,isCarousel}=useContext(GalleryContext)
  return (
    <>
      <div className="p-3 bg-primary d-flex justify-content-between">
        <div className="display-5 text-light">Herny Allen Gallery</div>

        <div
        
          onClick={() => setisCarousel((prev) => !prev)}
          className="display-4 text-warning"
        >
          {isCarousel ? <BiCarousel /> : <BiGrid />}
        </div>
      </div>
    </>
  );
}
export default Header