import React, { FC } from "react";
import { LoaderProps } from "./Loader.types";
import style from "./style.module.css";

const Loader: FC<LoaderProps> = ({
  className = "",
  height = "100",
  width = "100",
  darkMode = false,
  size = "",
}) => {
  return (
    <div className={className}>
      <svg
        className={`${style['loading']} ${darkMode ? style['dark'] : ''} ${ size ? ` ${style[size]}` : '' }`}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {" "}
        <title>Loading/Circle</title> <desc>Loading/Circle</desc>{" "}
        <g
          id="Loading/Circle"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          {" "}
          <path
            d="M16.1682,6.97221818 L20.0545636,3.08530909 C18.0642,1.28530909 15.4678364,0.142581818 12.6080182,0.000218181818 L12.6080182,5.49894545 C13.9552909,5.62330909 15.1836545,6.15512727 16.1682,6.97221818"
            id="Shape-1"
          ></path>{" "}
          <path
            d="M18.5010545,11.3923091 L24.0003273,11.3923091 C23.8574182,8.53249091 22.7152364,5.93612727 20.9146909,3.94521818 L17.0277818,7.83212727 C17.8448727,8.81612727 18.3766909,10.0450364 18.5010545,11.3923091"
            id="Shape-2"
          ></path>{" "}
          <path
            d="M18.5010545,12.6084 C18.3766909,13.9551273 17.8448727,15.1840364 17.0277818,16.1680364 L20.9146909,20.0549455 C22.7146909,18.0640364 23.8574182,15.4676727 24.0003273,12.6084 L18.5010545,12.6084 Z"
            id="Shape-3"
          ></path>{" "}
          <path
            d="M12.6081273,18.5013273 L12.6081273,24.0000545 C15.4679455,23.8571455 18.0637636,22.7149636 20.0552182,20.9149636 L16.1683091,17.0280545 C15.1837636,17.8451455 13.9548545,18.3764182 12.6081273,18.5013273"
            id="Shape-4"
          ></path>{" "}
          <path
            d="M7.83190909,17.0279455 L3.94554545,20.9148545 C5.93590909,22.7148545 8.53227273,23.8575818 11.3920909,23.9999455 L11.3920909,18.5012182 C10.0448182,18.3768545 8.81645455,17.8450364 7.83190909,17.0279455"
            id="Shape-5"
          ></path>{" "}
          <path
            d="M5.49910909,12.6084 L-0.000163636364,12.6084 C0.142745455,15.4676727 1.28547273,18.0640364 3.08547273,20.0549455 L6.97238182,16.1680364 C6.15529091,15.1840364 5.62347273,13.9551273 5.49910909,12.6084"
            id="Shape-6"
          ></path>{" "}
          <path
            d="M6.97194545,7.83196364 L3.08558182,3.94505455 C1.28558182,5.93596364 0.142309091,8.53178182 -5.45454545e-05,11.3921455 L5.49921818,11.3921455 C5.62358182,10.0454182 6.15485455,8.81650909 6.97194545,7.83196364"
            id="Shape-7"
          ></path>{" "}
          <path
            d="M11.3920364,5.49883636 L11.3920364,0.000109090909 C8.53221818,0.143018182 5.9364,1.2852 3.94549091,3.0852 L7.83185455,6.97210909 C8.8164,6.15501818 10.0453091,5.62374545 11.3920364,5.49883636"
            id="Shape-8"
          ></path>{" "}
        </g>{" "}
      </svg>
    </div>
  );
};

export default Loader;
