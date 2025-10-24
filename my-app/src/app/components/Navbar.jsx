import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
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
          className="text-primary lucide lucide-blinds-icon lucide-blinds"
        >
          <path d="M3 3h18" />
          <path d="M20 7H8" />
          <path d="M20 11H8" />
          <path d="M10 19h10" />
          <path d="M8 15h12" />
          <path d="M4 3v14" />
          <circle cx="4" cy="19" r="2" />
        </svg>
        <h1 className="text-background">StoryEdit</h1>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <p className="border-2 rounded-full px-5 py-1 border-primary text-background">
          Help
        </p>
        <p className="border-2 rounded-full px-5 py-1 border-primary text-background">
          Faq
        </p>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-background lucide lucide-github-icon lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg> */}
      </div>
    </div>
  );
}

export default Navbar;
