import React from "react"
import "./index.scss"
import leftArrow from "../../assets/images/left-arrow.svg"
import rightArrow from "../../assets/images/right-arrow.svg"

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      type="button"
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="arrows" />
    </button>
  )
}
