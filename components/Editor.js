import { ControlledEditor } from "@monaco-editor/react";

import React from "react";

const Editor = ({ value, language, width, height }) => {
  return (
    <div>
      <ControlledEditor
        height={height}
        width={width}
        value={value}
        language={language}
        theme="dark"
      />
    </div>
  );
};

export default Editor;
