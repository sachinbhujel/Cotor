"use client";

import Link from "next/link";
import React, { useState } from "react";

function More({ themeToggleClick, setThemeToggleClick }) {
    const [moreToolsMore, setMoreToolsMore] = useState(false);
    const [socialLinksMore, setSocialLinksMore] = useState(false);

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
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
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
                        <a href="mailto:sachinbhujel.np@gmail.com?subject=Ask%20for%20Cotor&body=Tell%20us%20what%20features%20you%20want%20to%20add.">
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Ask for Cotor
                                </p>
                            </div>
                        </a>
                        <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                className="lucide lucide-square-pen-icon lucide-square-pen"
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
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-toggle-right-icon lucide-toggle-right"
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
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-toggle-left-icon lucide-toggle-left"
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
                        <Link href="/help">
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-info-icon lucide-info"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 16v-4" />
                                    <path d="M12 8h.01" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Help
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-white">
                        Social Links
                    </p>
                    <div
                        className={`flex items-center text-[#838383] cursor-pointer hover:text-[#bbbbbb] active:text-[#bbbbbb] ${
                            socialLinksMore ? "text-[#bbbbbb]" : ""
                        }`}
                        onClick={() => setSocialLinksMore(!socialLinksMore)}
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
                        socialLinksMore ? "h-60" : ""
                    } overflow-y-auto scrollbar`}
                >
                    <div className="grid grid-cols-3 gap-2 text-white">
                        <a
                            href="https://instagram.com/imsachinbhujel"
                            target="_blank"
                        >
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-instagram-icon lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Instagram
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://facebook.com/imsachinbhujel"
                            target="_blank"
                        >
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-facebook-icon lucide-facebook"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Facebook
                                </p>
                            </div>
                        </a>
                        <a href="https://x.com/imsachinbhujel" target="_blank">
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-twitter-icon lucide-twitter"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Twitter
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sachin-bhujel-3b83a938a/"
                            target="_blank"
                        >
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-linkedin-icon lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Linkedin
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://github.com/sachinbhujel"
                            target="_blank"
                        >
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-github-icon lucide-github"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Github
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/@sachinbhujel909"
                            target="_blank"
                        >
                            <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                    className="lucide lucide-youtube-icon lucide-youtube"
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                                <p className="text-center text-xs text-gray-300">
                                    Youtube
                                </p>
                            </div>
                        </a>
                    </div>
                    {socialLinksMore && (
                        <div className="grid grid-cols-3 gap-2 text-white">
                            <a
                                href="https://dribbble.com/sachin-bhujel"
                                target="_blank"
                            >
                                <div className="h-18 bg-[#3c3d3f] rounded-sm flex flex-col gap-1 justify-center items-center cursor-pointer">
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
                                        className="lucide lucide-dribbble-icon lucide-dribbble"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                                        <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                                        <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                                    </svg>
                                    <p className="text-center text-xs text-gray-300">
                                        Dribble
                                    </p>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="relative">
                <div className="rounded-sm h-50 bg-white">
                    <img
                        src={"../hey-weather-site.png"}
                        className="h-full object-cover"
                    />
                    {/* <div className="flex flex-col gap-2 p-2">
                        <p
                            className="underline text-center flex items-center font-bold text-3xl text-[#4b2e05]

"
                        >
                            HeyWeather
                        </p>
                        <p className="text-sm">
                            HeyWeather is a minimal and modern weather app.
                        </p>
                        <p className="flex items-center gap-1.5">
                            <p> Founder : </p>
                            <a
                                href="https://github/sachinbhujel"
                                target="_blank"
                                className="font-semibold text-[#4b2e05] underline"
                            >
                                Sachin Bhujel
                            </a>
                        </p>
                    </div> */}
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
