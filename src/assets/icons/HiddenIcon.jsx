import React from "react";

const HiddenIcon = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.0303 3.96967C20.3232 4.26256 20.3232 4.73744 20.0303 5.03033L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L18.9697 3.96967C19.2626 3.67678 19.7374 3.67678 20.0303 3.96967Z"
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
          d="M20.0303 3.96967C20.3232 4.26256 20.3232 4.73744 20.0303 5.03033L5.03033 20.0303C4.73744 20.3232 4.26256 20.3232 3.96967 20.0303C3.67678 19.7374 3.67678 19.2626 3.96967 18.9697L18.9697 3.96967C19.2626 3.67678 19.7374 3.67678 20.0303 3.96967Z"
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
          d="M9.69824 13.9236C10.2486 14.5815 11.0756 15 12.0005 15C13.6573 15 15.0005 13.6569 15.0005 12C15.0005 11.0752 14.582 10.2481 13.9241 9.69775L9.69824 13.9236Z"
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
          d="M15.822 6.11727C14.6384 5.59564 13.347 5.25 11.9999 5.25C9.2381 5.25 6.71 6.70298 4.86564 8.14686C3.00441 9.60393 1.73074 11.1378 1.46279 11.4705C1.21292 11.7808 1.21293 12.2192 1.46279 12.5295C1.73075 12.8622 3.00441 14.3961 4.86564 15.8531C5.08877 16.0278 5.32192 16.2026 5.56427 16.375L6.64134 15.2979C6.34776 15.0959 6.06359 14.886 5.79028 14.672C4.48833 13.6528 3.4921 12.5893 2.97775 12C3.4921 11.4107 4.48833 10.3472 5.79028 9.32797C7.54185 7.95674 9.73999 6.75 11.9999 6.75C12.9088 6.75 13.8077 6.94518 14.6715 7.26774L15.822 6.11727ZM7.95577 16.1048C9.21871 16.7852 10.5974 17.25 11.9999 17.25C14.2599 17.25 16.458 16.0433 18.2096 14.672C19.5115 13.6528 20.5078 12.5893 21.0221 12C20.5078 11.4107 19.5115 10.3472 18.2096 9.32797C17.5676 8.82541 16.8657 8.34495 16.1227 7.93789L17.2229 6.83771C17.9174 7.24542 18.5591 7.69658 19.1342 8.14686C20.9954 9.60393 22.2691 11.1378 22.5371 11.4705C22.7869 11.7808 22.7869 12.2192 22.5371 12.5295C22.2691 12.8622 20.9955 14.3961 19.1342 15.8531C17.2899 17.297 14.7618 18.75 11.9999 18.75C10.131 18.75 8.36906 18.0846 6.85362 17.207L7.95577 16.1048Z"
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
      </svg>
    </>
  );
};

export default HiddenIcon;
