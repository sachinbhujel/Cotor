"use client";

import React, { useState } from "react";
import Input from "./Input";

function Text({
    textareaTextValue,
    setTextareaTextValue,
    text,
    setText,
    textButtonClick,
    setTextEditData,
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
                                                ].value,
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
                                    <div
                                        className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl uppercase text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl uppercase text-white">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-black text-white uppercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-black text-white uppercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-green-600 uppercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-green-600 uppercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-pink-600 px-1 text-white uppercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-pink-600 px-1 text-white uppercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-blue-600 text-white uppercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-blue-600 text-white uppercase">
                                            Text
                                        </h1>
                                    </div>
                                </div>
                                {titleShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        <div
                                            className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-purple-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-purple-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-orange-600 uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-orange-600 uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-amber-600 px-1 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-amber-600 px-1 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-sky-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-sky-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-lime-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-lime-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-violet-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-violet-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-emerald-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-emerald-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-neutral-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-neutral-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-slate-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-slate-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-cyan-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-cyan-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-indigo-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-indigo-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-stone-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-stone-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-yellow-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-yellow-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-zinc-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-zinc-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-teal-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-teal-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-fuchsia-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-fuchsia-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-rose-600 text-white uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-rose-600 text-white uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#00FFFF] uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#00FFFF] uppercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#F5F5DC] uppercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#F5F5DC] uppercase">
                                                Text
                                            </h1>
                                        </div>
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
                                                ].value,
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
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl text-white">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-black text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-black text-white">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-yellow-300",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-yellow-300">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-red-600 text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-red-600 text-white">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);

                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-orange-600 text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-orange-600 text-white">
                                            Text
                                        </h1>
                                    </div>
                                </div>
                                {subTitleShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-cyan-600 text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-cyan-600 text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#CD7F32] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#CD7F32] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FFE4C4]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FFE4C4]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FFD59A]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FFD59A]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-purple-600 text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-purple-600 text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#7FFF00]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#7FFF00]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FF7F50]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FF7F50]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#1560BD] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#1560BD] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#614051] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#614051] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#228B22] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#228B22] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#00A86B] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#00A86B] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FF00FF] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FF00FF] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#800000] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#800000] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);

                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FFE5B4]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FFE5B4]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#FF2400] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#FF2400] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#C0C0C0]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#C0C0C0]">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#722F37] text-white",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#722F37] text-white">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#9FE2BF]",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#9FE2BF]">
                                                Text
                                            </h1>
                                        </div>
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
                                                ].value,
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
                                    <div
                                        className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl lowercase text-white",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl lowercase text-white">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-black text-white lowercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-black text-white lowercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-[#f5a047] lowercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-[#f5a047] lowercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-[#ef7eab] px-1 text-white lowercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-[#ef7eab] px-1 text-white lowercase">
                                            Text
                                        </h1>
                                    </div>
                                    <div
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEditClick(true);
                                            const newTextData = [...text];
                                            newTextData[text.length - 1] = {
                                                textData:
                                                    "font-bold text-xl bg-[#54aee1] text-white lowercase",
                                                value: newTextData[
                                                    text.length - 1
                                                ].value,
                                            };
                                            setText(newTextData);
                                        }}
                                    >
                                        <h1 className="font-bold text-xl bg-[#54aee1] text-white lowercase">
                                            Text
                                        </h1>
                                    </div>
                                </div>
                                {paraShowMore && (
                                    <div className="grid grid-cols-3 gap-2">
                                        <div
                                            className="h-18 rounded-sm bg-[#3c3d3f] flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#e07623] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#e07623] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-orange-600 lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-orange-600 lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#b05785] px-1 text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#b05785] px-1 text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#db8d70] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#db8d70] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-lime-600 text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-lime-600 text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#cd8674] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#cd8674] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#465cbc] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#465cbc] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-neutral-600 text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-neutral-600 text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-slate-600 text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-slate-600 text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#59ee56] lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#59ee56] lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#e9253d] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#e9253d] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#bb6dd7] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#bb6dd7] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#cc8271] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#cc8271] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#964bbe] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#964bbe] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#9690b6] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#9690b6] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#7167b1] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#7167b1] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#6bbcc7] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#6bbcc7] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#8d8173] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#8d8173] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#45cf5e] lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#45cf5e] lowercase">
                                                Text
                                            </h1>
                                        </div>
                                        <div
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEditClick(true);
                                                const newTextData = [...text];
                                                newTextData[text.length - 1] = {
                                                    textData:
                                                        "font-bold text-xl bg-[#2f27ce] text-white lowercase",
                                                    value: newTextData[
                                                        text.length - 1
                                                    ].value,
                                                };
                                                setText(newTextData);
                                            }}
                                        >
                                            <h1 className="font-bold text-xl bg-[#2f27ce] text-white lowercase">
                                                Text
                                            </h1>
                                        </div>
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
