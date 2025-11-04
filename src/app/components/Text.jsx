"use client";

import React, { useState } from "react";
import Input from "./Input";
import { titleData } from "@/data/textData";
import { titleMoreData } from "@/data/textData";
import { subTitleData } from "@/data/textData";
import { subTitleMoreData } from "@/data/textData";
import { paraData } from "@/data/textData";
import { paraMoreData } from "@/data/textData";

function Text({
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
    return (
        <div>
            {textButtonClick && (
                <div className="flex flex-col gap-6 py-1">
                    <Input
                        textareaTextValue={textareaTextValue}
                        setTextareaTextValue={setTextareaTextValue}
                        setText={setText}
                    />
                    <div className="flex gap-6 flex-col">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold text-base text-white">
                                    Title
                                </p>
                                <div
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                        titleShowMore ? "text-[#bbbbbb]" : ""
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
                                className={`flex flex-col gap-2 ${
                                    titleShowMore ? "h-60" : ""
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
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb]   ${
                                        subTitleShowMore ? "text-[#bbbbbb]" : ""
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
                                className={`flex flex-col gap-2 ${
                                    subTitleShowMore ? "h-60" : ""
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
                                    className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                                        paraShowMore ? "text-[#bbbbbb]" : ""
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
                                className={`flex flex-col gap-2 ${
                                    paraShowMore ? "h-60" : ""
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
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Text;
