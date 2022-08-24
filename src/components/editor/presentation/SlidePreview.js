import React from "react";

function SlidePreview({ item, setSelectedItem, selectedItem }) {
  const { fileName, fileType = "doc" } = item || {};
  return fileName ? (
    <div>
      <img
        src={`https://via.placeholder.com/180x100?text=${fileType}`}
        alt="Slide Preview"
      />
    </div>
  ) : (
    <div></div>
  );
}
