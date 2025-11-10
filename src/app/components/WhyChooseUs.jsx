import React from "react";

function WhyChooseUs() {
    return (
        <div className="m-auto w-[90%] py-8 flex flex-col gap-12">
            <h2 className="sm:text-[2rem] text-3xl text-center font-semibold">
                Why Choose Cotor to Edit Text in Image?
            </h2>
            <div className="flex items-center sm:flex-row flex-col gap-10 justify-center">
                <div className="flex flex-col items-center gap-5 h-max bg-[#ffffff] rounded-md border border-[#093b72] p-2 py-4 hover:scale-102 transition-transform duration-300 cursor-pointer hover:bg-[#093b72] hover:text-white">
                    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 6v6H8" />
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                    </div>

                    <p className="font-bold sm:text-[1.4rem] text-xl text-center">
                        Easy to Use
                    </p>
                    <p className="text-center sm:text-[1.1rem] text-lg">
                        Edit, replace, remove, and add new text in images with
                        ease. No technical skills are required.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-5 h-max bg-[#ffffff] rounded-md p-2 border border-[#093b72] p-2 py-4 hover:scale-102 transition-transform duration-300 cursor-pointer hover:bg-[#093b72] hover:text-white">
                    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
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
                            className="text-white lucide lucide-type-icon lucide-type"
                        >
                            <path d="M12 4v16" />
                            <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
                            <path d="M9 20h6" />
                        </svg>
                    </div>

                    <p className="font-bold sm:text-[1.4rem] text-xl text-center">
                        Various Font Styles
                    </p>
                    <p className="text-center sm:text-[1.1rem] text-lg">
                        A vast library of free fonts and text styles to match
                        your vision and enhance the impact of your text.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-5 h-max bg-[#ffffff] rounded-md p-2 border border-[#093b72 p-2 py-4 hover:scale-102 transition-transform duration-300 cursor-pointer hover:bg-[#093b72] hover:text-white">
                    <div className="w-16 h-16 flex items-center justify-center rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
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
                            className="text-white lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"
                        >
                            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                            <path d="M10 19v-3.96 3.15" />
                            <path d="M7 19h5" />
                            <rect width="6" height="10" x="16" y="12" rx="2" />
                        </svg>
                    </div>

                    <p className="font-bold sm:text-[1.4rem] text-xl text-center">
                        Mobile Friendly
                    </p>
                    <p className="text-center sm:text-[1.1rem] text-lg">
                        Works both on desktop and mobile devices. Enjoy the
                        flexibility of editing image text anytime and anywhere.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
