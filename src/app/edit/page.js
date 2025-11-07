"use client";

import * as htmlToImage from "html-to-image";
import Color from "../components/Color";
import Effects from "../components/Effects";
import Elements from "../components/Elements";
import FontFamily from "../components/FontFamily";
import FontSize from "../components/FontSize";
import More from "../components/More";
import Text from "../components/Text";
import Uploads from "../components/Uploads";
import React, { useEffect, useState } from "react";

export default function Edit() {
    const [textDivShow, setTextDivShow] = useState(true);
    const [fontFamilyDivShow, setFontFamilyDivShow] = useState(false);
    const [textEffectsDivShow, setTextEffectsDivShow] = useState(false);
    const [fontSizeDivShow, setFontSizeDivShow] = useState(false);
    const [elementsDivShow, setElementsDivShow] = useState(false);
    const [textColorDivShow, setTextColorDivShow] = useState(false);
    const [uploadsDivShow, setUploadsDivShow] = useState(false);
    const [moreDivShow, setMoreDivShow] = useState(false);
    const [image, setImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [isDraggable, setIsDraggable] = useState(false);
    const [position, setPosition] = useState([]);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [activeTextIndex, setActiveTextIndex] = useState(null);
    const [subMenuShow, setSubMenuShow] = useState(true);

    const [isElementsDraggable, setIsElementsDraggable] = useState(false);
    const [elementsPosition, setElementsPosition] = useState([]);
    const [elementsOffset, setElementsOffset] = useState({ x: 0, y: 0 });
    const [activeElementsIndex, setActiveElementsIndex] = useState(null);

    const [textareaTextValue, setTextareaTextValue] = useState("");
    const [text, setText] = useState([]);
    const [textButtonClick, setTextButtonClick] = useState(true);
    const [fontSize, setFontSize] = useState(22);
    const [boldClick, setBoldClick] = useState(false);
    const [italicClick, setItalicClick] = useState(false);
    const [underlineClick, setUnderlineClick] = useState(false);
    const [spaceClick, setSpaceClick] = useState(false);
    const [textShadowClick, setTextShadowClick] = useState(false);
    const [elements, setElements] = useState([]);

    const [textEditClick, setTextEditClick] = useState(false);
    const [textFamilyClick, setTextFamilyClick] = useState(false);
    const [textEffectClick, setTextEffectClick] = useState(false);
    const [fontSizeFamilyClick, setFontSizeFamilyClick] = useState(false);
    const [themeToggleClick, setThemeToggleClick] = useState(false);

    const [textColorClick, setTextColorClick] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            // localStorage.setItem("upload-image", URL.createObjectURL(file));
        }
    };

    const handleZoomIn = () => {
        setZoom((prev) => Math.min(prev + 0.1, 3));
    };

    const handleZoomOut = () => {
        setZoom((prev) => Math.max(prev - 0.1, 0.5));
    };

    const handleShowText = () => {
        setTextDivShow(true);
        setFontFamilyDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowFontFamily = () => {
        setTextDivShow(false);
        setFontFamilyDivShow(true);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowTextEffects = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(true);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowFontSize = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(true);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowElements = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(true);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowTextColor = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(true);
        setUploadsDivShow(false);
        setMoreDivShow(false);
    };

    const handleShowUploads = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(true);
        setMoreDivShow(false);
    };

    const handleShowMore = () => {
        setFontFamilyDivShow(false);
        setTextDivShow(false);
        setTextEffectsDivShow(false);
        setFontSizeDivShow(false);
        setElementsDivShow(false);
        setTextColorDivShow(false);
        setUploadsDivShow(false);
        setMoreDivShow(true);
    };

    const handleMouseDown = (e, index) => {
        setActiveTextIndex(index);
        setIsDraggable(true);
        setOffset({
            x: e.clientX - (position[index]?.x || 100),
            y: e.clientY - (position[index]?.y || 0),
        });
    };

    const handleTouchStart = (e, index) => {
        const touch = e.touches[0];
        setActiveTextIndex(index);
        setIsDraggable(true);
        setOffset({
            x: touch.clientX - (position[index]?.x || 100),
            y: touch.clientY - (position[index]?.y || 0),
        });
    };

    const handleElementsMouseDown = (e, index) => {
        setActiveElementsIndex(index);
        setIsElementsDraggable(true);
        setElementsOffset({
            x: e.clientX - (elementsPosition[index]?.x || 100),
            y: e.clientY - (elementsPosition[index]?.y || 0),
        });
    };

    const handleElementsTouchStart = (e, index) => {
        const touch = e.touches[0];
        setActiveElementsIndex(index);
        setIsElementsDraggable(true);
        setElementsOffset({
            x: touch.clientX - (elementsPosition[index]?.x || 100),
            y: touch.clientY - (elementsPosition[index]?.y || 0),
        });
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDraggable && activeTextIndex !== null) {
                const newPositions = [...position];
                newPositions[activeTextIndex] = {
                    x: e.clientX - offset.x,
                    y: e.clientY - offset.y,
                };
                setPosition(newPositions);
            }
        };

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            if (isDraggable && activeTextIndex !== null) {
                const newPositions = [...position];
                newPositions[activeTextIndex] = {
                    x: touch.clientX - offset.x,
                    y: touch.clientY - offset.y,
                };
                setPosition(newPositions);
            }
        };

        const handleMouseUp = () => {
            setIsDraggable(false);
            setActiveTextIndex(null);
        };

        const handleTouchEnd = () => {
            setIsDraggable(false);
            setActiveTextIndex(null);
        };

        const handleElementsMouseMove = (e) => {
            if (isElementsDraggable && activeElementsIndex !== null) {
                const newElementsPositions = [...elementsPosition];
                newElementsPositions[activeElementsIndex] = {
                    x: e.clientX - elementsOffset.x,
                    y: e.clientY - elementsOffset.y,
                };
                setElementsPosition(newElementsPositions);
            }
        };

        const handleElementsTouchMove = (e) => {
            const touch = e.touches[0];
            if (isElementsDraggable && activeElementsIndex !== null) {
                const newElementsPositions = [...elementsPosition];
                newElementsPositions[activeElementsIndex] = {
                    x: touch.clientX - elementsOffset.x,
                    y: touch.clientY - elementsOffset.y,
                };
                setElementsPosition(newElementsPositions);
            }
        };

        const handleElementsMouseUp = () => {
            setIsElementsDraggable(false);
            setActiveElementsIndex(null);
        };

        const handleElementsTouchEnd = () => {
            setIsElementsDraggable(false);
            setActiveElementsIndex(null);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleElementsMouseMove);
        window.addEventListener("mouseup", handleElementsMouseUp);

        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);
        window.addEventListener("touchmove", handleElementsTouchMove);
        window.addEventListener("touchend", handleElementsTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleElementsMouseMove);
            window.removeEventListener("mouseup", handleElementsMouseUp);

            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchmove", handleElementsTouchMove);
            window.removeEventListener("touchmove", handleElementsTouchMove);
            window.removeEventListener("touchend", handleElementsTouchEnd);
        };
    }, [
        isDraggable,
        offset,
        setPosition,
        setIsDraggable,
        activeTextIndex,
        position,
        elementsPosition,
        activeElementsIndex,
        setIsElementsDraggable,
        setElementsPosition,
        elementsOffset,
        isElementsDraggable,
    ]);

    const handleDownload = () => {
        const node = document.getElementById("export-image");
        htmlToImage.toPng(node).then((dataUrl) => {
            var link = document.createElement("a");
            link.download = "cotor-edit.png";
            link.href = dataUrl;
            link.click();
        });
    };

    return (
        <div className="relative flex w-full sm:flex-row flex-col-reverse">
            <div
                className={`sm:static absolute bottom-0 z-[1000] flex sm:flex-row flex-col-reverse ${
                    subMenuShow ? "sm:w-140" : "sm:w-max"
                } w-full`}
            >
                <div
                    className={`flex sm:flex-col items-center flex-row ${
                        subMenuShow ? "sm:w-[22%]" : "sm:w-[100%]"
                    } w-full sm:h-[100dvh] sm:gap-3 gap-1 bg-[#161619] text-[#9da2ad] py-2 overflow-y-auto scrollbar`}
                >
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            textDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowText}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-type-icon lucide-type"
                        >
                            <path d="M12 4v16" />
                            <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
                            <path d="M9 20h6" />
                        </svg>
                        <p className="text-xs text-center">Add Text</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            fontFamilyDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowFontFamily}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-text-initial-icon lucide-text-initial"
                        >
                            <path d="M15 5h6" />
                            <path d="M15 12h6" />
                            <path d="M3 19h18" />
                            <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
                            <path d="M3.92 10h6.16" />
                        </svg>
                        <p className="text-xs text-center">Font-Family</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            textEffectsDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowTextEffects}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-sparkle-icon lucide-sparkle"
                        >
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                        </svg>
                        <p className="text-xs text-center">Effects</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            fontSizeDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowFontSize}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-aarrow-up-icon lucide-a-arrow-up"
                        >
                            <path d="m14 11 4-4 4 4" />
                            <path d="M18 16V7" />
                            <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
                            <path d="M3.304 13h6.392" />
                        </svg>
                        <p className="text-xs text-center">Font Size</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            elementsDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowElements}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-boxes-icon lucide-boxes"
                        >
                            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                            <path d="m7 16.5-4.74-2.85" />
                            <path d="m7 16.5 5-3" />
                            <path d="M7 16.5v5.17" />
                            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
                            <path d="m17 16.5-5-3" />
                            <path d="m17 16.5 4.74-2.85" />
                            <path d="M17 16.5v5.17" />
                            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
                            <path d="M12 8 7.26 5.15" />
                            <path d="m12 8 4.74-2.85" />
                            <path d="M12 13.5V8" />
                        </svg>
                        <p className="text-xs text-center">Elements</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            textColorDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowTextColor}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-palette-icon lucide-palette"
                        >
                            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                            <circle
                                cx="13.5"
                                cy="6.5"
                                r=".5"
                                fill="currentColor"
                            />
                            <circle
                                cx="17.5"
                                cy="10.5"
                                r=".5"
                                fill="currentColor"
                            />
                            <circle
                                cx="6.5"
                                cy="12.5"
                                r=".5"
                                fill="currentColor"
                            />
                            <circle
                                cx="8.5"
                                cy="7.5"
                                r=".5"
                                fill="currentColor"
                            />
                        </svg>
                        <p className="text-xs text-center">Color</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            uploadsDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowUploads}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-image-up-icon lucide-image-up"
                        >
                            <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                            <path d="m14 19.5 3-3 3 3" />
                            <path d="M17 22v-5.5" />
                            <circle cx="9" cy="9" r="2" />
                        </svg>
                        <p className="text-xs text-center">Uploads</p>
                    </div>
                    <div
                        className={`sm:w-full min-w-[80px] cursor-pointer p-2 gap-1 flex flex-col items-center justify-center hover:bg-[#27282c] hover:text-white ${
                            moreDivShow ? "bg-[#27282c] text-white" : ""
                        }`}
                        onClick={handleShowMore}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-ellipsis-icon lucide-ellipsis"
                        >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="19" cy="12" r="1" />
                            <circle cx="5" cy="12" r="1" />
                        </svg>
                        <p className="text-xs text-center">More</p>
                    </div>
                </div>
                {subMenuShow && (
                    <div
                        className={`p-2 ${
                            subMenuShow ? "sm:w-[78%] " : "sm:w-0"
                        } sm:h-[100dvh] h-80 bg-[#2b2b2b] overflow-y-auto tools-scrollbar`}
                    >
                        {textDivShow && (
                            <Text
                                textareaTextValue={textareaTextValue}
                                setTextareaTextValue={setTextareaTextValue}
                                text={text}
                                setText={setText}
                                textButtonClick={textButtonClick}
                                setTextEditClick={setTextEditClick}
                            />
                        )}
                        {fontFamilyDivShow && (
                            <FontFamily
                                text={text}
                                setText={setText}
                                setFontSizeFamilyClick={setFontSizeFamilyClick}
                                textFamilyClick={textFamilyClick}
                                setTextFamilyClick={setTextFamilyClick}
                            />
                        )}
                        {textEffectsDivShow && (
                            <Effects
                                text={text}
                                setText={setText}
                                setTextEffectClick={setTextEffectClick}
                            />
                        )}
                        {fontSizeDivShow && (
                            <FontSize
                                text={text}
                                setText={setText}
                                fontSize={fontSize}
                                setFontSize={setFontSize}
                                setTextFamilyClick={setTextFamilyClick}
                                setFontSizeFamilyClick={setFontSizeFamilyClick}
                            />
                        )}
                        {elementsDivShow && (
                            <Elements setElements={setElements} />
                        )}
                        {textColorDivShow && (
                            <Color
                                text={text}
                                setText={setText}
                                setTextColorClick={setTextColorClick}
                                boldClick={boldClick}
                                setBoldClick={setBoldClick}
                                italicClick={italicClick}
                                setItalicClick={setItalicClick}
                                underlineClick={underlineClick}
                                setUnderlineClick={setUnderlineClick}
                                spaceClick={spaceClick}
                                setSpaceClick={setSpaceClick}
                                textShadowClick={textShadowClick}
                                setTextShadowClick={setTextShadowClick}
                            />
                        )}
                        {uploadsDivShow && <Uploads setImage={setImage} />}
                        {moreDivShow && (
                            <More
                                themeToggleClick={themeToggleClick}
                                setThemeToggleClick={setThemeToggleClick}
                            />
                        )}
                    </div>
                )}
                <div className="bg-[#2b2b2b] flex justify-center items-center text-white cursor-pointer">
                    <div className="bg-[#4a4a4a] sm:py-4 sm:px-0 px-4">
                        {subMenuShow ? (
                            <>
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
                                    className="lucide lucide-chevron-down-icon lucide-chevron-down sm:hidden"
                                    onClick={() => setSubMenuShow(false)}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
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
                                    className="lucide lucide-chevron-left-icon lucide-chevron-left hidden sm:flex"
                                    onClick={() => setSubMenuShow(false)}
                                >
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </>
                        ) : (
                            <>
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
                                    className="lucide lucide-chevron-right-icon lucide-chevron-right hidden sm:flex"
                                    onClick={() => setSubMenuShow(true)}
                                >
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
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
                                    className="lucide lucide-chevron-up-icon lucide-chevron-up sm:hidden"
                                    onClick={() => setSubMenuShow(true)}
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative w-[100%]">
                {image && (
                    <div
                        className="absolute top-0 left-0 z-[100] flex items-center justify-between w-full p-1 
     bg-white/30 backdrop-blur-lg border border-white/20 shadow-md"
                    >
                        <div className="bg-[#161619] flex items-center gap-4">
                            <button
                                onClick={handleZoomOut}
                                className="bg-[#27282c] text-white py-2 px-4 hover:bg-gray-500"
                            >
                                -
                            </button>
                            <span className="text-sm text-white font-semibold">
                                {(zoom * 100).toFixed(0)}%
                            </span>
                            <button
                                onClick={handleZoomIn}
                                className="bg-[#27282c] text-white py-2 px-4 hover:bg-gray-500"
                            >
                                +
                            </button>
                        </div>
                        <div className="flex items-center gap-2">
                            <div
                                className="cursor-pointer bg-[#2c7dfa] hover:bg-[#0052d0] text-white font-medium px-4 py-2 w-max rounded-md text-[0.9rem]"
                                onClick={handleDownload}
                            >
                                <button className="cursor-pointer">Save</button>
                            </div>
                            <div className="bg-black rounded-sm text-white p-[8.5px] hover:bg-white hover:text-black border hover:border-black cursor-pointer">
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
                                    className="lucide lucide-copy-icon lucide-copy"
                                >
                                    <rect
                                        width="14"
                                        height="14"
                                        x="8"
                                        y="8"
                                        rx="2"
                                        ry="2"
                                    />
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`${themeToggleClick ? "bg-black" : "bg-[#ebebeb]"} w-[100%] h-[100dvh] flex justify-center items-center`}>
                    {image ? (
                        <div
                            className="relative h-[90%] w-[95%] overflow-hidden rounded-md bg-white flex items-center justify-center"
                            id="export-image"
                        >
                            <img
                                src={image}
                                alt="Uploaded"
                                className="transition-transform w-[95%] h-[90vh] duration-300 ease-in-out object-contain"
                                style={{
                                    transform: `scale(${zoom})`,
                                }}
                            />
                            {text.length > 0 &&
                                text.map((word, index) => (
                                    <div
                                        className="absolute flex justify-center items-center w-[100%]"
                                        key={index}
                                    >
                                        <div
                                            onMouseDown={(e) =>
                                                handleMouseDown(e, index)
                                            }
                                            onTouchStart={(e) =>
                                                handleTouchStart(e, index)
                                            }
                                            style={{
                                                fontFamily: word.fontFamilyData,
                                                position: "absolute",
                                                cursor:
                                                    isDraggable &&
                                                    activeTextIndex === index
                                                        ? "grabbing"
                                                        : "grab",
                                                left: `${position[index]?.x}px`,
                                                top: `${position[index]?.y}px`,
                                                color: textColorClick
                                                    ? word.colorData
                                                    : "",
                                            }}
                                            className={`p-2 max-w-[90%] ${
                                                textEditClick
                                                    ? word.textData
                                                    : ""
                                            } text-center ${
                                                boldClick ? word.boldData : ""
                                            } ${
                                                italicClick
                                                    ? word.italicData
                                                    : ""
                                            } ${
                                                underlineClick
                                                    ? word.underlineData
                                                    : ""
                                            } 
                                        ${spaceClick ? word.spaceData : ""} 
                                        ${
                                            textShadowClick
                                                ? word.shadowData
                                                : ""
                                        } ${
                                                textEffectClick
                                                    ? word.effectData
                                                    : ""
                                            } ${word.fontSizeData}`}
                                        >
                                            {" "}
                                            {word.value}
                                        </div>
                                    </div>
                                ))}
                            {elements.length > 0 &&
                                elements.map((element, index) => (
                                    <div
                                        onMouseDown={(e) =>
                                            handleElementsMouseDown(e, index)
                                        }
                                        onTouchStart={(e) =>
                                            handleElementsTouchStart(e, index)
                                        }
                                        className="absolute flex justify-center items-center"
                                        key={index}
                                        style={{
                                            position: "absolute",
                                            cursor:
                                                isElementsDraggable &&
                                                activeElementsIndex === index
                                                    ? "grabbing"
                                                    : "grab",
                                            left: `${elementsPosition[index]?.x}px`,
                                            top: `${elementsPosition[index]?.y}px`,
                                        }}
                                    >
                                        <div className="h-18 flex justify-center items-center">
                                            {element}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className="w-[95%] h-[95%] border-2 bg-white rounded-md border-dashed cursor-pointer overflow-auto upload">
                            <div className="relative flex flex-col justify-center items-center h-full">
                                <label className="w-[100%] h-[100%] cursor-pointer flex flex-col justify-center items-center gap-2">
                                    <div className="flex flex-col justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="36"
                                            height="36"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-[#232323] lucide lucide-image-up-icon lucide-image-up"
                                        >
                                            <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
                                            <path d="m14 19.5 3-3 3 3" />
                                            <path d="M17 22v-5.5" />
                                            <circle cx="9" cy="9" r="2" />
                                        </svg>
                                        <h2 className="sm:text-[1.5rem] 2xl:text-[2.4rem] text-xl text-[#414751] font-bold text-center">
                                            Upload your own images
                                        </h2>
                                        <p className="opacity-75">
                                            Supports JPG, PNG etc
                                        </p>
                                    </div>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                    />

                                    <div className="sm:text-[1rem] text-base w-max text-white px-6 py-2 rounded-full flex items-center gap-4 bg-[linear-gradient(90deg,rgba(2,0,36,1)_0%,rgba(9,9,121,1)_35%,rgba(0,212,255,1)_100%)]">
                                        <span>Upload image</span>
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
                                            className="lucide lucide-move-right-icon lucide-move-right"
                                        >
                                            <path d="M18 8L22 12L18 16" />
                                            <path d="M2 12H22" />
                                        </svg>
                                    </div>
                                </label>
                                <div className="absolute top-1/2 sm:mt-20 2xl:mt-23 mt-21 flex flex-col justify-center items-center gap-2 w-max">
                                    <p className="text-xs">
                                        No photo? Try one of ours.
                                    </p>
                                    <div className="w-full flex justify-center items-center gap-2">
                                        <img
                                            src="demo-image-1.jpg"
                                            className="w-14 h-14 onject-cover rounded-sm cursor-pointer"
                                            onClick={() =>
                                                setImage("demo-image-1.jpg")
                                            }
                                        />
                                        <img
                                            src="demo-image-2.jpg"
                                            className="w-14 h-14 onject-cover rounded-sm cursor-pointer"
                                            onClick={() =>
                                                setImage("demo-image-2.jpg")
                                            }
                                        />
                                        <img
                                            src="demo-image-1.jpg"
                                            className="w-14 h-14 onject-cover rounded-sm cursor-pointer"
                                            onClick={() =>
                                                setImage("demo-image-1.jpg")
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
