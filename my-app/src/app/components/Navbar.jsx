import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center gap-1">
        <img src="/logo.png" className="w-10 h-10" />
        <h1 className="text-background font-semibold text-3xl">Cotor</h1>
      </div>
      <div className="flex items-center gap-4 text-xl text-white">
        <p className="border-2 rounded-full px-5 py-1 text-text">Help</p>
        <p className="border-2 rounded-full px-5 py-1 text-text">Faq</p>
      </div>
    </div>
  );
}

export default Navbar;
