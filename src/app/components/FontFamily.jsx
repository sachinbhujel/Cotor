"use client";

import React, { useState, useEffect } from "react";
import { sansSerifData } from "@/data/fontFamilyData";
import { sansSerifMoreData } from "@/data/fontFamilyData";
import { serifData } from "@/data/fontFamilyData";
import { serifMoreData } from "@/data/fontFamilyData";
import { decorativeData } from "@/data/fontFamilyData";
import { decorativeMoreData } from "@/data/fontFamilyData";
import { scriptData } from "@/data/fontFamilyData";
import { scriptMoreData } from "@/data/fontFamilyData";
import { monospaceData } from "@/data/fontFamilyData";
import { monospaceMoreData } from "@/data/fontFamilyData";
import { set, get } from "idb-keyval";

function FontFamily({
    activeTextClick,
    activeText,
    setText,
    text,
    textFamilyClick,
    setTextFamilyClick,
}) {
    const [sansSerifMore, setSansSerifMore] = useState(false);
    const [serifMore, setSerifMore] = useState(false);
    const [decorativeMore, setDecorativeMore] = useState(false);
    const [scriptMore, setScriptMore] = useState(false);
    const [monospaceMore, setMonospaceMore] = useState(false);
    const [activeFamilyName, setActiveFamilyName] = useState(null);

    const handleFontFamily = (name) => {
        setActiveFamilyName(name);
    };

    useEffect(() => {
        get("active family").then((active) => {
            setActiveFamilyName(active);
        })
    }, [])

    return (
        <div className="flex flex-col gap-6 py-1">
            <div>
                <input
                    type="text"
                    placeholder="Search font name"
                    className="border bg-white rounded-sm outline-none w-full p-2"
                />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Sans-Serif
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${sansSerifMore ? "text-[#bbbbbb]" : ""
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
                        className={`flex flex-col gap-2 ${sansSerifMore ? "h-60" : ""
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
                                            fontFamilyData: "",
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
                            {sansSerifData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                        onClick={() => {
                                            set("active family", font.name);
                                            setTextFamilyClick(true);
                                            handleFontFamily(font.name)
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                if (activeTextClick) {
                                                    newTextData[activeText] = {
                                                        ...newTextData[activeText],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                } else {
                                                    newTextData[prev.length - 1] = {
                                                        ...newTextData[prev.length - 1],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                }
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-0.5">
                                            <h1
                                                className="font-bold text-xl"
                                                style={{
                                                    fontFamily: `${font.name}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-xs text-gray-300 text-center">
                                                {font.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {sansSerifMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {sansSerifMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                            onClick={() => {
                                                set("active family", font.name);
                                                setTextFamilyClick(true);
                                                handleFontFamily(font.name)
                                                setText((prev) => {
                                                    const newTextData = [...prev];
                                                    if (activeTextClick) {
                                                        newTextData[activeText] = {
                                                            ...newTextData[activeText],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    } else {
                                                        newTextData[prev.length - 1] = {
                                                            ...newTextData[prev.length - 1],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    }
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1
                                                    className="font-bold text-xl"
                                                    style={{
                                                        fontFamily: `${font.name}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-xs text-gray-300 text-center">
                                                    {font.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Serif
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${serifMore ? "text-[#bbbbbb]" : ""
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
                        className={`flex flex-col gap-2 ${serifMore ? "h-60" : ""
                            } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setTextFamilyClick(true);
                                    setText((prev) => {
                                        const newTextData = [...prev];
                                        newTextData[prev.length - 1] = {
                                            ...newTextData[prev.length - 1],
                                            fontFamilyData: "",
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
                            {serifData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                        onClick={() => {
                                            set("active family", font.name);
                                            setTextFamilyClick(true);
                                            handleFontFamily(font.name)
                                            set("active family", font.name);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                if (activeTextClick) {
                                                    newTextData[activeText] = {
                                                        ...newTextData[activeText],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                } else {
                                                    newTextData[prev.length - 1] = {
                                                        ...newTextData[prev.length - 1],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                }
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-0.5">
                                            <h1
                                                className="font-bold text-xl"
                                                style={{
                                                    fontFamily: `${font.name}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-xs text-gray-300 text-center">
                                                {font.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {serifMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {serifMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                            onClick={() => {
                                                set("active family", font.name);
                                                setTextFamilyClick(true);
                                                handleFontFamily(font.name)
                                                setText((prev) => {
                                                    const newTextData = [...prev];
                                                    if (activeTextClick) {
                                                        newTextData[activeText] = {
                                                            ...newTextData[activeText],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    } else {
                                                        newTextData[prev.length - 1] = {
                                                            ...newTextData[prev.length - 1],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    }
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1
                                                    className="font-bold text-xl"
                                                    style={{
                                                        fontFamily: `${font.name}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-xs text-gray-300 text-center">
                                                    {font.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Decorative
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${decorativeMore ? "text-[#bbbbbb]" : ""
                                }`}
                            onClick={() => setDecorativeMore(!decorativeMore)}
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
                        className={`flex flex-col gap-2 ${decorativeMore ? "h-60" : ""
                            } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setTextFamilyClick(true);
                                    setText((prev) => {
                                        const newTextData = [...prev];
                                        newTextData[prev.length - 1] = {
                                            ...newTextData[prev.length - 1],
                                            fontFamilyData: "",
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
                            {decorativeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                        onClick={() => {
                                            set("active family", font.name);
                                            setTextFamilyClick(true);
                                            handleFontFamily(font.name)
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                if (activeTextClick) {
                                                    newTextData[activeText] = {
                                                        ...newTextData[activeText],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                } else {
                                                    newTextData[prev.length - 1] = {
                                                        ...newTextData[prev.length - 1],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                }
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-0.5">
                                            <h1
                                                className="font-bold text-xl"
                                                style={{
                                                    fontFamily: `${font.name}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-xs text-gray-300 text-center">
                                                {font.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {decorativeMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {decorativeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                            onClick={() => {
                                                set("active family", font.name);
                                                setTextFamilyClick(true);
                                                handleFontFamily(font.name)
                                                setText((prev) => {
                                                    const newTextData = [...prev];
                                                    if (activeTextClick) {
                                                        newTextData[activeText] = {
                                                            ...newTextData[activeText],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    } else {
                                                        newTextData[prev.length - 1] = {
                                                            ...newTextData[prev.length - 1],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    }
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1
                                                    className="font-bold text-xl"
                                                    style={{
                                                        fontFamily: `${font.name}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-xs text-gray-300 text-center">
                                                    {font.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Script
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${scriptMore ? "text-[#bbbbbb]" : ""
                                }`}
                            onClick={() => setScriptMore(!scriptMore)}
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
                        className={`flex flex-col gap-2 ${scriptMore ? "h-60" : ""
                            } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setTextFamilyClick(true);
                                    setText((prev) => {
                                        const newTextData = [...prev];
                                        newTextData[prev.length - 1] = {
                                            ...newTextData[prev.length - 1],
                                            fontFamilyData: "",
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
                            {scriptData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                        onClick={() => {
                                            set("active family", font.name);
                                            setTextFamilyClick(true);
                                            handleFontFamily(font.name)
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                if (activeTextClick) {
                                                    newTextData[activeText] = {
                                                        ...newTextData[activeText],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                } else {
                                                    newTextData[prev.length - 1] = {
                                                        ...newTextData[prev.length - 1],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                }
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-0.5">
                                            <h1
                                                className="font-bold text-xl"
                                                style={{
                                                    fontFamily: `${font.name}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-xs text-gray-300 text-center">
                                                {font.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {scriptMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {scriptMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                            onClick={() => {
                                                set("active family", font.name);
                                                setTextFamilyClick(true);
                                                handleFontFamily(font.name)
                                                setText((prev) => {
                                                    const newTextData = [...prev];
                                                    if (activeTextClick) {
                                                        newTextData[activeText] = {
                                                            ...newTextData[activeText],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    } else {
                                                        newTextData[prev.length - 1] = {
                                                            ...newTextData[prev.length - 1],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    }
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1
                                                    className="font-bold text-xl"
                                                    style={{
                                                        fontFamily: `${font.name}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-xs text-gray-300 text-center">
                                                    {font.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Monospace
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${monospaceMore ? "text-[#bbbbbb]" : ""
                                }`}
                            onClick={() => setMonospaceMore(!monospaceMore)}
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
                        className={`flex flex-col gap-2 ${monospaceMore ? "h-60" : ""
                            } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setTextFamilyClick(true);
                                    setText((prev) => {
                                        const newTextData = [...prev];
                                        newTextData[prev.length - 1] = {
                                            ...newTextData[prev.length - 1],
                                            fontFamilyData: "",
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
                            {monospaceData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                        onClick={() => {
                                            set("active family", font.name);
                                            setTextFamilyClick(true);
                                            handleFontFamily(font.name)
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                if (activeTextClick) {
                                                    newTextData[activeText] = {
                                                        ...newTextData[activeText],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                } else {
                                                    newTextData[prev.length - 1] = {
                                                        ...newTextData[prev.length - 1],
                                                        fontFamilyData: `${font.name}`,
                                                    };
                                                }
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <div className="flex flex-col items-center gap-0.5">
                                            <h1
                                                className="font-bold text-xl"
                                                style={{
                                                    fontFamily: `${font.name}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-xs text-gray-300 text-center">
                                                {font.name}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {monospaceMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {monospaceMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`${activeFamilyName === font.name ? "bg-black" : ""} h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer`}
                                            onClick={() => {
                                                set("active family", font.name);
                                                setTextFamilyClick(true);
                                                handleFontFamily(font.name)
                                                setText((prev) => {
                                                    const newTextData = [...prev];
                                                    if (activeTextClick) {
                                                        newTextData[activeText] = {
                                                            ...newTextData[activeText],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    } else {
                                                        newTextData[prev.length - 1] = {
                                                            ...newTextData[prev.length - 1],
                                                            fontFamilyData: `${font.name}`,
                                                        };
                                                    }
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <h1
                                                    className="font-bold text-xl"
                                                    style={{
                                                        fontFamily: `${font.name}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-xs text-gray-300 text-center">
                                                    {font.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Advertisement Div */}
            <div className="relative">
                <div className="rounded-sm bg-white h-50"></div>
                <a href="mailto:sachinbhujel.np@gmail.com">
                    <div className="absolute bottom-0 w-full flex bg-[linear-gradient(169deg,rgba(168,254,255,1)_24%,rgba(253,149,45,1)_100%)] p-2 items-center justify-between">
                        <p className="font-semibold text-base text-black">
                            Promote Site
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
                            className="lucide lucide-move-right-icon lucide-move-right"
                        >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default FontFamily;
