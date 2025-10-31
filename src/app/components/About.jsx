import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="py-8 flex flex-col gap-16 sm:gap-24 2xl:gap-32">
      <div className="w-[93%] m-auto flex sm:flex-row flex-col sm:gap-20 gap-10">
        <div className="sm:w-[50%] bg-red-200 h-100">
          <div>Hi</div>
        </div>
        <div className="sm:w-[50%] flex flex-col gap-8">
          <h2 className="sm:text-[2.5rem] 2xl:text-[5rem] text-3xl">
            Fast and Easy to Edit Image Text Online
          </h2>
          <div className="flex flex-col gap-6">
            <p className="sm:text-[1.3rem] 2xl:text-[3rem] text-lg text-[#5a5f69] leading-[2]">
              Looking to modify text in an image? With Fotor, you can edit text
              in images online within seconds. Just upload your image, remove
              the existing text utilizing the AI-powered object remover tool,
              and easily replace it with your desired text. Powered by
              cutting-edge AI technology, Fotor guarantees accurate and precise
              text removal, leaving no traces. Try Fotor out and enjoy quick and
              hassle-free image text editing.
            </p>
            <Link href="/edit">
              <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] 2xl:text-[2rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                Edit Text Now
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse sm:gap-20 gap-10">
        <div className="sm:w-[50%] flex flex-col gap-8">
          <h2 className="sm:text-[2.5rem] 2xl:text-[5rem] text-3xl">
            Edit Text in Image With Same Font
          </h2>
          <div className="flex flex-col gap-6">
            <p className="sm:text-[1.3rem] 2xl:text-[3rem] text-[#5a5f69] leading-[2] text-lg">
              Want to edit text in image while keeping the same font? Fotor’s
              got you covered. With over 1,000 fonts in our font generator to
              choose from, you can effortlessly find the perfect match for your
              original image. You can also quickly adjust text sizes, colors,
              and positions to achieve the perfect look. With Fotor, editing and
              changing text in images has never been so effortless and
              efficient.
            </p>
            <Link href="/edit">
              <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] 2xl:text-[2rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                Edit Text Now
              </p>
            </Link>
          </div>
        </div>
        <div className="sm:w-[50%] bg-red-200 h-100">
          <div>Hi</div>
        </div>
      </div>
      <div className="w-[93%] m-auto flex sm:flex-row flex-col sm:gap-20 gap-10">
        <div className="sm:w-[50%] bg-red-200 h-100">
          <div>Hi</div>
        </div>
        <div className="sm:w-[50%] flex flex-col gap-8">
          <h2 className="sm:text-[2.5rem] 2xl:text-[5rem] text-3xl">
            Update Marketing Visuals
          </h2>
          <div className="flex flex-col gap-6">
            <p className="sm:text-[1.3rem] 2xl:text-[3rem] text-[#5a5f69] leading-[2] text-lg">
              You don’t have to redesign your marketing materials just for a
              simple text change. Now you can modify the text in your brochures,
              flyers, and other marketing materials you want quickly and easily
              with our image text editing tool. No matter if you want to update
              a contact or a product price, you can get the job done in seconds.
              Effortlessly keep your marketing visuals up-to-date and covey the
              latest information.
            </p>
            <Link href="/edit">
              <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] 2xl:text-[2rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                Edit Text Now
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[93%] m-auto flex sm:flex-row flex-col-reverse sm:gap-20 gap-10">
        <div className="sm:w-[50%] flex flex-col gap-8">
          <h2 className="sm:text-[2.5rem] 2xl:text-[5rem] text-3xl">
            Add Your Own Personal Touch
          </h2>
          <div className="flex flex-col gap-6">
            <p className="sm:text-[1.3rem] 2xl:text-[3rem] text-[#5a5f69] leading-[2] text-lg">
              Make birthday wishes extra special. With just a few clicks, you
              can easily add text with your own heartfelt messages and personal
              notes, making the birthday greeting truly unique and personalized.
              Spread joy and make someone's day truly special by customizing
              your birthday wishes with personalized text.
            </p>
            <Link href="/edit">
              <p className="bg-[#2c7dfa] text-white font-medium px-10 py-3 w-max rounded-md sm:text-[1rem] 2xl:text-[2rem] text-lg border-2 hover:border-[#007aff] hover:bg-white hover:text-[#007aff]">
                Edit Text Now
              </p>
            </Link>
          </div>
        </div>
        <div className="sm:w-[50%] bg-red-200 h-100">
          <div>Hi</div>
        </div>
      </div>
    </div>
  );
}

export default About;
