import React from "react";

function More({ themeToggleClick, setThemeToggleClick }) {
    const handleTheme = () => {
        setThemeToggleClick(!themeToggleClick);
    };
    return (
        <div className="flex flex-col gap-6 py-1 h-full">
            <div className="bg-[#3c3d3f] p-2 py-3 text-white flex items-center gap-2 rounded-sm cursor-pointer hover:bg-[#161619] hover:text-white">
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
                <p>Ask for Cotor</p>
            </div>
            <div className="bg-[#3c3d3f] p-2 py-3 text-white flex items-center gap-2 rounded-sm cursor-pointer hover:bg-[#161619] hover:text-white">
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
                <p>Feedback</p>
            </div>
            <div className="bg-[#3c3d3f] p-2 py-3 text-white flex items-center gap-2 rounded-sm cursor-pointer hover:bg-[#161619] hover:text-white">
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
                            <rect width="20" height="14" x="2" y="5" rx="7" />
                        </svg>
                        <p>Lighter</p>
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
                            <rect width="20" height="14" x="2" y="5" rx="7" />
                        </svg>
                        <p>Darker</p>
                    </>
                )}
            </div>
            <div className="relative">
                <div className="rounded-sm bg-red-400 h-60"></div>
                <div className="absolute bottom-0 w-full flex bg-[linear-gradient(90deg,rgba(153,146,209,1)_0%,rgba(9,9,121,1)_35%,rgba(171,44,160,1)_68%,rgba(0,212,255,1)_100%)] p-2 items-center justify-between">
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
            </div>
        </div>
    );
}

export default More;
