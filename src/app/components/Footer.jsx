import React from "react";

function Footer() {
    return (
        <footer className="m-auto w-[90%]">
            <div className="p-4 flex justify-center">
                <span className="2xl:text-[2rem] sm:text-[1rem] text-sm text-center font-semibold">
                    © 2025{" "}
                    <a
                        href="https://cotor.vercel.app/"
                        className="hover:underline"
                        target="_blank"
                    >
                        Cotor™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
