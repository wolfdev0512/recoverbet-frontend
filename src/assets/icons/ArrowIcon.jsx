import React from "react";

const ArrowIcon = (props) => {
  return (
    <>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.811523"
          width="42"
          height="42"
          rx="8"
          fill="#292929"
        />
        <path
          d="M16.5 26.8115L26.5 16.8115"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 16.8115H26.5V26.8115"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default ArrowIcon;
