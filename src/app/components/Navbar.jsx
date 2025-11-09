import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
                <img
                    src="/logo.png"
                    className="sm:w-10 sm:h-10 2xl:w-17 2xl:h-17 h-8 w-8"
                />
                <h1 className="text-background font-semibold sm:text-[2rem] 2xl:text-[4rem] text-lg">
                    Cotor
                </h1>
            </div>
            <div className="flex items-center gap-4 sm:text-[1rem] 2xl:text-[3rem] text-sm text-white">
                <Link href="/help">
                    <p className="border-2 rounded-full px-5 py-1 cursor-pointer hover:bg-white hover:text-black hover:border-0">
                        Help
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
