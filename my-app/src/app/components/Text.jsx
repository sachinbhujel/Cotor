import React from "react";
import Input from "./Input";

function Text({ setText, textButtonClick }) {
  return (
    <div className="">
      {textButtonClick && (
        <Input setText={setText} />
      )}
    </div>
  );
}

export default Text;
