import React, { useEffect } from "react";

function Main({
  text,
  fontSize,
  fontFamily,
  fontBg,
  fontColor,
  isDraggable,
  setIsDraggable,
  position,
  setPosition,
  offset,
  setOffset,
}) {
  const handleMouseDown = (e) => {
    setIsDraggable(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggable) {
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDraggable(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggable, offset, setPosition, setIsDraggable]);

  return (
    <div>
      <div
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: `${fontFamily}`,
          color: `${fontColor}`,
        }}
      >
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            backgroundColor: `${fontBg}`,
            cursor: isDraggable ? "grabbing" : "grab",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          {/* <img
            src="https://i.imgur.com/wwdNVPQ.png"
            className="h-screen w-100 object-cover"
          /> */}
          {text}
        </div>
      </div>
    </div>
  );
}

export default Main;
