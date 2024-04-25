// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClinkGlassesIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClinkGlassesIcon(props: ClinkGlassesIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 1920 1920"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M661.3 229.9c-2.4.4-4.5 1-4.9 1.3-.8.9-10.3 39.3-16.4 66.3-22.9 101.9-41.2 220.6-42.7 277-1 36.6 3.2 72.6 14.2 121.5 12.8 56.8 40.3 136.2 69.8 201 7 15.5 7.7 17.6 10.6 33.3 1.8 9.2 4.1 20.9 5.2 26 4 17.7 3.7 75.7-.6 144.7-6.5 102.3-20.9 254.8-31.1 330-8.6 63.4-15.8 97.8-24.2 115.1l-3.7 7.6-29-.5c-60.1-1-102.1 5.6-111.3 17.3-2.2 2.8-3.9 13.6-2.8 18 1.7 6.6 15.6 15.4 35.9 22.7 34.9 12.4 88.5 22.1 150.2 27 24.6 1.9 81.6 1.6 99.5-.6 30.1-3.6 47-9.1 51.3-16.5 2.4-4.3 3.1-14.5 1.1-18.6-4.5-9.5-30.3-21.3-65.9-30-16.2-4-46.7-9.8-60.7-11.6l-9.6-1.2-2.1-7.1c-3.5-12-4.4-26.2-3.8-63.6 1-57.1 6.2-127.1 19.2-257 13.2-131.3 24.3-213.8 33.5-250.5 1.5-6.1 7.2-22 12.5-35.5 9.4-23.4 10.2-25.1 19.3-37.8 54.4-76.9 101.2-162.9 124.6-228.9 19.3-54.6 23.2-78.8 28.8-180.8 1.7-30.6 1.7-167.6 0-198.5-2.1-38.8-2.4-42.1-3.9-43.5-6.4-6.5-99.5-19-186.3-25-25.4-1.8-70.7-2.7-76.7-1.6zm537.7 62.8c-54.2 4.2-235.5 46-248.3 57.2-2.1 1.8-2.1-.3 1.4 46.6 7.4 97.4 26 224.1 42.6 289 20.4 80.2 87.9 188.4 182.8 293.1 11.3 12.5 14.1 16.9 33.8 54.1 13.6 25.8 35 101.7 63.6 225.6 32.6 141.4 50.8 231.8 59.1 294.7 2.8 20.4 3.6 48.3 1.8 56.9l-1.3 6.3-18.5 5.3c-52.1 15-91.7 32.7-104.8 46.9-2.3 2.5-4.4 5.7-4.8 7.2-.9 3.7 1.2 14.3 3.4 17.3 13.1 17.6 102.5 12.6 196.2-10.9 33.1-8.3 61.3-17.4 85.4-27.7 17.1-7.2 22.6-10 33.3-17.2 8.9-6 13.4-10.5 15.3-15.6 1.5-4.1-1.4-15.5-4.8-18.8-6.6-6.4-20.1-8.8-48.2-8.8-26.4 0-45.8 1.9-86.3 8.3l-7.8 1.2-2.5-3c-6.4-7.6-15.9-31.2-25.4-62.9-29.2-97.6-90.9-385.5-101.9-475.5-3.3-26.9-3.4-32.4-1.2-61.5 2-26.2 2.2-27.4 6.2-39.5 5.3-16.4 15-50.4 20-70.4 26.5-105.4 35.5-196.5 25.9-262.6-4.6-31.6-23.1-104.4-43.6-171.9-13.5-44.6-35.9-109.2-51.4-148.9-6.3-16.1-5.6-15.6-20-14.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClinkGlassesIcon;
/* prettier-ignore-end */