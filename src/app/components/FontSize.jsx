"use client";

import React, { useState } from "react";
import { sansSerifSizeData } from "@/data/fontSizeData";
import { sansSerifSizeMoreData } from "@/data/fontSizeData";
import { lobsterSizeData } from "@/data/fontSizeData";
import { lobsterSizeMoreData } from "@/data/fontSizeData";
import { patrickHandSizeData } from "@/data/fontSizeData";
import { patrickHandSizeMoreData } from "@/data/fontSizeData";

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

    const handleFontSize = (e) => {
        setFontSize(e.target.value);
    };

    return (
        <div className="flex flex-col gap-6 py-1">
            <div>
                <input
                    type="number"
                    className="border bg-white rounded-sm outline-none w-full p-2"
                    placeholder="Enter font size"
                    value={fontSize}
                    onChange={handleFontSize}
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
            </div>
        </div>
    );
}

export default FontSize;

// <div className="border flex items-center gap-2 flex-wrap">

//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1 className="font-bold" style={{ fontSize: "16px" }}>
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1 className="font-bold" style={{ fontSize: "20px" }}>
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1 className="font-bold" style={{ fontSize: "24px" }}>
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1 className="font-bold" style={{ fontSize: "28px" }}>
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1 className="font-bold" style={{ fontSize: "32px" }}>
//             Text
//         </h1>
//     </div>
// </div>
// <p className="font-semibold text-sm text-[#c0c0c0]">
//     Lobster Two
// </p>
// <div className="border flex items-center gap-2 flex-wrap">
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "12px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "16px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "20px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "24px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "28px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "32px",
//                 fontFamily: "Lobster Two",
//             }}
//         >
//             Text
//         </h1>
//     </div>
// </div>
// <p className="font-semibold text-sm text-[#c0c0c0]">
//     Bebas Neue
// </p>
// <div className="border flex items-center gap-2 flex-wrap">
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "12px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "16px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "20px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "24px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "28px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
//     <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
//         <h1
//             className="font-bold"
//             style={{
//                 fontSize: "32px",
//                 fontFamily: "Bebas Neue",
//             }}
//         >
//             Text
//         </h1>
//     </div>
// </div>
