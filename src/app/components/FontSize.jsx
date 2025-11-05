"use client";

import React, { useState } from "react";
import { sansSerifSizeData } from "@/data/fontSizeData";
import { sansSerifSizeMoreData } from "@/data/fontSizeData";
import { lobsterSizeData } from "@/data/fontSizeData";
import { lobsterSizeMoreData } from "@/data/fontSizeData";
import { patrickHandSizeData } from "@/data/fontSizeData";
import { patrickHandSizeMoreData } from "@/data/fontSizeData";
import { firaMonoSizeData } from "@/data/fontSizeData";
import { firaMonoSizeMoreData } from "@/data/fontSizeData";
import { courierPrimeSizeData } from "@/data/fontSizeData";
import { courierPrimeSizeMoreData } from "@/data/fontSizeData";
import { courgetteSizeData } from "@/data/fontSizeData";
import { courgetteSizeMoreData } from "@/data/fontSizeData";
import { cousineSizeData } from "@/data/fontSizeData";
import { cousineSizeMoreData } from "@/data/fontSizeData";
import { amaticSizeData } from "@/data/fontSizeData";
import { amaticSizeMoreData } from "@/data/fontSizeData";
import { arvoSizeData } from "@/data/fontSizeData";
import { arvoSizeMoreData } from "@/data/fontSizeData";
import { dancingScriptSizeData } from "@/data/fontSizeData";
import { dancingScriptSizeMoreData } from "@/data/fontSizeData";
import { rockSaltSizeData } from "@/data/fontSizeData";
import { rockSaltSizeMoreData } from "@/data/fontSizeData";
import { bitterSizeData } from "@/data/fontSizeData";
import { bitterSizeMoreData } from "@/data/fontSizeData";
import { oxygenSizeData } from "@/data/fontSizeData";
import { oxygenSizeMoreData } from "@/data/fontSizeData";

