import React from "react";

function Navbar() {
  return (
    <div className="border flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-blinds-icon lucide-blinds"
        >
          <path d="M3 3h18" />
          <path d="M20 7H8" />
          <path d="M20 11H8" />
          <path d="M10 19h10" />
          <path d="M8 15h12" />
          <path d="M4 3v14" />
          <circle cx="4" cy="19" r="2" />
        </svg>
        <h1>StoryEdit</h1>
      </div>
      <div className="flex items-center gap-4">
        <p className="border py-1 px-3">Hello</p>
        <p className="border py-1 px-3">Hello</p>
        <p className="border py-1 px-3">Hello</p>
      </div>
    </div>
  );
}

export default Navbar;
