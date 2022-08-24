import React, { useState } from "react";

import BasicLayout from "../../components/layout/BasicLayout";
import FoldersView from "../../components/folders/FoldersView";
import { FaSortAlphaDown, FaList, FaFile } from "react-icons/fa";

export default function FolderPage({}) {
  return (
    <BasicLayout>
      <FoldersView />
    </BasicLayout>
  );
}
