"use client";

import React, { useState } from "react";

function More({ themeToggleClick, setThemeToggleClick }) {
    const [moreToolsMore, setMoreToolsMore] = useState(false);

    const handleTheme = () => {
        setThemeToggleClick(!themeToggleClick);
    };
    return (
        <div className="flex flex-col gap-6 py-1 h-full">
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        More Tools
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] ${
                            moreToolsMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setMoreToolsMore(!moreToolsMore)}
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
                        moreToolsMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                            </svg>
                            <p className="text-center text-xs text-gray-300">
                                Ask for Cotor
                            </p>
                        </div>
                        <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-square-pen-icon lucide-square-pen"
                            >
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                            </svg>
                            <p className="text-center text-xs text-gray-300">
                                Feedback
                            </p>
                        </div>
                        <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
                            {themeToggleClick ? (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-toggle-right-icon lucide-toggle-right"
                                        onClick={handleTheme}
                                    >
                                        <circle cx="15" cy="12" r="3" />
                                        <rect
                                            width="20"
                                            height="14"
                                            x="2"
                                            y="5"
                                            rx="7"
                                        />
                                    </svg>
                                    <p className="text-center text-xs text-gray-300">
                                        Lighter
                                    </p>
                                </>
                            ) : (
                                <>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-toggle-left-icon lucide-toggle-left"
                                        onClick={handleTheme}
                                    >
                                        <circle cx="9" cy="12" r="3" />
                                        <rect
                                            width="20"
                                            height="14"
                                            x="2"
                                            y="5"
                                            rx="7"
                                        />
                                    </svg>
                                    <p className="text-center text-xs text-gray-300">
                                        Darker
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="rounded-sm h-50">
                    <img
                        src={"hey-weather-site.png"}
                        className="h-full object-cover"
                    />
                </div>
                <a href="https://heyweather.vercel.app" target="_blank">
                    <div
                        className="absolute bottom-0 w-full flex bg-[linear-gradient(90deg,rgba(153,146,209,1)_0%,rgba(9,9,121,1)_35%,rgba(171,44,160,1)_68%,rgba(0,212,255,1)_100%)]  
                    hover:bg-[linear-gradient(90deg,rgba(9,9,121,1)_0%,rgba(171,44,160,1)_35%,rgba(0,212,255,1)_68%,rgba(153,146,209,1)_100%)] p-2 items-center justify-between"
                    >
                        <p className="font-semibold text-base text-white">
                            Visit Site
                        </p>

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
                            className="text-white lucide lucide-move-right-icon lucide-move-right"
                        >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default More;
