"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <div className="m-auto flex flex-col gap-6">
            <div className="bg-[#093b72] p-2 pb-14 flex flex-col gap-10">
                <div className="flex flex-col gap-6 sm:px-6 px-4">
                    <Navbar />
                    <div className="sm:px-5 text-white flex items-center">
                        <a
                            href="https://palettepop.vercel.app"
                            target="_blank"
                            className="hover:underline active:underline"
                        >
                            <p className="text-sm">
                                Color Palatte
                            </p>
                        </a>
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
                        <a href="https://cotor.vercel.app" target="_blank">
                            <p className="text-sm underline">
                                Edit Text in Image
                            </p>
                        </a>
                    </div>
                </div>
                <div className="hero-div w-[93%] m-auto flex sm:flex-row flex-col items-center gap-20">
                    <div className="hero-text-div sm:w-[50%] flex flex-col gap-5">
                        <h1 className="sm:text-[2.8rem] text-4xl text-white font-bold">
                            Edit Text in Image
                        </h1>
                        <div className="text-white sm:text-[1.15rem] text-lg">
                            <p>
                                Change and edit text in images online quickly
                                and effortlessly with Cotor. Whether you want to make minor text changes or
                                completely rewrite photos with your own words,
                                you can do so in just seconds. Try it out now!
                            </p>
                        </div>
                        <Link href="/edit" className="w-max">
                            <div className="bg-white font-medium px-4 py-2 w-max rounded-md sm:text-[1rem] hover:bg-[#093b72] active:bg-[#093b72] border-2 border-white hover:text-white active:text-white">
                                <p>Edit Text Now</p>
                            </div>
                        </Link>
                    </div>
                    <div className="hero-image-div sm:w-[50%] flex items-center gap-2">
                        <div className="image-div relative w-[50%] h-100 w-full">
                            <Image
                                src={"/before-hero-image.jpg"}
                                alt="Demo before image"
                                fill
                                className="object-cover rounded-md"
                            />
                            <p
                                className="before-after-div absolute top-3 left-3 sm:text-[1rem]
     text-white px-4 py-1 w-max rounded-full 
     bg-white/20 backdrop-blur-lg border border-white/20 shadow-md"
                            >
                                Before
                            </p>
                        </div>
                        <div className="image-div relative w-[50%] h-100 w-full">
                            <Image
                                src={"/after-hero-image.png"}
                                alt="Demo after image"
                                fill
                                className="object-cover rounded-md"
                            />
                            <p
                                className="before-after-div absolute top-3 right-3 sm:text-[1rem]
     text-white px-4 py-1 w-max rounded-full 
     bg-white/20 backdrop-blur-lg border border-white/20 shadow-md"
                            >
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
