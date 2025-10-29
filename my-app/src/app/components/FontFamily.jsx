import React from "react";

function FontFamily({
  setTextFamilyData,
  textFamilyClick,
  setTextFamilyClick,
}) {
  return (
    <div className="flex flex-col gap-6 py-1">
      <div>
        <input
          type="text"
          placeholder="Search font"
          className="border bg-white rounded-sm outline-none w-full p-2"
        />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base text-white">
              Suggested Fonts
            </p>
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
          <div className="flex items-center gap-2 flex-wrap text-white">
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
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
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Arial");
              }}
            >
              <h1 className="font-bold text-xl" style={{ fontFamily: "Arial" }}>
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Roboto");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Verdana");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Verdana" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Fjalla One");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Fjalla One" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Oswald");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Oswald" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Ubuntu");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Ubuntu" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Lora");
              }}
            >
              <h1 className="font-bold text-xl" style={{ fontFamily: "Lora" }}>
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Quicksand");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Quicksand" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Bebas Neue");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Bebas Neue" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Archivo Black");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Archivo Black" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Lobster Two");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Lobster Two" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Bitcount Grid Single");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Bitcount Grid Single" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Changa One");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Changa One" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Caveat");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Caveat" }}
              >
                Text
              </h1>
            </div>
            <div
              className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
              onClick={() => {
                setTextFamilyClick(true);
                setTextFamilyData("Shadows Into Light");
              }}
            >
              <h1
                className="font-bold text-xl"
                style={{ fontFamily: "Shadows Into Light" }}
              >
                Text
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
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
      </div>
    </div>
  );
}

export default FontFamily;
