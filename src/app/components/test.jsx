import React from "react";

function Test() {
  return (
    <div>
      <div className="flex gap-5 h-130 justify-around">
        <div className="overflow-auto relative w-[60%]">
          <div>
            <div>
              {text && (
                <div
                  className="absolute top-1/2 w-full p-2"
                  style={{
                    fontSize: `${fontSize}px`,
                    fontFamily: italicClick ? "monospace" : `${fontFamily}`,
                    color: `${fontColor}`,
                  }}
                >
                  <div
                    onMouseDown={handleMouseDown}
                    style={{
                      backgroundColor: `${fontBg}`,
                      position: "absolute",
                      cursor: isDraggable ? "grabbing" : "grab",
                      left: `${position.x}px`,
                      top: `${position.y}px`,
                      fontWeight: boldClick ? "bold" : "normal",
                      textDecoration: underlineClick ? "underline" : "none",
                      letterSpacing: spaceClick ? "8px" : "0px",
                      textShadow: textShadowClick ? "1.5px 1.5px white" : "",
                    }}
                    className="p-2 w-max"
                  >
                    {text}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-background w-[40%] h-120 p-2 flex flex-col gap-5 overflow-auto custom-scrollbar">
        {/* <div
          className="flex flex-col gap-2 text-base font-semibold"
          onClick={handleTextButton}
        >
          <label className="text-background">Tools</label>
        </div> */}

        {/* <div className="flex flex-col gap-2 text-base font-semibold">
          <label className="text-background">Font Family</label>
          <div className="relative inline-block border border-background">
            <select
              className="p-2 text-primary outline-none text-sm cursor-pointer appearance-none w-full"
              onChange={handleFontFamily}
            >
              <option value="Arial">Arial</option>
              <option value="Verdana">Verdana</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="monospace">Monospace</option>
              <option value="cursive">Cursive</option>
              <option value="fantasy">Fantasy</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Lucida Console">Lucida Console</option>
              <option value="Times New Roman">Times New Roman</option>
            </select>
            <span className="text-sm text-accent absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
              ▼
            </span>
          </div>
        </div> */}

        {/* <div className="flex flex-col gap-2 text-base font-semibold">
          <label className="text-background">Font Size</label>
          <input
            type="number"
            className="text-accent border border-background p-2 outline"
            value={fontSize}
            onChange={handleFontSize}
          />
        </div> */}

        {/* <div className="flex flex-col gap-2 text-base font-semibold">
          <label className="text-background">Text Color</label>
          <div className="relative flex items-center gap-2">
            <div
              className="w-5 bg-[#ff0000] h-5 rounded-full"
              onClick={() => setFontColor("#ff0000")}
            ></div>
            <div
              className="w-5 bg-[#2f27ce] h-5 rounded-full"
              onClick={() => setFontColor("#2f27ce")}
            ></div>
            <div
              className="w-5 bg-[#d42f77] h-5 rounded-full"
              onClick={() => setFontColor("#d42f77")}
            ></div>
            <div
              className="w-5 bg-[#60aeff] h-5 rounded-full"
              onClick={() => setFontColor("#60aeff")}
            ></div>
            <div
              className="w-5 bg-[#ffe500] h-5 rounded-full"
              onClick={() => setFontColor("#ffe500")}
            ></div>
            <div
              className="w-5 bg-[#ff7f00] h-5 rounded-full"
              onClick={() => setFontColor("#ff7f00")}
            ></div>
            <div
              className="w-5 bg-[#90ff00] h-5 rounded-full"
              onClick={() => setFontColor("#90ff00")}
            ></div>
            <div
              className="w-5 bg-[#4c00ff] h-5 rounded-full"
              onClick={() => setFontColor("#4c00ff")}
            ></div>
            <div
              className="w-5 bg-[#00fbff] h-5 rounded-full"
              onClick={() => setFontColor("#00fbff")}
            ></div>
            <div className="bg-black text-white rounded-full">
              <div
                className="w-5 h-5 flex justify-center items-center"
                onClick={handleColorPicker}
              >
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
                  className="lucide lucide-plus-icon lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
            </div>
          </div>
          <input
            type="color"
            id="color-input"
            className="w-full"
            onChange={handleFontColor}
          />
        </div> */}

        <div className="flex flex-col gap-2 text-base font-semibold">
          <label className="text-background">Styles & Alignment</label>
          <div className="border border-primary text-background flex items-center justify-between">
            <div className="border p-2 cursor-pointer" onClick={handleTextBold}>
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
                className="lucide lucide-bold-icon lucide-bold"
              >
                <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
              </svg>
            </div>
            <div
              className="border p-2 cursor-pointer"
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
            </div>
            <div
              className="border p-2 cursor-pointer"
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
            </div>
            <div
              className="border p-2 cursor-pointer"
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
            </div>
            <div
              className="border p-2 cursor-pointer"
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
            </div>
          </div>
          <div className="border flex items-center justify-between">
            <div className="border p-2">
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
            </div>
            <div className="border p-2">
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
            </div>
            <div className="border p-2">
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
            </div>
            <div className="border p-2">
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
                className="lucide lucide-text-align-justify-icon lucide-text-align-justify"
              >
                <path d="M3 5h18" />
                <path d="M3 12h18" />
                <path d="M3 19h18" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-base font-semibold">
          <label>Background Color</label>
          <input type="color" className="w-full" onChange={handleFontBg} />
        </div>
      </div>
    </div>
  );
}

export default Test;
