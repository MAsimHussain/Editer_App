import React from "react";

export default function Button({
  children,
  type = "button",
  textColor = text - white,
  bgColor = "bg-blue-500",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${type}${textColor}
    ${className}`}
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}
