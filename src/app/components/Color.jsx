"use client";

import React, { useState } from "react";
import { colorNames } from "@/data/colorData";

function Color({
    text,
    setText,
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
    setTextColorClick,
}) {
    const [colorsMore, setColorsMore] = useState(false);
    const [toolsMore, setToolsMore] = useState(false);

    const handleFontColor = (color) => {
        setTextColorClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                colorData: `${color}`,
            };
            return newTextData;
        });
    };

    const handleFontColorPicker = (e) => {
        setTextColorClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                colorData: `${e.target.value}`,
            };
            return newTextData;
        });
    };

    const handleColorPicker = () => {
        document.getElementById("color-input").click();
    };

    const handleTextBold = () => {
        setBoldClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                boldData: "font-bold",
            };
            return newTextData;
        });
    };

    const handleTextItalic = () => {
        setItalicClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                italicData: "italic",
            };
            return newTextData;
        });
    };

    const handleTextUnderline = () => {
        setUnderlineClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                underlineData: "underline",
            };
            return newTextData;
        });
    };

    const handleTextSpace = () => {
        setSpaceClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                spaceData: "tracking-widest",
            };
            return newTextData;
        });
    };

    const handleTextShadow = () => {
        setTextShadowClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                shadowData:
                    "text-3xl font-bold -[-webkittext-stroke:2px_black] [-webkit-text-fill-color:transparent]",
            };
            return newTextData;
        });
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="relative">
                <div className="rounded-sm bg-red-400 h-50"></div>
                <div className="absolute bottom-0 w-full flex bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(253,29,29,1)_50%,rgba(252,176,69,1)_100%)] p-2 items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Visit Site
                    </p>
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
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                colorsMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setColorsMore(!colorsMore)}
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
                    <div className="flex flex-wrap items-center gap-2">
                        {colorNames.map((name, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`w-6 bg-[${name.color}] h-6 rounded-full cursor-pointer`}
                                    onClick={() =>
                                        handleFontColor(`${name.color}`)
                                    }
                                ></div>
                            );
                        })}
                        <div className="bg-black text-white rounded-full p-0.5">
                            <div
                                className="w-5 h-5 flex justify-center items-center cursor-pointer"
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
                            onChange={handleFontColorPicker}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-base font-semibold">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Styles & alignments
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                toolsMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setToolsMore(!toolsMore)}
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
                            toolsMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setText((prev) => {
                                        const newTextData = [...prev];
                                        newTextData[prev.length - 1] = {
                                            ...newTextData[prev.length - 1],
                                            colorData: "",
                                            boldData: "",
                                            italicData: "",
                                            underlineData: "",
                                            spaceData: "",
                                            shadowData: "",
                                        };
                                        return newTextData;
                                    });
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
                                className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"
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
                                <p className="text-xs text-gray-300 text-center">
                                    Bold
                                </p>
                            </div>
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"
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
                                <p className="text-xs text-gray-300 text-center">
                                    Italic
                                </p>
                            </div>
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"
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
                                <p className="text-xs text-gray-300 text-center">
                                    Underline
                                </p>
                            </div>
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"
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
                                <p className="text-xs text-gray-300 text-center">
                                    Space
                                </p>
                            </div>
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer"
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
                                <p className="text-xs text-gray-300 text-center">
                                    Outline
                                </p>
                            </div>
                        </div>

                        {toolsMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                <div className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer">
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
                                    <p className="text-xs text-gray-300 text-center">
                                        Start
                                    </p>
                                </div>
                                <div className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer">
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
                                    <p className="text-xs text-gray-300 text-center">
                                        Center
                                    </p>
                                </div>
                                <div className="h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer">
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
                                    <p className="text-xs text-gray-300 text-center">
                                        End
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Color;
