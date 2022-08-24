import React from "react";

export function SlideRow({ slide, setSelectedSlide, selectedSlide, index }) {
  const { fileName, fileType = "doc" } = slide;
  return (
    <div
      onClick={(evt) => {
        setSelectedSlide(slide);
      }}
      style={{
        textAlign: "center",
        border: selectedSlide === slide ? "1px solid orange" : "",
        padding: "4px"
      }}
    >
      {fileType === "slide" && (
        <img
          src={`https://via.placeholder.com/180x100?text=${fileType}`}
          alt="Slide"
        />
      )}
      <div
        style={{ position: "absolute", left: "40px", top: "20px", zIndex: 10 }}
      >
        <h5>{index + 1}</h5>
      </div>
    </div>
  );
}
