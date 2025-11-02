"use client";

import React, { useState } from "react";
import { sansSerifData } from "@/data/fontFamilyData";
import { sansSerifMoreData } from "@/data/fontFamilyData";
import { serifData } from "@/data/fontFamilyData";
import { serifMoreData } from "@/data/fontFamilyData";

function FontFamily({
    setText,
    text,
    setTextFamilyData,
    textFamilyClick,
    setTextFamilyClick,
}) {
    const [sansSerifMore, setSansSerifMore] = useState(false);
    const [serifMore, setSerifMore] = useState(false);
    return (
        <div className="flex flex-col gap-6 py-1">
            <div>
                <input
                    type="text"
                    placeholder="Search font"
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
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                sansSerifMore ? "text-[#bbbbbb]" : ""
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
                        className={`flex flex-col gap-2 ${
                            sansSerifMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    const newFontFamilyData = [...text];
                                    newFontFamilyData[text.length - 1] = {
                                        textData:
                                            newFontFamilyData[text.length - 1]
                                                .textData,
                                        value: newFontFamilyData[
                                            text.length - 1
                                        ]?.value,
                                        fontFamilyData: "",
                                    };
                                    setText(newFontFamilyData);
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
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextFamilyClick(true);
                                            const newFontFamilyData = [...text];
                                            newFontFamilyData[text.length - 1] =
                                                {
                                                    textData:
                                                        newFontFamilyData[
                                                            text.length - 1
                                                        ].textData,
                                                    value: newFontFamilyData[
                                                        text.length - 1
                                                    ]?.value,
                                                    fontFamilyData: `${font.name}`,
                                                };
                                            setText(newFontFamilyData);
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
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextFamilyClick(true);
                                                const newFontFamilyData = [
                                                    ...text,
                                                ];
                                                newFontFamilyData[
                                                    text.length - 1
                                                ] = {
                                                    textData:
                                                        newFontFamilyData[
                                                            text.length - 1
                                                        ].textData,
                                                    value: newFontFamilyData[
                                                        text.length - 1
                                                    ]?.value,
                                                    fontFamilyData: `${font.name}`,
                                                };
                                                setText(newFontFamilyData);
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
                            className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                serifMore ? "text-[#bbbbbb]" : ""
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
                        className={`flex flex-col gap-2 ${
                            serifMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                    >
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <div
                                className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => {
                                    setTextFamilyClick(true);
                                    const newFontFamilyData = [...text];
                                    newFontFamilyData[text.length - 1] = {
                                        textData:
                                            newFontFamilyData[text.length - 1]
                                                .textData,
                                        value: newFontFamilyData[
                                            text.length - 1
                                        ]?.value,
                                        fontFamilyData: "",
                                    };
                                    setText(newFontFamilyData);
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
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextFamilyClick(true);
                                            const newFontFamilyData = [...text];
                                            newFontFamilyData[text.length - 1] =
                                                {
                                                    textData:
                                                        newFontFamilyData[
                                                            text.length - 1
                                                        ].textData,
                                                    value: newFontFamilyData[
                                                        text.length - 1
                                                    ]?.value,
                                                    fontFamilyData: `${font.name}`,
                                                };
                                            setText(newFontFamilyData);
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
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextFamilyClick(true);
                                                const newFontFamilyData = [
                                                    ...text,
                                                ];
                                                newFontFamilyData[
                                                    text.length - 1
                                                ] = {
                                                    textData:
                                                        newFontFamilyData[
                                                            text.length - 1
                                                        ].textData,
                                                    value: newFontFamilyData[
                                                        text.length - 1
                                                    ]?.value,
                                                    fontFamilyData: `${font.name}`,
                                                };
                                                setText(newFontFamilyData);
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
            {/* <div className="relative">
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
      </div> */}
        </div>
    );
}

export default FontFamily;
