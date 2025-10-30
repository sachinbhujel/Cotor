"use client";

import React, { useState } from "react";

function FontFamily({
  setTextFamilyData,
  textFamilyClick,
  setTextFamilyClick,
}) {
  const [sansSerifMore, setSansSerifMore] = useState(false);
  const [serifMore, setSerifMore] = useState(false);
  return (
    <div className="flex flex-col gap-6 py-1">
      <div>
        <input
          type="text"
          placeholder="Search font"
          className="border bg-white rounded-sm outline-none w-full p-2"
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base text-white">Sans-Serif</p>
            <div
              className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                sansSerifMore ? "text-[#bbbbbb]" : ""
              }`}
              onClick={() => setSansSerifMore(!sansSerifMore)}
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
              sansSerifMore ? "h-60" : ""
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
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Roboto");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Roboto</p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Open Sans");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">
                    Open Sans
                  </p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Lato");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Lato" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Lato</p>
                </div>
              </div>

              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Montserrat");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">
                    Montserrat
                  </p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Poppins");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Poppins</p>
                </div>
              </div>
            </div>
            {sansSerifMore && (
              <div className="grid grid-cols-3 gap-2 text-white">
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Raleway");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Raleway
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Nunito");
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Nunito" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Nunito
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Source Sans Pro");
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Source Sans Pro" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Source Sans
                    </p>
                  </div>
                </div>

                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Ubuntu");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Ubuntu" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Ubuntu
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Work Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Work Sans
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Oxygen");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Oxygen" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Oxygen
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Mulish");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Mulish" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Mulish
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Quicksand");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Quicksand
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Exo 2");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Exo 2" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">Exo 2</p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Fira Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Fira Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Fira Sans
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Josefin Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Josefin Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Josefin Sans
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base text-white">Serif</p>
            <div
              className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                serifMore ? "text-[#bbbbbb]" : ""
              }`}
              onClick={() => setSerifMore(!serifMore)}
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
              serifMore ? "h-60" : ""
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
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Roboto");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Roboto</p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Open Sans");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Open Sans" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">
                    Open Sans
                  </p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Lato");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Lato" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Lato</p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Montserrat");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">
                    Montserrat
                  </p>
                </div>
              </div>
              <div
                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                onClick={() => {
                  setTextFamilyClick(true);
                  setTextFamilyData("Poppins");
                }}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <h1
                    className="font-bold text-xl"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Text
                  </h1>
                  <p className="text-xs text-gray-300 fonr-semibold">Poppins</p>
                </div>
              </div>
            </div>
            {serifMore && (
              <div className="grid grid-cols-3 gap-2 text-white">
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Raleway");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Raleway
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Nunito");
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Nunito" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Nunito
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Source Sans Pro");
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Source Sans Pro" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Source Sans
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Ubuntu");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Ubuntu" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Ubuntu
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Work Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Work Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Work Sans
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Oxygen");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Oxygen" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Oxygen
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Mulish");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Mulish" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Mulish
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Quicksand");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Quicksand
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Exo 2");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Exo 2" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">Exo 2</p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Fira Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Fira Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Fira Sans
                    </p>
                  </div>
                </div>
                <div
                  className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextFamilyClick(true);
                    setTextFamilyData("Josefin Sans");
                  }}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <h1
                      className="font-bold text-xl"
                      style={{ fontFamily: "Josefin Sans" }}
                    >
                      Text
                    </h1>
                    <p className="text-xs text-gray-300 fonr-semibold">
                      Josefin Sans
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Advertisement Div */}
      {/* <div className="relative">
        <img src="/about-div-2-image.png" className="rounded-sm" />
        <div className="absolute bottom-0 w-full flex bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(87,199,133,1)_50%,rgba(237,221,83,1)_100%)] p-2 items-center justify-between">
          <p className="font-semibold text-base text-white">Visit Site</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-move-right-icon lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
      </div> */}
    </div>
  );
}

export default FontFamily;
