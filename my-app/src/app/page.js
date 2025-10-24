"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <div className="z-1000 p-2 pt-4 w-[750px] m-auto flex flex-col gap-6">
      <Navbar />
      <div className="flex justify-center py-2 flex-col items-center">
        <h1 className="text-primary sm:text-4xl text-2xl font-semibold">
          Create Your Story
        </h1>
        <p className="text-lg text-secondary">Upload an image to get started</p>
      </div>
      <div className="flex gap-5 p-5 h-130 justify-around">
        <div className="rounded-md w-[50%] flex flex-col justify-center items-center border-2 border-dashed border-primary">
          <label className="border p-4 flex items-center justify-center flex-col gap-3 w-full h-screen cursor-pointer">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-primary text-lg font-semibold text-center">
                Drag and drop your image here or click to upload
              </h2>
              <p className="text-background opacity-75">
                Supports JPG, PNG etc
              </p>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center">
              <span className="border-2 text-background border-primary text-sm px-4 py-1 rounded-full">
                Upload image
              </span>
            </div>
          </label>
        </div>
        <div className="w-[50%] border rounded-md">
          {image ? (
            <div>
              <img
                src={image}
                alt="Uploaded"
                className="rounded-md w-full object-cover h-120"
              />
            </div>
          ) : (
            <img
              className="h-full max-w-full rounded-md object-cover"
              src="https://i.imgur.com/lSqHYkf.jpeg"
              alt="image description"
            />
          )}
        </div>
      </div>
      {image && (
        <div className="m-auto flex justify-center text-center">
          <Link
            href="/edit"
            className="bg-purple-600 rounded-full text-white p-2 px-4"
          >
            <button>Continue to edit</button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}
