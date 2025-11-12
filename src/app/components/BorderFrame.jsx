"use client";

import { colorFrameData } from "@/data/borderData";
import { colorFrameMoreData } from "@/data/borderData";
import { gradientFrameData } from "@/data/borderData";
import { gradientFrameMoreData } from "@/data/borderData";
import { glowFrameData } from "@/data/borderData";
import { glowFrameMoreData } from "@/data/borderData";
import { shadowFrameData } from "@/data/borderData";
import { shadowFrameMoreData } from "@/data/borderData";
import { dottedFrameData } from "@/data/borderData";
import { dottedFrameMoreData } from "@/data/borderData";
import { doubleFrameData } from "@/data/borderData";
import { doubleFrameMoreData } from "@/data/borderData";
import { glassFrameData } from "@/data/borderData";
import { glassFrameMoreData } from "@/data/borderData";
import { pixelFrameData } from "@/data/borderData";
import { pixelFrameMoreData } from "@/data/borderData";
import { outlineShadowFrameData } from "@/data/borderData";
import { outlineShadowFrameMoreData } from "@/data/borderData";
import { animatedGradientFrameData } from "@/data/borderData";
import { animatedGradientFrameMoreData } from "@/data/borderData";
import { useState } from "react";

function BorderFrame({ setText, setFrameClick }) {
    const [colorFrameMore, setColorFrameMore] = useState(false);
    const [gradientFrameMore, setGradientFrameMore] = useState(false);
    const [glowFrameMore, setGlowFrameMore] = useState(false);
    const [shadowFrameMore, setShadowFrameMore] = useState(false);
    const [dottedFrameMore, setDottedFrameMore] = useState(false);
    const [doubleFrameMore, setDoubleFrameMore] = useState(false);
    const [glassFrameMore, setGlassFrameMore] = useState(false);
    const [pixelFrameMore, setPixelFrameMore] = useState(false);
    const [outlineShadowFrameMore, setOutlineShadowFrameMore] = useState(false);
    const [animatedGradientFrameMore, setAnimatedGradientFrameMore] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Color Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${colorFrameMore ? "text-[#bbbbbb]" : ""
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
                    className={`flex flex-col gap-2 ${colorFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                                            setFrameClick(true)
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
                                                setFrameClick(true)
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Gradient Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${gradientFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setGradientFrameMore(!gradientFrameMore)}
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
                    className={`flex flex-col gap-2 ${gradientFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {gradientFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true)
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
                    {gradientFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {gradientFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true)
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Glow Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${glowFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setGlowFrameMore(!glowFrameMore)}
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
                    className={`flex flex-col gap-2 ${glowFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {glowFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true)
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
                    {glowFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {glowFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true)
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Shadow Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${shadowFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setShadowFrameMore(!shadowFrameMore)}
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
                    className={`flex flex-col gap-2 ${shadowFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {shadowFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true)
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
                    {shadowFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {shadowFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true)
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Dotted Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${dottedFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setDottedFrameMore(!dottedFrameMore)}
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
                    className={`flex flex-col gap-2 ${dottedFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {dottedFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
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
                    {dottedFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {dottedFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true);
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Double Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${doubleFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setDoubleFrameMore(!doubleFrameMore)}
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
                    className={`flex flex-col gap-2 ${doubleFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {doubleFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
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
                    {doubleFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {doubleFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true);
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Glass Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${glassFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setGlassFrameMore(!glassFrameMore)}
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
                    className={`flex flex-col gap-2 ${glassFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {glassFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
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
                    {glassFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {glassFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true);
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Pixel Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${pixelFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setPixelFrameMore(!pixelFrameMore)}
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
                    className={`flex flex-col gap-2 ${pixelFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {pixelFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
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
                    {pixelFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {pixelFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true);
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Outline Shadow Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${outlineShadowFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setOutlineShadowFrameMore(!outlineShadowFrameMore)}
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
                    className={`flex flex-col gap-2 ${outlineShadowFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {outlineShadowFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
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
                    {outlineShadowFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {outlineShadowFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
                                                setFrameClick(true);
                                                const newTextData = [...prev];
                                                newTextData[prev.length - 1] = {
                                                    ...newTextData[
                                                    prev.length - 1
                                                    ],
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
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Animated Frame
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${animatedGradientFrameMore ? "text-[#bbbbbb]" : ""
                            }`}
                        onClick={() => setAnimatedGradientFrameMore(!animatedGradientFrameMore)}
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
                    className={`flex flex-col gap-2 ${animatedGradientFrameMore ? "h-60" : ""
                        } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div
                            className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col justify-center items-center cursor-pointer"
                            onClick={() => {
                                setText((prev) => {
                                    setFrameClick(false);
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
                        {animatedGradientFrameData.map((frame, index) => {
                            return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                frameData: `${frame.data}`,
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <p className={`${frame.data} text-sm w-max h-max m-10 p-5 rounded-2xl gradient-frame`}
                                        style={{
                                            background: `${frame.data}`,
                                            backgroundSize: "200% 200%",
                                        }}>
                                        Text
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    {animatedGradientFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {animatedGradientFrameMoreData.map((frame, index) => {
                                  return (
                                <div
                                    key={index}
                                    className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                    onClick={() => {
                                        setText((prev) => {
                                            setFrameClick(true);
                                            const newTextData = [...prev];
                                            newTextData[prev.length - 1] = {
                                                ...newTextData[prev.length - 1],
                                                frameData: `${frame.data}`,
                                            };
                                            return newTextData;
                                        });
                                    }}
                                >
                                    <p className={`${frame.data} text-sm w-max h-max m-10 p-5 rounded-2xl gradient-frame`}
                                        style={{
                                            background: `${frame.data}`,
                                            backgroundSize: "200% 200%",
                                        }}>
                                        Text
                                    </p>
                                </div>
                            );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .gradient-frame {
          background-size: 200% 200%;
          animation: gradientX 5s ease infinite;
          -webkit-background-clip: border-box;
          background-clip: border-box;
        }
      `}</style>
        </div>
    );
}

export default BorderFrame;
