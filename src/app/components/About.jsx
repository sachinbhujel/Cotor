import Link from "next/link";
import React from "react";

function About() {
    return (
        <div className="py-8 flex flex-col gap-16 sm:gap-24">
            <div className="w-[93%] m-auto flex sm:flex-row flex-col items-center sm:gap-15 gap-10">
                <div className="sm:w-[50%] bg-red-200 h-100">
                    {/* <div>Hi</div> */}
                    <img
                        src="about-div-1-image.png"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Fast and Easy
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.15rem] text-lg text-[#5a5f69]">
                            Want to edit text in an image? With Cotor, it’s
                            simple and fast. Upload your image, add your text,
                            style it your way, and create the perfect design in
                            seconds. Clean, easy, and hassle-free image text
                            editing made for everyone.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#093b72] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#093b72] hover:bg-white hover:text-[#093b72]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse items-center sm:gap-15 gap-10">
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Edit Text With Same Font
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.15rem] text-[#5a5f69] text-lg">
                            Want to edit text in an image while keeping the same
                            font? Cotor makes it easy. Choose from over 100
                            fonts to match your original image, and adjust text
                            size, color, and position in seconds. Simple, fast,
                            and effortless image text editing.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#093b72] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#093b72] hover:bg-white hover:text-[#093b72]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="sm:w-[50%] bg-red-200 h-100">
                    {/* <div>Hi</div> */}
                    <img
                        src="about-div-2-image.png"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="w-[93%] m-auto flex sm:flex-row flex-col items-center sm:gap-15 gap-10">
                <div className="sm:w-[50%] bg-red-200 h-100">
                    {/* <div>Hi</div> */}
                    <img
                        src="about-div-3-image.png"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Update Marketing Visuals
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.15rem] text-[#5a5f69] text-lg">
                            No need to redesign your marketing materials for a
                            simple text change. With Cotor, you can quickly
                            update text in brochures, flyers, or any visuals,
                            whether it’s a contact detail or product price. Keep
                            your marketing content fresh and up to date in
                            seconds.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#093b72] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#093b72] hover:bg-white hover:text-[#093b72]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse items-center sm:gap-15 gap-10">
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Add Your Own Personal Touch
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.3rem] text-[#5a5f69] text-lg">
                            Make birthday wishes extra special with Cotor. Add
                            your own heartfelt messages and personal notes in
                            just a few clicks to create unique, personalized
                            greetings that make someone’s day truly special.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#093b72] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#093b72] hover:bg-white hover:text-[#093b72]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="sm:w-[50%] bg-red-200 h-100">
                    {/* <div>Hi</div> */}
                    <img
                        src="about-div-4-image.png"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
