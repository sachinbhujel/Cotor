"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="m-auto flex flex-col gap-6">
      <div className="bg-[#007aff] p-2 pb-14 flex flex-col gap-10">
        <div className="flex flex-col gap-4 px-6">
          <Navbar />
          <div className="text-white w-max p-2 flex items-center">
            <p>Home</p>
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
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <p>Color Palatte</p>
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
              className="lucide lucide-chevron-right-icon lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            Edit Text in Image
          </div>
        </div>
        <div className="w-[93%] m-auto flex gap-20">
          <div className="w-[50%] flex flex-col gap-6">
            <h1 className="text-5xl text-white font-bold">
              Edit Text in Image
            </h1>
            <div className="text-white leading-[2] text-xl">
              <p>
                Change and edit text in images online quickly and effortlessly
                with Fotor.
              </p>
              <p>
                Whether you want to make minor text changes or completely
                rewrite photos with your own words, you can do so in just
                seconds. Try it out now!
              </p>
            </div>
            <Link href="/edit">
              <div className="bg-white font-medium px-4 py-2 w-max rounded-md text-lg">
                <p>Edit Text Now</p>
              </div>
            </Link>
          </div>
          <div className="w-[50%] flex items-center gap-2">
            <div className="relative">
              <img
                src="https://i.imgur.com/lSqHYkf.jpeg"
                className="h-100 object-cover rounded-md"
              />
              <p className="absolute top-3 left-3 bg-black rounded-full w-max text-white px-4 py-1">
                Before
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/lSqHYkf.jpeg"
                className="h-100 object-cover rounded-md"
              />
              <p className="absolute top-3 right-3 bg-black rounded-full w-max text-white px-4 py-1">
                After
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <WhyChooseUs />
    </div>
  );
}
