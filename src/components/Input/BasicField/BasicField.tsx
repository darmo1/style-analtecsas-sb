import React, { FC, forwardRef } from "react";
import { BasicFieldProps } from "./BasicField.types";

const BasicField: FC<BasicFieldProps> = forwardRef(
  (
    {
      children,
      className = '',
      error = null,
      errorClassName,
      hideErrorMessage = false,
      hideLabel = false,
      id,
      label,
      labelClassName,
      onError,
      placeholder,
      showOptional,
      showRequired,
      type = 'text',
      value,
      ...props
    },
    ref
  ) => {
    


    return <div>BasicFiel</div>;
  }
);

export default BasicField;
