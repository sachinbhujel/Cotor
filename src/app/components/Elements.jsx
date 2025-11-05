"use client";

import React, { useState } from "react";
import { shapesData } from "@/data/elementData";
import { shapesMoreData } from "@/data/elementData";
import { foodData } from "@/data/elementData";
import { foodMoreData } from "@/data/elementData";

function Elements({ setElements }) {
    const [ideaDivShow, setIdeaDivShow] = useState(false);
    const [shapesMore, setShapesMore] = useState(false);
    const [foodMore, setFoodMore] = useState(false);

    const handleIdeaDiv = () => {
        setIdeaDivShow(!ideaDivShow);
    };

    return (
        <div className="relative flex flex-col gap-4 py-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-white">Elements</p>
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
                        onClick={handleIdeaDiv}
                        className="text-[#9098a7] lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                    </svg>
                </div>
                <div>
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
                        className="text-[#9098a7] lucide lucide-grid3x3-icon lucide-grid-3x3"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M3 15h18" />
                        <path d="M9 3v18" />
                        <path d="M15 3v18" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        placeholder="Search Elements"
                        className="border bg-white rounded-sm outline-none w-full p-2"
                    />
                    <button className="font-semibold text-sm bg-blue-600 rounded-sm text-white w-full p-2 flex justify-center items-center gap-2">
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
                            className="lucide lucide-cloud-upload-icon lucide-cloud-upload"
                        >
                            <path d="M12 13v8" />
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                            <path d="m8 17 4-4 4 4" />
                        </svg>
                        Add your images as elements
                    </button>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-base text-white">
                                Shapes
                            </p>
                            <div
                                className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                    shapesMore ? "text-[#bbbbbb]" : ""
                                }`}
                                onClick={() => setShapesMore(!shapesMore)}
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
                                shapesMore ? "h-60" : ""
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
                                {shapesData.map((shape, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center"
                                            onClick={(e) =>
                                                setElements((prev) => [
                                                    ...prev,
                                                    shape.icon,
                                                ])
                                            }
                                        >
                                            {shape.icon}
                                        </div>
                                    );
                                })}
                            </div>
                            {shapesMore && (
                                <div className="grid grid-cols-3 gap-2 text-white">
                                    {shapesMoreData.map((shape, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center"
                                                onClick={(e) =>
                                                    setElements((prev) => [
                                                        ...prev,
                                                        shape.icon,
                                                    ])
                                                }
                                            >
                                                {shape.icon}
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
                                Food
                            </p>
                            <div
                                className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                    foodMore ? "text-[#bbbbbb]" : ""
                                }`}
                                onClick={() => setFoodMore(!foodMore)}
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
                                foodMore ? "h-60" : ""
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
                                {foodData.map((shape, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center"
                                            onClick={(e) =>
                                                setElements((prev) => [
                                                    ...prev,
                                                    shape.icon,
                                                ])
                                            }
                                        >
                                            {shape.icon}
                                        </div>
                                    );
                                })}
                            </div>
                            {foodMore && (
                                <div className="grid grid-cols-3 gap-2 text-white">
                                    {foodMoreData.map((shape, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center"
                                                onClick={(e) =>
                                                    setElements((prev) => [
                                                        ...prev,
                                                        shape.icon,
                                                    ])
                                                }
                                            >
                                                {shape.icon}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {ideaDivShow && (
                <div className="absolute top-8 bg-white p-4 border flex flex-col gap-4">
                    <img src="about-div-3-image.png" />
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">How it works</p>
                        <div className="flex flex-col gap-1 text-sm font-200 tracking-wide leading-normal">
                            <p>
                                30000+ stickers and elements for you to unleash
                                creativity;
                            </p>
                            <p>You can search keywords to find a proper one;</p>
                            <p>
                                Or just make your own stickers by uploading an
                                image and removing its background.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <p
                            className="cursor-pointer bg-blue-500 text-white w-max py-1 px-3 rounded-sm"
                            onClick={() => setIdeaDivShow(false)}
                        >
                            Got it
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Elements;
