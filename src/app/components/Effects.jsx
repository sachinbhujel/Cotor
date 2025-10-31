"use client";

import React, { useState } from "react";

function Effects() {
  const [colorEffectsMore, setColorEffectsMore] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-2 py-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-base text-white">Color Effects</p>
          <div
            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
              colorEffectsMore ? "text-[#bbbbbb]" : ""
            }`}
            onClick={() => setColorEffectsMore(!colorEffectsMore)}
          >
            <p className="text-sm font-semibold">More</p>
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
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 ${
            colorEffectsMore ? "h-60" : ""
          } overflow-y-auto scrollbar`}
        >
          <div className="grid grid-cols-3 gap-2 text-white">
            <div
              className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500 lucide lucide-ban-icon lucide-ban"
              >
                <path d="M4.929 4.929 19.07 19.071" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="bg-[#3c3d3f] rounded-sm h-18 flex justify-center items-center">
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-green-300 bg-clip-text text-transparent">
                Text
              </h1>
            </div>
            <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
              <h1 className="font-bold text-xl text-cyan-400 drop-shadow-[0_0_10px_#0ff]">
                Text
              </h1>
            </div>
            <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
              <h1 className="font-bold text-xl text-white drop-shadow-[2px_2px_0_#ff00ff]">
                Text
              </h1>
            </div>
            <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
              <h1 className="text-xl font-extrabold text-white [text-shadow:1px_1px_0_#999,2px_2px_0_#777,3px_3px_0_#555]">
                Text
              </h1>
            </div>
          </div>
          {colorEffectsMore && (
            <div className="grid grid-cols-3 gap-2">
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-bold text-white drop-shadow-[2px_2px_0_#2f27ce] drop-shadow-[4px_4px_0_#555]">
                  Text
                </h1>
              </div>
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-extrabold text-white drop-shadow-[2px_2px_0_#f00] drop-shadow-[4px_4px_0_#00f]">
                  Text
                </h1>
              </div>
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-extrabold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Text
                </h1>
              </div>
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-bold text-white [text-shadow:inset_0_0_8px_#00f]">
                  Text
                </h1>
              </div>
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-extrabold text-gray-300 drop-shadow-[2px_2px_0_#999] drop-shadow-[-2px_-2px_0_#fff]">
                  Text
                </h1>
              </div>
              <div className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center">
                <h1 className="text-xl font-bold text-pink-500 drop-shadow-[1px_1px_#ff0] drop-shadow-[2px_2px_#0ff] drop-shadow-[2px_2px_#f0f]">
                  Text
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Effects;
