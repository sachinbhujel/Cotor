"use client";

import { colorEffectData } from "@/data/effectData";
import { colorEffectMoreData } from "@/data/effectData";
import { simpleEffectData } from "@/data/effectData";
import { simpleEffectMoreData } from "@/data/effectData";
import { metallicEffectData } from "@/data/effectData";
import { metallicEffectMoreData } from "@/data/effectData";
import { neonEffectData } from "@/data/effectData";
import { neonEffectMoreData } from "@/data/effectData";
import { outlineEffectData } from "@/data/effectData";
import { outlineEffectMoreData } from "@/data/effectData";
import { outlineAndStrokeEffectData } from "@/data/effectData";
import { outlineAndStrokeEffectMoreData } from "@/data/effectData";
import { outlineAndNeonEffectData } from "@/data/effectData";
import { outlineAndNeonEffectMoreData } from "@/data/effectData";
import { shadowEffectData } from "@/data/effectData";
import { shadowEffectMoreData } from "@/data/effectData";

import React, { useState } from "react";

function Effects({ text, setText, setTextEffectClick }) {
    const [colorEffectsMore, setColorEffectsMore] = useState(false);
    const [simpleEffectsMore, setSimpleEffectsMore] = useState(false);
    const [metallicEffectsMore, setMetallicEffectsMore] = useState(false);
    const [neonEffectsMore, setNeonEffectsMore] = useState(false);
    const [outlineEffectsMore, setOutlineEffectsMore] = useState(false);
    const [outlineAndNeonEffectsMore, setOutlineAndNeonEffectsMore] =
        useState(false);
    const [outlineAndStrokeEffectsMore, setOutlineAndStrokeEffectsMore] =
        useState(false);
    const [shadowEffectsMore, setShadowEffectsMore] = useState(false);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Color Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            colorEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setColorEffectsMore(!colorEffectsMore)}
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
                        colorEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {colorEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {colorEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {colorEffectMoreData.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEffectClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    effectData: `${color.data}`,
                                                    textData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1 className={`${color.data}`}>
                                            Text
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Simple Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            simpleEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setSimpleEffectsMore(!simpleEffectsMore)}
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
                        simpleEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {simpleEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {simpleEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {simpleEffectMoreData.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEffectClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    effectData: `${color.data}`,
                                                    textData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1 className={`${color.data}`}>
                                            Text
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Metallic Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            metallicEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() =>
                            setMetallicEffectsMore(!metallicEffectsMore)
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
                        metallicEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {metallicEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {metallicEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {metallicEffectMoreData.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEffectClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    effectData: `${color.data}`,
                                                    textData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1 className={`${color.data}`}>
                                            Text
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Neon Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            neonEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setNeonEffectsMore(!neonEffectsMore)}
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
                        neonEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {neonEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {neonEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {neonEffectMoreData.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEffectClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    effectData: `${color.data}`,
                                                    textData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1 className={`${color.data}`}>
                                            Text
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Outline Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            outlineEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() =>
                            setOutlineEffectsMore(!outlineEffectsMore)
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
                        outlineEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {outlineEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {outlineEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {outlineEffectMoreData.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setTextEffectClick(true);
                                            setText((prev) => {
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                        prev.length - 1
                                                    ],
                                                    effectData: `${color.data}`,
                                                    textData: "",
                                                };
                                                return newTextData;
                                            });
                                        }}
                                    >
                                        <h1 className={`${color.data}`}>
                                            Text
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Outline Neon Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            outlineAndNeonEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() =>
                            setOutlineAndNeonEffectsMore(
                                !outlineAndNeonEffectsMore
                            )
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
                        outlineAndNeonEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {outlineAndNeonEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {outlineAndNeonEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {outlineAndNeonEffectMoreData.map(
                                (color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEffectClick(true);
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
                                                        effectData: `${color.data}`,
                                                        textData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1 className={`${color.data}`}>
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
            <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Outline Stroke Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            outlineAndStrokeEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() =>
                            setOutlineAndStrokeEffectsMore(
                                !outlineAndStrokeEffectsMore
                            )
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
                        outlineAndStrokeEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {outlineAndStrokeEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {outlineAndStrokeEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {outlineAndStrokeEffectMoreData.map(
                                (color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEffectClick(true);
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
                                                        effectData: `${color.data}`,
                                                        textData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1 className={`${color.data}`}>
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
             <div className="flex flex-col gap-2 py-1">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Shadow Effects
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            shadowEffectsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() =>
                            setShadowEffectsMore(
                                !shadowEffectsMore
                            )
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
                        shadowEffectsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setTextEffectClick(true);
                                setText((prev) => {
                                    const newTextData = [...prev];
                                    newTextData[prev.length - 1] = {
                                        ...newTextData[prev.length - 1],
                                        effectData: "",
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
                        {shadowEffectData.map((color, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setTextEffectClick(true);
                                        setText((prev) => {
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                effectData: `${color.data}`,
                                                textData: "",
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <h1 className={`${color.data}`}>Text</h1>
                                </div>
                            );
                        })}
                    </div>
                    {shadowEffectsMore && (
                        <div className="grid grid-cols-3 gap-2">
                            {shadowEffectMoreData.map(
                                (color, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-18 bg-[#3c3d3f] rounded-sm flex justify-center items-center cursor-pointer"
                                            onClick={() => {
                                                setTextEffectClick(true);
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
                                                        effectData: `${color.data}`,
                                                        textData: "",
                                                    };
                                                    return newTextData;
                                                });
                                            }}
                                        >
                                            <h1 className={`${color.data}`}>
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
        </div>
    );
}

export default Effects;
