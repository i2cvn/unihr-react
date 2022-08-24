import React from "react";
import { Treebeard } from "react-treebeard";
import { treeStyle } from "./slideTreeStyle";
import { slideStructureData } from "./slideData";

function SlideStructureTree({}) {
  const onToggle = () => {};
  return (
    <Treebeard
      data={slideStructureData}
      onToggle={onToggle}
      style={treeStyle}
    />
  );
}
