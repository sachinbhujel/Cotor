"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function Navbar() {
    const [star, setStar] = useState(null || 0);
    useEffect(() => {
        fetch("https://api.github.com/repos/sachinbhujel/Cotor")
            .then((res) => res.json())
            .then((data) => setStar(data.stargazers_count))

    }, [])
    return (
        <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
                <img
                    src="/logo.png"
                    className="sm:w-10 sm:h-10 h-8 w-8"
                />
                <h1 className="text-background font-semibold sm:text-[2rem] text-lg">
                    Cotor
                </h1>
            </div>
            <div className="flex items-center gap-4 sm:text-[1rem] text-sm text-white">
                <Link href="/help">
                    <p className="border-2 rounded-full px-5 py-1 cursor-pointer hover:bg-white hover:text-black hover:border-0 active:bg-white active:text-black active:border-0">
                        Help
                    </p>
                </Link>
                <Link href="https://github.com/sachinbhujel/Cotor" target="_blank">
                    <p className="flex items-center gap-2 border-2 border-[#bfc100] rounded-full px-5 py-1 cursor-pointer bg-black text-white">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="text-yellow-400 lucide lucide-star-icon lucide-star">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                        <span className="font-semibold">{star}</span>
                    </p>
                </Link>
                {/* <p className="border-2 rounded-full px-5 py-1 cursor-pointer hover:bg-white hover:text-black hover:border-0">
          Faq
        </p> */}
            </div>
        </div>
    );
}

export default Navbar;
