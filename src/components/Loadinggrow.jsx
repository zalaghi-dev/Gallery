import React from 'react'

export const Loadinggrow = () => {
  return (
    <div className="m-auto">
    <div
      className="spinner-grow text-light"
      style={{ width: "10rem", height: "10rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading</span>
    </div>
    <br/>
    <p className="fs-4 text-light p-1 fw-bold">Loading...</p>
  </div>
  )
}
