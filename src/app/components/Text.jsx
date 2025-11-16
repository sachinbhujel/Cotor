"use client";

import React, { use, useEffect, useState } from "react";
import Input from "./Input";
import { titleData } from "@/data/textData";
import { titleMoreData } from "@/data/textData";
import { subTitleData } from "@/data/textData";
import { subTitleMoreData } from "@/data/textData";
import { paraData } from "@/data/textData";
import { paraMoreData } from "@/data/textData";
import { colorNames } from "@/data/colorData";
import FontSize from "./FontSize";
import { get, set } from "idb-keyval";

function Text({
    activeText,
    activeTextClick,
    fontSize,
    setFontSize,
    editIndex,
    setEditIndex,
    textareaTextValue,
    setTextareaTextValue,
    setText,
    textButtonClick,
    setElements,
    setBoldClick,
    setItalicClick,
    setUnderlineClick,
    setSpaceClick,
    setTextShadowClick,
    setTextColorClick,
    setElementsColorClick,
}) {
    const [activeSize, setActiveSize] = useState("base");
    const [activeStyle, setActiveStyle] = useState("");
    const [activeColor, setActiveColor] = useState(null);
    const [customDivClick, setCustomDivClick] = useState(false);
    const [customColorSelect, setCustomColorSelect] = useState(false);

    useEffect(() => {
        get("active style").then((active) => {
            setActiveStyle(active);
        })
        get("active font").then((active) => {
            setActiveSize(active);
        })
        get("active color").then((active) => {
            setActiveColor(active);
        })
        get("active custom click").then((active) => {
            setCustomColorSelect(active);
        })
    }, [])

    const handleFontColor = (color, index) => {
        setCustomColorSelect(false);
        setElementsColorClick(true);
        setTextColorClick(true);
        set("active color", index);
        set("active custom click", false);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    colorData: `${color}`,
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    colorData: `${color}`,
                };
            }
            return newTextData;
        });
        setElements((prev) => {
            const newTextData = [...prev];
            newTextData[prev.length - 1] = {
                ...newTextData[prev.length - 1],
                colorData: `${color}`,
            };
            return newTextData;
        });
    };

    const handleFontColorPicker = (e) => {
        setCustomColorSelect(true)
        setActiveColor(null);
        setTextColorClick(true);
        set("active color", e.target.value);
        set("active custom click", true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    colorData: `${e.target.value}`,
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    colorData: `${e.target.value}`,
                };
            }
            return newTextData;
        });
    };

    const handleTextBold = () => {
        setActiveStyle("bold");
        set("active style", "bold");
        setBoldClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    boldData: "font-bold",
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    boldData: "font-bold",
                };
            }
            return newTextData;
        });
    };

    const handleTextItalic = () => {
        setActiveStyle("italic");
        set("active style", "italic");
        setItalicClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    italicData: "italic",
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    italicData: "italic",
                };
            }
            return newTextData;
        });
    };

    const handleTextUnderline = () => {
        setActiveStyle("underline");
        set("active style", "underline");
        setUnderlineClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    underlineData: "underline",
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    underlineData: "underline",
                };
            }
            return newTextData;
        });
    };

    const handleTextSpace = () => {
        setActiveStyle("space");
        set("active style", "space");
        setSpaceClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    spaceData: "tracking-widest",
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    spaceData: "tracking-widest",
                };
            }
            return newTextData;
        });
    };

    const handleTextShadow = () => {
        setActiveStyle("shadow");
        set("active style", "shadow");
        setTextShadowClick(true);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    shadowData:
                        "text-3xl text-white [text-shadow:_-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black]",
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    shadowData:
                        "text-3xl text-white [text-shadow:_-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black]",
                };
            }
            return newTextData;
        });
    };

    const handleFontSize = (size, sizeName) => {
        setActiveSize(sizeName);
        setCustomDivClick(false);
        setFontSize(size);
        set("active font", sizeName);
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    size: size,
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    size: size,
                };
            }
            return newTextData;
        });
    }

    const handleCustomDiv = () => {
        setCustomDivClick(true);
        set("active font", "custom");
        setActiveSize("");
    }

    const handleCustomFont = (e) => {
        setFontSize(Number(e.target.value));
        setText((prev) => {
            const newTextData = [...prev];
            if (activeTextClick) {
                newTextData[activeText] = {
                    ...newTextData[activeText],
                    size: Number(e.target.value),
                };
            } else {
                newTextData[prev.length - 1] = {
                    ...newTextData[prev.length - 1],
                    size: Number(e.target.value),
                };
            }
            return newTextData;
        });
    };

    window.addEventListener("load", () => {
        const entries = performance.getEntriesByType("navigation");
        if (entries.length > 0 && entries[0].type === "reload") {
            console.log("User reloaded the page");
            set("active font", "");
            set("active style", "");
            set("active custom click", "");
            set("active color", "");
        }
    });


    return (
        <div>
            {textButtonClick && (
                <div className="flex flex-col gap-5 py-1">
                    <Input
                        editIndex={editIndex}
                        setEditIndex={setEditIndex}
                        textareaTextValue={textareaTextValue}
                        setTextareaTextValue={setTextareaTextValue}
                        setText={setText}
                    />
                    <div className="flex gap-5 flex-col">
                        {/* Font Size */}
                        <div className="text-white flex flex-col gap-1">
                            <p className="font-semibold">Font Size</p>
                            <div className="flex items-center gap-1.5 text-sm">
                                <p className={`rounded-md border py-1 px-2 w-8 flex justify-center cursor-pointer hover:bg-black active:bg-black ${activeSize === "sm" ? "bg-black text-white" : ""}`}
                                    onClick={() => {
                                        handleFontSize(12, "sm");
                                    }}>S</p>
                                <p className={`rounded-md border py-1 px-2 w-8 flex justify-center cursor-pointer hover:bg-black active:bg-black  ${activeSize === "base" ? "bg-black text-white" : ""}`}
                                    onClick={() => {
                                        handleFontSize(16, "base");
                                    }}>M</p>
                                <p className={`rounded-md border py-1 px-2 w-8 flex justify-center cursor-pointer hover:bg-black active:bg-black ${activeSize === "lg" ? "bg-black text-white" : ""}`}
                                    onClick={() => {
                                        handleFontSize(22, "lg");
                                    }}>L</p>
                                <p className={`rounded-md border py-1 px-2 w-8 flex justify-center cursor-pointer hover:bg-black active:bg-black ${activeSize === "xl" ? "bg-black text-white" : ""}`}
                                    onClick={() => {
                                        handleFontSize(28, "xl");
                                    }}>XL</p>
                                <p className={`rounded-md border py-1 px-2 w-8 flex justify-center cursor-pointer hover:bg-black active:bg-black ${activeSize === "2xl" ? "bg-black text-white" : ""}`}
                                    onClick={() => {
                                        handleFontSize(34, "2xl");
                                    }}>2XL</p>
                                {customDivClick ? (
                                    <input type="number" placeholder="size"
                                        value={fontSize}
                                        min="1"
                                        max="199"
                                        className="rounded-md border py-1 px-2 w-17 flex justify-center cursor-pointer"
                                        onChange={(e) => {
                                            handleCustomFont(e);
                                        }
                                        } />
                                ) : (
                                    <p className={`rounded-md border py-1 px-2 w-max flex justify-center cursor-pointer ${activeSize === "custom" ? "bg-black text-white" : ""}`} onClick={handleCustomDiv}>Custom</p>
                                )}
                            </div>
                        </div>

                        {/* Text Color */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-base text-white">
                                        Font Color
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-1">
                                    {colorNames.map((name, index) => {
                                        return (
                                            <div
                                                key={index}
                                                style={{ background: name.color }}
                                                className={`w-6 h-6 rounded-full cursor-pointer ${index === activeColor ? "border-2" : ""}`}
                                                onClick={() => {
                                                    handleFontColor(name.color, index);
                                                    setActiveColor(index);
                                                }
                                                }
                                            ></div>
                                        );
                                    })}
                                    <div className={`${customColorSelect ? "border-2 border-black" : ""} text-white flex text-sm rounded-full`}>
                                        <div className="relative inline-block h-[26px] flex items-center">
                                            <input
                                                type="color"
                                                id="color-input"
                                                className="rounded-full w-[26px] h-[26px]"
                                                onChange={handleFontColorPicker}
                                            />
                                            <div className="absolute w-[26px] h-[26px] inset-0 flex items-center justify-center pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pipette-icon lucide-pipette"><path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" /><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" /><path d="m2 22 .414-.414" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Styles & alignments */}
                        <div className="flex flex-col gap-1 text-base font-semibold">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-base text-white">
                                    Styles & alignments
                                </p>
                            </div>
                            <div
                                className="flex flex-col gap-2"
                            >
                                <div className="grid grid-cols-3 gap-2 text-white">
                                    <div
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "none" ? "bg-red-600" : ""}`}
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
                                            setActiveStyle("none");
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
                                            className={`${activeStyle === "none" ? "text-white" : "text-red-500"} lucide lucide-ban-icon lucide-ban`}
                                        >
                                            <path d="M4.929 4.929 19.07 19.071" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    </div>
                                    <div
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "bold" ? "bg-black" : ""}`}
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
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "italic" ? "bg-black" : ""}`}
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
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "underline" ? "bg-black" : ""}`}
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
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "space" ? "bg-black" : ""}`}
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
                                        className={`h-18 bg-[#3c3d3f] rounded-sm text-white flex flex-col gap-2 justify-center items-center p-2 cursor-pointer ${activeStyle === "shadow" ? "bg-black" : ""}`}
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Text;
