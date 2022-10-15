import { useState } from "react";
import React from "react";
import useAxios from "../hooks/useAxios"
import { createContext } from "react";
export const GlobalState = ({children}) => {
  const { response, isLoading, error, fetchData } = useAxios(
    `photos/random?client_id=${process.env.REACT_APP_ACCESS_KEY}&orientation=landscape&count=30`
    );
    const [isZoomed, setisZoomed] = useState("Nothing");
    const [isCarousel, setisCarousel] = useState(false);
    
    return (
      
      <GalleryContext.Provider
      value={{
        setisZoomed,
        isZoomed,
        isCarousel,
        setisCarousel,
        pictures: response,
        isLoading,
      }}
      >
      {children}
    </GalleryContext.Provider>
  );
};


export const GalleryContext = createContext({
    setisZoomed: () => {},
    isZoomed: "Nothing",
    isCarousel: false,
    setisCarousel: () => {},
    pictures: {},
    isLoading:false,
  });