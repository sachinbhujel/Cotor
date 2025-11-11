"use client";

import { colorFrameData } from "@/data/borderData";
import { colorFrameMoreData } from "@/data/borderData";
import { useState } from "react";

function BorderFrame() {
    const [colorFrameMore, setColorFrameMore] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Color Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            colorFrameMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setColorFrameMore(!colorFrameMore)}
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
                        colorFrameMore ? "h-60" : ""
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
                                        frameData: "",
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
                        {colorFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                frameData: `${frame.data}`,
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <p className={`${frame.data} text-sm`}>
                                        Text
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {colorFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                              {colorFrameMoreData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                frameData: `${frame.data}`,
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <p className={`${frame.data} text-sm`}>
                                        Text
                                    </p>
                                </div>
                            );
                        })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BorderFrame;