function FontSize({
    text,
    setText,
    fontSize,
    setFontSize,
    setTextFamilyClick,
    setFontSizeFamilyClick,
}) {
    const [sansSerifFontMore, setSansSerifFontMore] = useState(false);
    const [lobsterMore, setLobsterMore] = useState(false);
    const [patrickHandMore, setPatrickHandMore] = useState(false);
    const [firaMonoMore, setFiraMonoMore] = useState(false);
    const [courierPrimeMore, setCourierPrimeMore] = useState(false);
    const [courgetteMore, setCourgetteMore] = useState(false);
    const [cousineMore, setCousineMore] = useState(false);
    const [amaticMore, setAmaticMore] = useState(false);
    const [arvoMore, setArvoMore] = useState(false);
    const [dancingScriptMore, setDancingScriptMore] = useState(false);
    const [rockSaltMore, setRockSaltMore] = useState(false);
    const [bitterMore, setBitterMore] = useState(false);
    const [oxygenMore, setOxygenMore] = useState(false);

    return (
        <div className="flex flex-col gap-6 py-1">
            <div>
                <input
                    type="number"
                    className="border bg-white rounded-sm outline-none w-full p-2"
                    placeholder="Enter font size"
                />
            </div>
            <div className="flex items-center justify-between">
                <p className="font-semibold text-base text-white">
                    Suggested Sizes
                </p>
                <div className="flex items-center text-[#838383] cursor-pointer">
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
                        className="text-[#9098a7] lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            PT-Serif
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                lobsterMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setLobsterMore(!lobsterMore)}
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
                            lobsterMore ? "h-60" : ""
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
                                            fontSizeData: "",
                                            fontSizeFamilyData: "",
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
                            {lobsterSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {lobsterMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {lobsterSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Lobster
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                sansSerifFontMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() =>
                                setSansSerifFontMore(!sansSerifFontMore)
                            }
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
                            sansSerifFontMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {sansSerifSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {sansSerifFontMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {sansSerifSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Patrick Hand
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                patrickHandMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setPatrickHandMore(!patrickHandMore)}
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
                            patrickHandMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {patrickHandSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {patrickHandMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {patrickHandSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Fira Mono
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                firaMonoMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setFiraMonoMore(!firaMonoMore)}
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
                            firaMonoMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {firaMonoSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {firaMonoMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {firaMonoSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Courier Prime
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                courierPrimeMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() =>
                                setCourierPrimeMore(!courierPrimeMore)
                            }
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
                            courierPrimeMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {courierPrimeSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {courierPrimeMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {courierPrimeSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Courgette
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                courgetteMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setCourgetteMore(!courgetteMore)}
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
                            courgetteMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {courgetteSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {courgetteMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {courgetteSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Cousine
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                cousineMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setCousineMore(!cousineMore)}
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
                            cousineMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {cousineSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {cousineMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {cousineSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Amatic SC
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                amaticMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setAmaticMore(!amaticMore)}
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
                            amaticMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {amaticSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {amaticMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {amaticSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Arvo
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                arvoMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setArvoMore(!arvoMore)}
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
                            arvoMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {arvoSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {arvoMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {arvoSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Dancing Script
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                dancingScriptMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() =>
                                setDancingScriptMore(!dancingScriptMore)
                            }
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
                            dancingScriptMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {dancingScriptSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {dancingScriptMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {dancingScriptSizeMoreData.map(
                                    (font, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                                onClick={() => {
                                                    setFontSizeFamilyClick(
                                                        true
                                                    );
                                                    setText((prev) => {
                                                        const newTextData = [
                                                            ...prev,
                                                        ];
                                                        newTextData[
                                                            prev.length - 1
                                                        ] = {
                                                            ...newTextData[
                                                                prev.length - 1
                                                            ],
                                                            fontSizeData: `${font.size}`,
                                                            fontSizeFamilyData: `${font.fontFamily}`,
                                                            fontFamilyData: "",
                                                        };
                                                        return newTextData;
                                                    });
                                                }}
                                            >
                                                <h1
                                                    className={`font-bold ${font.size}`}
                                                    style={{
                                                        fontFamily: `${font.fontFamily}`,
                                                    }}
                                                >
                                                    Text
                                                </h1>
                                                <p className="text-gray-300 text-xs">
                                                    {font.size}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base text-white">
                            Rock Salt
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                rockSaltMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setRockSaltMore(!rockSaltMore)}
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
                            rockSaltMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {rockSaltSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {rockSaltMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {rockSaltSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Bitter
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                bitterMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setBitterMore(!bitterMore)}
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
                            bitterMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {bitterSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {bitterMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {bitterSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
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
                            Oxygen
                        </p>
                        <div
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                oxygenMore ? "text-[#bbbbbb]" : ""
                            }`}
                            onClick={() => setOxygenMore(!oxygenMore)}
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
                            oxygenMore ? "h-60" : ""
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
                                            fontSizeData: "",
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
                            {oxygenSizeData.map((font, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setFontSizeFamilyClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    fontSizeData: `${font.size}`,
                                                    fontSizeFamilyData: `${font.fontFamily}`,
                                                    fontFamilyData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1
                                            className={`font-bold ${font.size}`}
                                            style={{
                                                fontFamily: `${font.fontFamily}`,
                                            }}
                                        >
                                            Text
                                        </h1>
                                        <p className="text-gray-300 text-xs">
                                            {font.size}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        {oxygenMore && (
                            <div className="grid grid-cols-3 gap-2 text-white">
                                {oxygenSizeMoreData.map((font, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setFontSizeFamilyClick(true);
                                                setText((prev) => {
                                                    const newTextData = [
                                                        ...prev,
                                                    ];
                                                    newTextData[
                                                        prev.length - 1
                                                    ] = {
                                                        ...newTextData[
                                                            prev.length - 1
                                                        ],
                                                        fontSizeData: `${font.size}`,
                                                        fontSizeFamilyData: `${font.fontFamily}`,
                                                        fontFamilyData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1
                                                className={`font-bold ${font.size}`}
                                                style={{
                                                    fontFamily: `${font.fontFamily}`,
                                                }}
                                            >
                                                Text
                                            </h1>
                                            <p className="text-gray-300 text-xs">
                                                {font.size}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FontSize;
