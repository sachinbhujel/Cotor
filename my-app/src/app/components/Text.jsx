import React from "react";
import Input from "./Input";

function Text({
  setText,
  textButtonClick,
  setTextEditData,
  setTextEditClick,
  textEditClick,
}) {
  return (
    <div>
      {textButtonClick && (
        <div className="flex flex-col gap-6 py-1">
          <Input setText={setText} />
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-base text-white">Title</p>
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
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(false);
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
                  className="h-18 rounded-sm w-[30%] bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl uppercase text-white");
                  }}
                >
                  <h1 className="font-bold text-xl uppercase text-white">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData(
                      "font-bold text-xl bg-black text-white uppercase"
                    );
                  }}
                >
                  <h1 className="font-bold text-xl bg-black text-white uppercase">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl bg-green-600 uppercase");
                  }}
                >
                  <h1 className="font-bold text-xl bg-green-600 uppercase">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData(
                      "font-bold text-xl bg-pink-600 px-1 text-white uppercase"
                    );
                  }}
                >
                  <h1 className="font-bold text-xl bg-pink-600 px-1 text-white uppercase">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData(
                      "font-bold text-xl bg-blue-600 text-white uppercase"
                    );
                  }}
                >
                  <h1 className="font-bold text-xl bg-blue-600 text-white uppercase">
                    Text
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-base text-white">Subtitle</p>
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
              <div className="flex flex-wrap items-center gap-2">
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(false);
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
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl text-white");
                  }}
                >
                  <h1 className="font-bold text-xl text-white">Text</h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl bg-black text-white");
                  }}
                >
                  <h1 className="font-bold text-xl bg-black text-white">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl bg-yellow-300");
                  }}
                >
                  <h1 className="font-bold text-xl bg-yellow-300">Text</h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData("font-bold text-xl bg-red-600 text-white");
                  }}
                >
                  <h1 className="font-bold text-xl bg-red-600 text-white">
                    Text
                  </h1>
                </div>
                <div
                  className="h-18 w-[30%] bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    setTextEditClick(true);
                    setTextEditData(
                      "font-bold text-xl bg-orange-600 text-white"
                    );
                  }}
                >
                  <h1 className="font-bold text-xl bg-orange-600 text-white">
                    Text
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Text;
