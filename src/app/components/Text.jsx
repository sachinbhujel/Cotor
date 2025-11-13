"use client";

import React, { useState } from "react";
import Input from "./Input";
import { titleData } from "@/data/textData";
import { titleMoreData } from "@/data/textData";
import { subTitleData } from "@/data/textData";
import { subTitleMoreData } from "@/data/textData";
import { paraData } from "@/data/textData";
import { paraMoreData } from "@/data/textData";
import { colorNames } from "@/data/colorData";

function Text({
    editIndex,
    setEditIndex,
    textareaTextValue,
    setTextareaTextValue,
    text,
    setText,
    textButtonClick,
    setTextEditClick,
}) {
    const [titleShowMore, setTitleShowMore] = useState(false);
    const [subTitleShowMore, setSubTitleShowMore] = useState(false);
    const [paraShowMore, setParaShowMore] = useState(false);

    const [colorsMore, setColorsMore] = useState(false);
    const [toolsMore, setToolsMore] = useState(false);



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
                    <div className="flex gap-4 flex-col">
                        <div className="text-white flex flex-col gap-1">
                            <p className="font-semibold">Font Size</p>
                            <div className="flex items-center gap-1.5 text-sm">
                                <p className="rounded-md border py-1 px-2 w-8 flex justify-center">S</p>
                                <p className="rounded-md border py-1 px-2 w-8 flex justify-center">M</p>
                                <p className="rounded-md border py-1 px-2 w-8 flex justify-center">L</p>
                                <p className="rounded-md border py-1 px-2 w-8 flex justify-center">XL</p>
                                <p className="rounded-md border py-1 px-2 w-8 flex justify-center">2XL</p>
                                <p className="rounded-md border py-1 px-2 w-max flex justify-center">Custom</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold text-base text-white">
                                        Text Color
                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                    {colorNames.map((name, index) => {
                                        return (
                                            <div
                                                key={index}
                                                style={{ background: name.color }}
                                                className={`w-6 h-6 rounded-full cursor-pointer`}
                                                onClick={() =>
                                                    handleFontColor(`${name.color}`)
                                                }
                                            ></div>
                                        );
                                    })}
                                    <div className="text-white flex text-sm">
                                        <div className="relative inline-block h-6 flex items-center">
                                        <input
                                            type="color"
                                            id="color-input"
                                            className="rounded-full w-6 h-6"
                                            onChange={handleFontColorPicker}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pipette-icon lucide-pipette"><path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" /><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" /><path d="m2 22 .414-.414" /></svg>
                                        </div>
                                    </div>
                                    </div>
                                    
                                    {/* <div className="bg-black text-white rounded-full p-0.5">
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
                                    </div> */}
                                </div>
                                {/* <div className="text-white flex items-center gap-1 text-sm">
                                    <p>Custom</p>
                                    <div className="relative inline-block">
                                        <input
                                            type="color"
                                            id="color-input"
                                            className="rounded-full w-6 h-6"
                                            onChange={handleFontColorPicker}
                                        />
                                        <div className="w-6 h-6 absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pipette-icon lucide-pipette"><path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" /><path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" /><path d="m2 22 .414-.414" /></svg>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 text-base font-semibold">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-base text-white">
                                    Styles & alignments
                                </p>
                            </div>

                            <div
                            // className={`flex flex-col gap-2 ${toolsMore ? "h-60" : ""
                            //     } overflow-y-auto scrollbar`}
                            >
                                <div className="grid grid-cols-3 gap-2 text-white">
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    // onClick={() => {
                                    //     setText((prev) => {
                                    //         const newTextData = [...prev];
                                    //         newTextData[prev.length - 1] = {
                                    //             ...newTextData[prev.length - 1],
                                    //             colorData: "",
                                    //             boldData: "",
                                    //             italicData: "",
                                    //             underlineData: "",
                                    //             spaceData: "",
                                    //             shadowData: "",
                                    //         };
                                    //         return newTextData;
                                    //     });
                                    // }}
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
                                    // onClick={handleTextBold}
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
                                    // onClick={handleTextItalic}
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
                                    // onClick={handleTextUnderline}
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
                                    // onClick={handleTextSpace}
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
                                    // onClick={handleTextShadow}
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

                        {/* Text Title Data */}
                        {/* <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-base text-white">
                                    Title
                                </p>
                                <div
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${titleShowMore ? "text-[#bbbbbb]" : ""
                                        }`}
                                    onClick={() =>
                                        setTitleShowMore(!titleShowMore)
                                    }
                                >
                                    <p className="text-sm font-semibold">
                                        More
                                    </p>
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
                                className={`flex flex-col gap-2 ${titleShowMore ? "h-60" : ""
                                    } overflow-y-auto scrollbar`}
                            >
                                <div className="grid grid-cols-3 gap-2">
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData: "",
                                                value: newTextData[
                                                    text.length - 1
                                                ]?.value,
                                            };
                                            setText(newTextData);
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
                                    {titleData.map((value, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                onClick={() => {
                                                    setTextEditClick(true);
                                                    const newTextData = [
                                                        ...text,
                                                    ];
                                                    newTextData[
                                                        text.length - 1
                                                    ] = {
                                                        textData: `${value.data}`,
                                                        value: newTextData[
                                                            text.length - 1
                                                        ]?.value,
                                                    };
                                                    setText(newTextData);
                                                }}
                                            >
                                                <h1 className={`${value.data}`}>
                                                    Text
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                                {titleShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        {titleMoreData.map((value, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                    onClick={() => {
                                                        setTextEditClick(true);
                                                        const newTextData = [
                                                            ...text,
                                                        ];
                                                        newTextData[
                                                            text.length - 1
                                                        ] = {
                                                            textData: `${value.data}`,
                                                            value: newTextData[
                                                                text.length - 1
                                                            ]?.value,
                                                        };
                                                        setText(newTextData);
                                                    }}
                                                >
                                                    <h1
                                                        className={`${value.data}`}
                                                    >
                                                        Text
                                                    </h1>
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
                                    Subtitle
                                </p>
                                <div
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${subTitleShowMore ? "text-[#bbbbbb]" : ""
                                        } `}
                                    onClick={() =>
                                        setSubTitleShowMore(!subTitleShowMore)
                                    }
                                >
                                    <p className="text-sm font-semibold">
                                        More
                                    </p>
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
                                className={`flex flex-col gap-2 ${subTitleShowMore ? "h-60" : ""
                                    } overflow-y-auto scrollbar`}
                            >
                                <div className="grid grid-cols-3 gap-2">
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData: "",
                                                value: newTextData[
                                                    text.length - 1
                                                ]?.value,
                                            };
                                            setText(newTextData);
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
                                    {subTitleData.map((value, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                onClick={() => {
                                                    setTextEditClick(true);
                                                    const newTextData = [
                                                        ...text,
                                                    ];
                                                    newTextData[
                                                        text.length - 1
                                                    ] = {
                                                        textData: `${value.data}`,
                                                        value: newTextData[
                                                            text.length - 1
                                                        ]?.value,
                                                    };
                                                    setText(newTextData);
                                                }}
                                            >
                                                <h1 className={`${value.data}`}>
                                                    Text
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                                {subTitleShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        {subTitleMoreData.map(
                                            (value, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                        onClick={() => {
                                                            setTextEditClick(
                                                                true
                                                            );
                                                            const newTextData =
                                                                [...text];
                                                            newTextData[
                                                                text.length - 1
                                                            ] = {
                                                                textData: `${value.data}`,
                                                                value: newTextData[
                                                                    text.length -
                                                                    1
                                                                ]?.value,
                                                            };
                                                            setText(
                                                                newTextData
                                                            );
                                                        }}
                                                    >
                                                        <h1
                                                            className={`${value.data}`}
                                                        >
                                                            Text
                                                        </h1>
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
                                    Paragraph
                                </p>
                                <div
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${paraShowMore ? "text-[#bbbbbb]" : ""
                                        }`}
                                    onClick={() =>
                                        setParaShowMore(!paraShowMore)
                                    }
                                >
                                    <p className="text-sm font-semibold">
                                        More
                                    </p>
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
                                className={`flex flex-col gap-2 ${paraShowMore ? "h-60" : ""
                                    } overflow-y-auto scrollbar`}
                            >
                                <div className="grid grid-cols-3 gap-2">
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(false);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData: "",
                                                value: newTextData[
                                                    text.length - 1
                                                ]?.value,
                                            };
                                            setText(newTextData);
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
                                    {paraData.map((value, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                onClick={() => {
                                                    setTextEditClick(true);
                                                    const newTextData = [
                                                        ...text,
                                                    ];
                                                    newTextData[
                                                        text.length - 1
                                                    ] = {
                                                        textData: `${value.data}`,
                                                        value: newTextData[
                                                            text.length - 1
                                                        ]?.value,
                                                    };
                                                    setText(newTextData);
                                                }}
                                            >
                                                <h1 className={`${value.data}`}>
                                                    Text
                                                </h1>
                                            </div>
                                        );
                                    })}
                                </div>
                                {paraShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        {paraMoreData.map((value, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                                    onClick={() => {
                                                        setTextEditClick(true);
                                                        const newTextData = [
                                                            ...text,
                                                        ];
                                                        newTextData[
                                                            text.length - 1
                                                        ] = {
                                                            textData: `${value.data}`,
                                                            value: newTextData[
                                                                text.length - 1
                                                            ]?.value,
                                                        };
                                                        setText(newTextData);
                                                    }}
                                                >
                                                    <h1
                                                        className={`${value.data}`}
                                                    >
                                                        Text
                                                    </h1>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Text;
