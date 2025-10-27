import React from "react";

function Input({ setText }) {
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          type="text"
          rows={5}
          className="p-2 w-full border outline-none resize-none custom-scrollbar"
          placeholder="Enter your text"
          onChange={handleText}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        ></textarea>
        <button className="border w-full p-2">Add Text</button>
      </form>
    </div>
  );
}

export default Input;
