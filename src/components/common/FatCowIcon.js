import React from "react";

const cdnUrl =
  "https://cdnjs.cloudflare.com/ajax/libs/fatcow-icons/20130425/FatCow_Icons32x32/";

export default function FatCowIcon({
  iconName,
  icon,
  width = "32px",
  height = "32px"
}) {
  return (
    icon || (
      <img src={`${cdnUrl}/${iconName}.png`} width={width} height={height} />
    )
  );
}
