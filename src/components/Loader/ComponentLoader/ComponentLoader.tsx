import React, { FC, useEffect, useState } from "react";
import { ComponentLoaderProps } from "./ComponentLoader.type";
import styles from "./style.module.css";
import Loader from "../Loader/Loader";

const ComponentLoader: FC<ComponentLoaderProps> = ({
  children,
  className,
  contentClassName,
  textClassName,
  timeout,
  timeoutCallback,
  size,
  ...rest
}) => {
  useTimeout(timeout, timeoutCallback);

  return (
    <div
      className={`absolute inset-0 z-50 bg-gray-300 ${styles["preloader"]}`}
      {...rest}
    >
      <div>
        <Loader className="text-center" size={size} />
        {children && (
          <div
            className={`text-center py-8 ${contentClassName} ${
              children && "bg-white "
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentLoader;

export function useTimeout(timeout: number = 15000, timeoutCallback: any): boolean {
  const [timeoutOcurred, setTimeoutOcurred] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (timeoutCallback) timeoutCallback();
      setTimeoutOcurred(true);
    }, timeout);

    return () => clearTimeout(timerId);
  }, [timeout]);

  return timeoutOcurred;
}
