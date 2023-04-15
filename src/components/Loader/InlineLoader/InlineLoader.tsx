import React, { FC } from "react";
import { InlineLoaderProps } from "./InlineLoader.types";
import { useTimeout } from "../ComponentLoader/ComponentLoader";
import styles from "./styles.module.css";

const InlineLoader: FC<InlineLoaderProps> = ({
  className,
  darkMode,
  timeout,
  timeoutCallback,
  message,
  messageClassName,
}) => {
  useTimeout(timeout, timeoutCallback);
  const first = "ml-0";
  const square = `my-0 mx-2 w-4 h-4 bg-gray-700 ${styles['square-animation']}`;
  const last = "mr-0";
  return (
    <div className={`${styles['inline-loader']} ${styles['preloader']} inline-block`}>
      <div className="flex justify-start">
        <div className={`${square} ${first}`}></div>
        <div className={square}></div>
        <div className={square}></div>
        <div className={square}></div>
        <div className={`${square} ${last}`}></div>
      </div>
      { message && (
        <p className={`text-base  mb-0 mt-4 ${messageClassName}`}>{message}</p>
      )}
    </div>
  );
};

export default InlineLoader;
