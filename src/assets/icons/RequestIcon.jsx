import React from "react";

const RequestIcon = (props) => {
  return (
    <>
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.75 2.12109C2.50736 2.12109 1.5 3.12845 1.5 4.3711V7.08538C1.5 7.49959 1.16421 7.83538 0.75 7.83538C0.335786 7.83538 0 7.49959 0 7.08538V4.3711C0 2.30003 1.67893 0.621094 3.75 0.621094H6.46429C6.8785 0.621094 7.21429 0.95688 7.21429 1.37109C7.21429 1.78531 6.8785 2.12109 6.46429 2.12109H3.75Z"
          fill={props.color ? props.color : "#C5C5C5"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.5 18.3711C1.5 19.6137 2.50736 20.6211 3.75 20.6211L6.46429 20.6211C6.8785 20.6211 7.21429 20.9569 7.21429 21.3711C7.21429 21.7853 6.8785 22.1211 6.46429 22.1211L3.75 22.1211C1.67893 22.1211 -7.33884e-08 20.4422 -1.63918e-07 18.3711L-2.82563e-07 15.6568C-3.00669e-07 15.2426 0.335786 14.9068 0.75 14.9068C1.16421 14.9068 1.5 15.2426 1.5 15.6568L1.5 18.3711Z"
          fill={props.color ? props.color : "#C5C5C5"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.75 20.6211C18.9926 20.6211 20 19.6137 20 18.3711L20 15.6568C20 15.2426 20.3358 14.9068 20.75 14.9068C21.1642 14.9068 21.5 15.2426 21.5 15.6568L21.5 18.3711C21.5 20.4422 19.8211 22.1211 17.75 22.1211L15.0357 22.1211C14.6215 22.1211 14.2857 21.7853 14.2857 21.3711C14.2857 20.9569 14.6215 20.6211 15.0357 20.6211L17.75 20.6211Z"
          fill={props.color ? props.color : "#C5C5C5"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 4.37109C20 3.12845 18.9926 2.12109 17.75 2.12109L15.0357 2.12109C14.6215 2.12109 14.2857 1.78531 14.2857 1.37109C14.2857 0.95688 14.6215 0.621093 15.0357 0.621093L17.75 0.621094C19.8211 0.621094 21.5 2.30002 21.5 4.37109L21.5 7.08538C21.5 7.49959 21.1642 7.83538 20.75 7.83538C20.3358 7.83538 20 7.49959 20 7.08538L20 4.37109Z"
          fill={props.color ? props.color : "#C5C5C5"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.42871 11.3711C1.42871 10.9569 1.7645 10.6211 2.17871 10.6211H19.3216C19.7358 10.6211 20.0716 10.9569 20.0716 11.3711C20.0716 11.7853 19.7358 12.1211 19.3216 12.1211H2.17871C1.7645 12.1211 1.42871 11.7853 1.42871 11.3711Z"
          fill={props.color ? props.color : "#C5C5C5"}
        />
      </svg>
    </>
  );
};

export default RequestIcon;
