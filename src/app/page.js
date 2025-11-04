"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="m-auto flex flex-col gap-6">
            <div className="bg-[#007aff] p-2 pb-14 flex flex-col gap-10">
                <div className="flex flex-col gap-4 sm:px-6 px-4">
                    <Navbar />
                    <div className="text-white w-full flex items-center">
                        {/* <p className="2xl:text-[2rem] sm:text-[1rem] text-[14px]">Home</p>
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
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg> */}
                        <p className="2xl:text-[2rem] sm:text-[1rem] text-[14px]">
                            Color Palatte
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
                            className="lucide lucide-chevron-right-icon lucide-chevron-right"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                        <p className="2xl:text-[2rem] sm:text-[1rem] text-[14px] underline">
                            Edit Text in Image
                        </p>
                    </div>
                </div>
                <div className="hero-div w-[93%] m-auto flex sm:flex-row flex-col gap-20">
                    <div className="hero-text-div sm:w-[50%] flex flex-col gap-6">
                        <h1 className="sm:text-[3rem] 2xl:text-[5rem] text-4xl text-white font-bold">
                            Edit Text in Image
                        </h1>
                        <div className="text-white leading-[2] sm:text-[1.3rem] text-lg 2xl:text-[3rem]">
                            <p>
                                Change and edit text in images online quickly
                                and effortlessly with Cotor.
                            </p>
                            <p>
                                Whether you want to make minor text changes or
                                completely rewrite photos with your own words,
                                you can do so in just seconds. Try it out now!
                            </p>
                        </div>
                        <Link href="/edit">
                            <div className="bg-white font-medium px-4 py-2 w-max rounded-md sm:text-[1rem] 2xl:text-[2rem] hover:bg-[#007aff] hover:border-2 border-white hover:text-white">
                                <p>Edit Text Now</p>
                            </div>
                        </Link>
                    </div>
                    <div className="hero-image-div sm:w-[50%] flex items-center gap-2">
                        <div className="image-div relative w-[50%]">
                            <img
                                src="https://i.imgur.com/lSqHYkf.jpeg"
                                className="h-100 object-cover rounded-md 2xl:w-[100%] 2xl:h-[50%]"
                            />
                            <p className="before-after-div sm:text-[1rem] 2xl:text-[2.2rem] absolute top-3 left-3 bg-black rounded-full w-max text-white px-4 py-1">
                                Before
                            </p>
                        </div>
                        <div className="image-div relative w-[50%]">
                            <img
                                src="https://i.imgur.com/lSqHYkf.jpeg"
                                className="h-100 object-cover rounded-md 2xl:w-[100%] 2xl:h-[50%]"
                            />
                            <p className="before-after-div sm:text-[1rem] 2xl:text-[2.2rem] absolute top-3 right-3 bg-black rounded-full w-max text-white px-4 py-1">
                                After
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <About />
            <WhyChooseUs />
            <Footer />
        </div>
    );
}
