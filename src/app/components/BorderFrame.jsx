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
import { useState } from "react";

function BorderFrame() {
    const [colorFrameMore, setColorFrameMore] = useState(false);
    const [gradientFrameMore, setGradientFrameMore] = useState(false);
    const [glowFrameMore, setGlowFrameMore] = useState(false);
    const [shadowFrameMore, setShadowFrameMore] = useState(false);
    const [dottedFrameMore, setDottedFrameMore] = useState(false);

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
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            gradientFrameMore ? "text-[#bbbbbb]" : ""
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
                    className={`flex flex-col gap-2 ${
                        gradientFrameMore ? "h-60" : ""
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
                        {gradientFrameData.map((frame, index) => {
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
                    {gradientFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {gradientFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
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
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            glowFrameMore ? "text-[#bbbbbb]" : ""
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
                    className={`flex flex-col gap-2 ${
                        glowFrameMore ? "h-60" : ""
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
                        {glowFrameData.map((frame, index) => {
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
                    {glowFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {glowFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
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
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            shadowFrameMore ? "text-[#bbbbbb]" : ""
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
                    className={`flex flex-col gap-2 ${
                        shadowFrameMore ? "h-60" : ""
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
                        {shadowFrameData.map((frame, index) => {
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
                    {shadowFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {shadowFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
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
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            dottedFrameMore ? "text-[#bbbbbb]" : ""
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
                    className={`flex flex-col gap-2 ${
                        dottedFrameMore ? "h-60" : ""
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
                        {dottedFrameData.map((frame, index) => {
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
                    {dottedFrameMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            {dottedFrameMoreData.map((frame, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="h-18 bg-[#3c3d3f] text-white rounded-sm flex flex-col justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setText((prev) => {
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
        </div>
    );
}

export default BorderFrame;
