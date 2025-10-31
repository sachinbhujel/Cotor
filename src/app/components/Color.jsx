import React from "react";

function Color({
  setFontColor,
  boldClick,
  setBoldClick,
  italicClick,
  setItalicClick,
  underlineClick,
  setUnderlineClick,
  spaceClick,
  setSpaceClick,
  textShadowClick,
  setTextShadowClick,
}) {
  const handleFontColor = (e) => {
    setFontColor(e.target.value);
  };

  const handleColorPicker = () => {
    document.getElementById("color-input").click();
  };

  const handleTextBold = () => {
    setBoldClick(!boldClick);
  };

  const handleTextItalic = () => {
    setItalicClick(!italicClick);
  };

  const handleTextUnderline = () => {
    setUnderlineClick(!underlineClick);
  };

  const handleTextSpace = () => {
    setSpaceClick(!spaceClick);
  };

  const handleTextShadow = () => {
    setTextShadowClick(!textShadowClick);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <img src="/about-div-1-image.png" className="rounded-sm" />
        <div className="absolute bottom-0 w-full flex bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(253,29,29,1)_50%,rgba(252,176,69,1)_100%)] p-2 items-center justify-between">
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
            className="text-white lucide lucide-move-right-icon lucide-move-right"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base text-white">
              Suggested Colors
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
          <div className="relative flex flex-wrap items-center gap-2">
            <div
              className="w-6 bg-[#ff0000] h-6 rounded-full"
              onClick={() => setFontColor("#ff0000")}
            ></div>
            <div
              className="w-6 bg-[#2f27ce] h-6 rounded-full"
              onClick={() => setFontColor("#2f27ce")}
            ></div>
            <div
              className="w-6 bg-[#d42f77] h-6 rounded-full"
              onClick={() => setFontColor("#d42f77")}
            ></div>
            <div
              className="w-6 bg-[#60aeff] h-6 rounded-full"
              onClick={() => setFontColor("#60aeff")}
            ></div>
            <div
              className="w-6 bg-[#ffe500] h-6 rounded-full"
              onClick={() => setFontColor("#ffe500")}
            ></div>
            <div
              className="w-6 bg-[#ff7f00] h-6 rounded-full"
              onClick={() => setFontColor("#ff7f00")}
            ></div>
            <div
              className="w-6 bg-[#90ff00] h-6 rounded-full"
              onClick={() => setFontColor("#90ff00")}
            ></div>
            <div
              className="w-6 bg-[#4c00ff] h-6 rounded-full"
              onClick={() => setFontColor("#4c00ff")}
            ></div>
            <div
              className="w-6 bg-[#00fbff] h-6 rounded-full"
              onClick={() => setFontColor("#00fbff")}
            ></div>
            <div className="bg-black text-white rounded-full p-0.5">
              <div
                className="w-5 h-5 flex justify-center items-center"
                onClick={handleColorPicker}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
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
              </div>
            </div>
          </div>
          <div>
            <input
              hidden
              type="color"
              id="color-input"
              className="w-full"
              onChange={handleFontColor}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-base font-semibold">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base text-white">
              Styles & alignments
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
          <div className="flex items-center gap-2 flex-wrap">
            <div
              className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer"
              onClick={handleTextBold}
            >
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
                className="font-bold lucide lucide-bold-icon lucide-bold"
              >
                <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
              </svg>
              <p className="text-xs">Bold</p>
            </div>
            <div
              className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer"
              onClick={handleTextItalic}
            >
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
                className="lucide lucide-italic-icon lucide-italic"
              >
                <line x1="19" x2="10" y1="4" y2="4" />
                <line x1="14" x2="5" y1="20" y2="20" />
                <line x1="15" x2="9" y1="4" y2="20" />
              </svg>
              <p className="text-xs">Italic</p>
            </div>
            <div
              className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer"
              onClick={handleTextUnderline}
            >
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
                className="lucide lucide-underline-icon lucide-underline"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4" />
                <line x1="4" x2="20" y1="20" y2="20" />
              </svg>
              <p className="text-xs">Underline</p>
            </div>
            <div
              className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer"
              onClick={handleTextSpace}
            >
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
                className="lucide lucide-space-icon lucide-space"
              >
                <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
              </svg>
              <p className="text-xs">Space</p>
            </div>
            <div
              className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer"
              onClick={handleTextShadow}
            >
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
                className="lucide lucide-type-outline-icon lucide-type-outline"
              >
                <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
              </svg>
              <p className="text-xs">Outline</p>
            </div>
          </div>
          <div className="border flex items-center gap-2 flex-wrap">
            <div className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer">
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
                className="lucide lucide-text-align-start-icon lucide-text-align-start"
              >
                <path d="M21 5H3" />
                <path d="M15 12H3" />
                <path d="M17 19H3" />
              </svg>
              <p className="text-xs">Start</p>
            </div>
            <div className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer">
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
                className="lucide lucide-text-align-center-icon lucide-text-align-center"
              >
                <path d="M21 5H3" />
                <path d="M17 12H7" />
                <path d="M19 19H5" />
              </svg>
              <p className="text-xs">Center</p>
            </div>
            <div className="w-[30%] h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col justify-center items-center p-2 cursor-pointer">
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
                className="lucide lucide-text-align-end-icon lucide-text-align-end"
              >
                <path d="M21 5H3" />
                <path d="M21 12H9" />
                <path d="M21 19H7" />
              </svg>
              <p className="text-xs">End</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Color;
