"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      localStorage.setItem("upload-image", URL.createObjectURL(file));
    }
  };
  return (
    <div className="p-2 w-[750px] m-auto border">
      <Navbar />
      <div className="flex justify-center flex-col items-center border">
        <h1 className="text-3xl">Create Your Story</h1>
        <p className="text-lg">
          Lorem nbjehfwe f er erb ergne ng erg en ge g ne g
        </p>
      </div>
      <div className="flex border gap-5 p-5 h-130 justify-around">
        <div className="bg-red-200 w-[50%] flex flex-col justify-center items-center border">
          <label className="border p-4 flex items-center justify-center flex-col gap-2 w-full h-screen cursor-pointer">
            <h2 className="text-xl font-semibold text-center">
              Drag and drop your image here or click to upload
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 15a4 4 0 014-4h10a4 4 0 014 4v4H3v-4zM7 10V6a5 5 0 0110 0v4"
                />
              </svg>
              <span className="">Click to upload image</span>
            </div>
          </label>
        </div>
        <div className="bg-green-200 w-[50%] border">
          {image ? (
            <div className="">
              <img
                src={image}
                alt="Uploaded"
                className="w-full object-cover h-120"
              />
            </div>
          ) : (
            <img src="" alt="Uploaded" className="w-full object-cover h-120" />
          )}
        </div>
      </div>
      {image && (
        <div className="border m-auto flex justify-center text-center">
          <Link href="/edit" className="bg-purple-600 text-white p-2 px-4">
            <button>Continue to edit</button>
          </Link>
        </div>
      )}
    </div>
  );
}
