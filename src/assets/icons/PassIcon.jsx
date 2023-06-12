import React from "react";

const PassIcon = (props) => {
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
          d="M18.5303 28.7197C18.5303 26.6487 20.2092 24.9697 22.2803 24.9697H33.7188C35.7899 24.9697 37.4688 26.6487 37.4688 28.7197V35.0001C37.4688 37.0712 35.7899 38.7501 33.7188 38.7501H22.2803C20.2092 38.7501 18.5303 37.0712 18.5303 35.0001V28.7197ZM22.2803 26.4697C21.0376 26.4697 20.0303 27.4771 20.0303 28.7197V35.0001C20.0303 36.2428 21.0376 37.2501 22.2803 37.2501H33.7188C34.9614 37.2501 35.9688 36.2428 35.9688 35.0001V28.7197C35.9688 27.4771 34.9614 26.4697 33.7188 26.4697H22.2803Z"
          fill="url(#paint0_linear_182_5023)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.9604 20.1629C24.2618 20.9502 23.7676 22.1227 23.7676 23.7729V25.7197C23.7676 26.1339 23.4318 26.4697 23.0176 26.4697C22.6034 26.4697 22.2676 26.1339 22.2676 25.7197V23.7729C22.2676 21.8087 22.8633 20.2661 23.8385 19.1673C24.8089 18.0738 26.1108 17.4699 27.4379 17.3005C30.0488 16.967 32.9705 18.3231 33.7094 21.2372C33.8112 21.6387 33.5683 22.0467 33.1668 22.1485C32.7653 22.2503 32.3573 22.0074 32.2555 21.6059C31.7488 19.6079 29.688 18.5253 27.6279 18.7884C26.6195 18.9171 25.6637 19.3704 24.9604 20.1629Z"
          fill="url(#paint1_linear_182_5023)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.0001 33.9878C27.503 33.9878 27.1001 33.5848 27.1001 33.0878L27.1001 30.6317C27.1001 30.1347 27.503 29.7317 28.0001 29.7317C28.4972 29.7317 28.9001 30.1347 28.9001 30.6317L28.9001 33.0878C28.9001 33.5848 28.4972 33.9878 28.0001 33.9878Z"
          fill="url(#paint2_linear_182_5023)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_182_5023"
            x1="11.9598"
            y1="25.5484"
            x2="21.1834"
            y2="41.4759"
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
            id="paint1_linear_182_5023"
            x1="18.2899"
            y1="17.6381"
            x2="24.7497"
            y2="27.7326"
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
            id="paint2_linear_182_5023"
            x1="27.1757"
            y1="35.4644"
            x2="29.6711"
            y2="34.6245"
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

export default PassIcon;
