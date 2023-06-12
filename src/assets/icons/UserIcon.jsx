import React from "react";

const UserIcon = (props) => {
  return (
    <>
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="56"
          height="56"
          rx="12"
          fill={
            props.authError
              ? "#AF1D1D"
              : props.touched
              ? props.error
                ? "#1DAF51"
                : "#AF1D1D"
              : "#F6BE76"
          }
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.9996 18.75C26.0469 18.75 24.4639 20.333 24.4639 22.2857C24.4639 24.2384 26.0469 25.8214 27.9996 25.8214C29.9523 25.8214 31.5353 24.2384 31.5353 22.2857C31.5353 20.333 29.9523 18.75 27.9996 18.75ZM22.9639 22.2857C22.9639 19.5046 25.2184 17.25 27.9996 17.25C30.7807 17.25 33.0353 19.5046 33.0353 22.2857C33.0353 25.0669 30.7807 27.3214 27.9996 27.3214C25.2184 27.3214 22.9639 25.0669 22.9639 22.2857Z"
          fill="url(#paint0_linear_0_1944)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.3096 32.1661C21.8668 30.5023 24.3994 29.25 28.2857 29.25C32.172 29.25 34.7046 30.5023 36.2618 32.1661C37.7995 33.8088 38.3214 35.7847 38.3214 37.1429C38.3214 37.5571 37.9856 37.8929 37.5714 37.8929H19C18.5858 37.8929 18.25 37.5571 18.25 37.1429C18.25 35.7847 18.772 33.8088 20.3096 32.1661ZM19.8138 36.3929H36.7576C36.6016 35.4301 36.14 34.2309 35.1667 33.1911C33.9382 31.8786 31.828 30.75 28.2857 30.75C24.7434 30.75 22.6332 31.8786 21.4047 33.1911C20.4314 34.2309 19.9699 35.4301 19.8138 36.3929Z"
          fill="url(#paint1_linear_0_1944)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1944"
            x1="28.6674"
            y1="21.3562"
            x2="32.6783"
            y2="17.5658"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stopColor={
                props.authError
                  ? "#ffffff"
                  : props.touched
                  ? "#ffffff"
                  : "#150D28"
              }
            />
            <stop
              offset="1"
              stopColor={
                props.authError
                  ? "#ffffff"
                  : props.touched
                  ? "#ffffff"
                  : "#150D28"
              }
            />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1944"
            x1="29.6166"
            y1="32.7738"
            x2="32.2182"
            y2="27.0642"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              stopColor={
                props.authError
                  ? "#ffffff"
                  : props.touched
                  ? "#ffffff"
                  : "#150D28"
              }
            />
            <stop
              offset="1"
              stopColor={
                props.authError
                  ? "#ffffff"
                  : props.touched
                  ? "#ffffff"
                  : "#150D28"
              }
            />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default UserIcon;
