import React from "react";

const CrossIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L12 14L4 22C3.44772 22 3 22.4477 3 23C3 23.5523 3.44772 24 4 24C4.55228 24 5 23.5523 5 23L13 15L21 23C21.5523 23 22 23.4477 22 24C22.5523 24 23 23.5523 23 23C23 22.4477 22.5523 22 22 22L14 14L22 6C22.5523 6 23 5.55228 23 5C23 4.44772 22.5523 4 22 4C21.4477 4 21 4.44772 21 5L13 13L5 5C5 4.44772 4.55228 4 4 4Z"
      fill="currentColor"
    />
  </svg>
);

export {CrossIcon};
