import React from "react";

function FontSize({ fontSize, setFontSize }) {
  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6 py-1">
      <div>
        <input
          type="number"
          className="border bg-white rounded-sm outline-none w-full p-2"
          placeholder="Enter font size"
          value={fontSize}
          onChange={handleFontSize}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-base text-white">Suggested Sizes</p>
          <div className="flex items-center text-[#838383]">
            <p className="text-sm font-semibold">More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </div>
        </div>
        <p className="font-semibold text-sm text-[#c0c0c0]">Sans-serif</p>
        <div className="border flex items-center gap-2 flex-wrap">
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "12px" }}>
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "16px" }}>
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "20px" }}>
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "24px" }}>
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "28px" }}>
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1 className="font-bold" style={{ fontSize: "32px" }}>
              Text
            </h1>
          </div>
        </div>
        <p className="font-semibold text-sm text-[#c0c0c0]">Lobster Two</p>
        <div className="border flex items-center gap-2 flex-wrap">
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "12px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "16px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "20px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "24px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "28px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "32px", fontFamily: "Lobster Two" }}
            >
              Text
            </h1>
          </div>
        </div>
        <p className="font-semibold text-sm text-[#c0c0c0]">Bebas Neue</p>
        <div className="border flex items-center gap-2 flex-wrap">
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "12px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "16px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "20px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "24px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "28px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
          <div className="h-18 w-[30%] bg-[#3c3d3f] text-white rounded-sm flex justify-center items-center">
            <h1
              className="font-bold"
              style={{ fontSize: "32px", fontFamily: "Bebas Neue" }}
            >
              Text
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FontSize;
