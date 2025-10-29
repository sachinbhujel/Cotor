"use client";
import React, { useState } from "react";

function Elements() {
  const [ideaDivShow, setIdeaDivShow] = useState(false);

  const handleIdeaDiv = () => {
    setIdeaDivShow(!ideaDivShow);
  };

  return (
    <div className="relative flex flex-col gap-4 py-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-semibold text-white">Elements</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleIdeaDiv}
            className="text-[#9098a7] lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#9098a7] lucide lucide-grid3x3-icon lucide-grid-3x3"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
            <path d="M9 3v18" />
            <path d="M15 3v18" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Search font"
            className="border bg-white rounded-sm outline-none w-full p-2"
          />
          <button className="font-semibold text-sm bg-blue-600 rounded-sm text-white w-full p-2 flex justify-center items-center gap-2">
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
              className="lucide lucide-cloud-upload-icon lucide-cloud-upload"
            >
              <path d="M12 13v8" />
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="m8 17 4-4 4 4" />
            </svg>
            Add your images as elements
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-base text-white">Shapes</p>
              <div className="flex items-center text-[#838383]">
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
            <div className="flex items-center gap-2 flex-wrap">
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-circle-icon lucide-circle"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-square-icon lucide-square"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className=" w-[90%] h-[80%] text-white lucide lucide-triangle-icon lucide-triangle"
                >
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-rectangle-horizontal-icon lucide-rectangle-horizontal"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white  lucide lucide-club-icon lucide-club"
                >
                  <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
                  <path d="M12 17.66L12 22" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white  lucide lucide-cylinder-icon lucide-cylinder"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-heart-icon lucide-heart"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white  lucide lucide-diameter-icon lucide-diameter"
                >
                  <circle cx="19" cy="19" r="2" />
                  <circle cx="5" cy="5" r="2" />
                  <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
                  <path d="m6.41 6.41 11.18 11.18" />
                  <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-diamond-icon lucide-diamond"
                >
                  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-hexagon-icon lucide-hexagon"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-octagon-icon lucide-octagon"
                >
                  <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
                </svg>
              </div>
              <div className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center">
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
                  className="w-[90%] h-[80%] text-white lucide lucide-pentagon-icon lucide-pentagon"
                >
                  <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ideaDivShow && (
        <div className="absolute top-8 bg-white p-4 border flex flex-col gap-4">
          <img src="about-div-3-image.png" />
          <div className="flex flex-col gap-2">
            <p className="font-bold">How it works</p>
            <div className="flex flex-col gap-1 text-sm font-200 tracking-wide leading-normal">
              <p>30000+ stickers and elements for you to unleash creativity;</p>
              <p>You can search keywords to find a proper one;</p>
              <p>
                Or just make your own stickers by uploading an image and
                removing its background.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <p
              className="cursor-pointer bg-blue-500 text-white w-max py-1 px-3 rounded-sm"
              onClick={() => setIdeaDivShow(false)}
            >
              Got it
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Elements;
