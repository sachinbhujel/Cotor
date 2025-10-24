import React from "react";

function Input({ setText, setTextButtonClick }) {
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextButtonClick(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          rows={3}
          className="p-2 w-full outline-none resize-none"
          onChange={handleText}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        ></textarea>
      </form>
    </div>
  );
}

export default Input;
