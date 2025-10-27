"use client";

import Color from "../components/Color";
import Effects from "../components/Effects";
import Elements from "../components/Elements";
import FontFamily from "../components/FontFamily";
import FontSize from "../components/FontSize";
import More from "../components/More";
import Text from "../components/Text";
import Uploads from "../components/Uploads";
import React, { useEffect, useState } from "react";

export default function Edit() {
  const [textDivShow, setTextDivShow] = useState(true);
  const [fontFamilyDivShow, setFontFamilyDivShow] = useState(false);
  const [textEffectsDivShow, setTextEffectsDivShow] = useState(false);
  const [fontSizeDivShow, setFontSizeDivShow] = useState(false);
  const [elementsDivShow, setElementsDivShow] = useState(false);
  const [textColorDivShow, setTextColorDivShow] = useState(false);
  const [uploadsDivShow, setUploadsDivShow] = useState(false);
  const [moreDivShow, setMoreDivShow] = useState(false);
  const [image, setImage] = useState(null);

  const [text, setText] = useState("");
  const [textButtonClick, setTextButtonClick] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      localStorage.setItem("upload-image", URL.createObjectURL(file));
    }
  };

  const handleShowText = () => {
    setTextDivShow(true);
    setFontFamilyDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowFontFamily = () => {
    setTextDivShow(false);
    setFontFamilyDivShow(true);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowTextEffects = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(true);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowFontSize = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(true);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowElements = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(true);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowTextColor = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(true);
    setUploadsDivShow(false);
    setMoreDivShow(false);
  };

  const handleShowUploads = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(true);
    setMoreDivShow(false);
  };

  const handleShowMore = () => {
    setFontFamilyDivShow(false);
    setTextDivShow(false);
    setTextEffectsDivShow(false);
    setFontSizeDivShow(false);
    setElementsDivShow(false);
    setTextColorDivShow(false);
    setUploadsDivShow(false);
    setMoreDivShow(true);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex border w-[30%]">
        <div className="flex w-[22%] flex-col gap-3 bg-red-300 h-screen">
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowText}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Add Text</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowFontFamily}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Font-Family</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowTextEffects}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Effects</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowFontSize}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Font Size</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowElements}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Elements</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowTextColor}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Color</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowUploads}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">Uploads</p>
          </div>
          <div
            className="cursor-pointer p-2 gap-1 flex flex-col items-center justify-center"
            onClick={handleShowMore}
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
              className="lucide lucide-type-icon lucide-type"
            >
              <path d="M12 4v16" />
              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
              <path d="M9 20h6" />
            </svg>
            <p className="text-xs text-center">More</p>
          </div>
        </div>
        <div className="p-2 w-[78%] bg-green-300">
          {textDivShow && (
            <Text setText={setText} textButtonClick={textButtonClick} />
          )}
          {fontFamilyDivShow && <FontFamily />}
          {textEffectsDivShow && <Effects />}
          {fontSizeDivShow && <FontSize />}
          {elementsDivShow && <Elements />}
          {textColorDivShow && <Color />}
          {uploadsDivShow && <Uploads />}
          {moreDivShow && <More />}
        </div>
      </div>
      <div className="bg-purple-200 w-[70%]">
        {image ? (
          <div className="relative flex justify-center items-center h-[100dvh]">
            <img
              src={image}
              alt="Uploaded"
              className="rounded-md object-cover w-[90%] h-[90%]"
            />
            {text && (
              <div className="absolute flex justify-center items-center">
                <div className="p-2 max-w-[80%] text-center break-words">
                  {text}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-[100dvh]">
            <label
              className="w-[90%] h-[90%] border-2 rounded-md border-dashed p-4
             flex items-center justify-center flex-col gap-3 cursor-pointer"
            >
              <div className="flex flex-col justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-image-up-icon lucide-image-up"
                >
                  <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                  <path d="m14 19.5 3-3 3 3" />
                  <path d="M17 22v-5.5" />
                  <circle cx="9" cy="9" r="2" />
                </svg>
                <h2 className="text-xl font-bold text-center">
                  Upload your own image here
                </h2>
                <p className="opacity-75">Supports JPG, PNG etc</p>
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              <div className="text-base px-6 py-2 rounded-full flex items-center bg-white gap-4">
                <span>Upload image</span>
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
                  className="lucide lucide-chevron-down-icon lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-5 h-130 justify-around">
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
  <div
    className="flex flex-col gap-2 text-base font-semibold"
    onClick={handleTextButton}
  >
    <label className="text-background">Tools</label>
  </div>
  <div className="flex flex-col gap-2 text-base font-semibold">
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
  </div>
  <div className="flex flex-col gap-2 text-base font-semibold">
    <label className="text-background">Font Size</label>
    <input
      type="number"
      className="text-accent border border-background p-2 outline"
      value={fontSize}
      onChange={handleFontSize}
    />
  </div>
  <div className="flex flex-col gap-2 text-base font-semibold">
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
      </div> */
}
// </div>
{
  /* <input
      type="color"
      id="color-input"
      className="w-full"
      onChange={handleFontColor}
    />
  </div>
  <div className="flex flex-col gap-2 text-base font-semibold">
    <label className="text-background">Styles & Alignment</label>
    <div className="border border-primary text-background flex items-center justify-between">
      <div
        className="border p-2 cursor-pointer"
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
</div> */
}
