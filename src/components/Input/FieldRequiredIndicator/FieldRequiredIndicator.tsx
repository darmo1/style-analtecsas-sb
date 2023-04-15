import React, { FC } from "react";
import { FieldRequiredIndicatorProps } from "./FieldRequired.types";

const FieldRequiredIndicator: FC<FieldRequiredIndicatorProps> = ({
  showOptional = false,
  showRequired = false,
  className = "",
}) => {
  return (
    <>
      <span
        className={`${showRequired && "text-base"}
        ${showOptional && "pl-4"}
        ${className}
        `}
      >
        {showRequired && "*"}
        {showOptional && "Optional"}
      </span>
    </>
  );
};

export default FieldRequiredIndicator;
