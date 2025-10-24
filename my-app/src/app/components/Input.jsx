import React from "react";

function Input({ setText }) {
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        type="text"
        className="p-2 w-full outline-none"
        onChange={handleText}
      ></textarea>
    </div>
  );
}

export default Input;
