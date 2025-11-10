import Link from "next/link";
import React from "react";

function About() {
    return (
        <div className="py-8 flex flex-col gap-16 sm:gap-24">
            <div className="w-[93%] m-auto flex sm:flex-row flex-col sm:gap-20 gap-10">
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
                            Looking to modify text in an image? With Cotor, you
                            can edit text in images online within seconds. Just
                            upload your image, remove the existing text
                            utilizing the AI-powered object remover tool, and
                            easily replace it with your desired text. Powered by
                            cutting-edge AI technology, Cotor guarantees
                            accurate and precise text removal, leaving no
                            traces. Try Cotor out and enjoy quick and
                            hassle-free image text editing.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse sm:gap-20 gap-10">
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Edit Text in Image With Same Font
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.15rem] text-[#5a5f69] text-lg">
                            Want to edit text in image while keeping the same
                            font? Cotor’s got you covered. With over 1,000 fonts
                            in our font generator to choose from, you can
                            effortlessly find the perfect match for your
                            original image. You can also quickly adjust text
                            sizes, colors, and positions to achieve the perfect
                            look. With Cotor, editing and changing text in
                            images has never been so effortless and efficient.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
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
            <div className="w-[93%] m-auto flex sm:flex-row flex-col sm:gap-20 gap-10">
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
                            You don’t have to redesign your marketing materials
                            just for a simple text change. Now you can modify
                            the text in your brochures, flyers, and other
                            marketing materials you want quickly and easily with
                            our image text editing tool. No matter if you want
                            to update a contact or a product price, you can get
                            the job done in seconds. Effortlessly keep your
                            marketing visuals up-to-date and covey the latest
                            information.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                                Edit Text Now
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse sm:gap-20 gap-10">
                <div className="sm:w-[50%] flex flex-col gap-5">
                    <h2 className="sm:text-[2.5rem] text-3xl font-semibold">
                        Add Your Own Personal Touch
                    </h2>
                    <div className="flex flex-col gap-5">
                        <p className="sm:text-[1.3rem] text-[#5a5f69] text-lg">
                            Make birthday wishes extra special. With just a few
                            clicks, you can easily add text with your own
                            heartfelt messages and personal notes, making the
                            birthday greeting truly unique and personalized.
                            Spread joy and make someone's day truly special by
                            customizing your birthday wishes with personalized
                            text.
                        </p>
                        <Link href="/edit">
                            <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
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
