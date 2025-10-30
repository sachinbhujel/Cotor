import React from "react";

function Input({ textareaTextValue, setTextareaTextValue, setText }) {
  const handleText = (e) => {
    setTextareaTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText((prev) => [...prev, textareaTextValue]);
    setTextareaTextValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          type="text"
          rows={5}
          value={textareaTextValue}
          className="p-2 w-full border bg-white outline-none resize-none textarea-scrollbar"
          placeholder="Enter your text"
          onChange={handleText}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        ></textarea>
        <button className="font-semibold bg-blue-600 rounded-sm text-white w-full p-2 flex justify-center items-center gap-2 hover:bg-blue-700 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus-icon lucide-plus"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Add Text
        </button>
      </form>
    </div>
  );
}

export default Input;
