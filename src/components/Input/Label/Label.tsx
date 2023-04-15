import React, { FC } from "react";
import { LabelProps } from "./Label.types";
import FieldRequiredIndicator from "../FieldRequiredIndicator/FieldRequiredIndicator";

const Label: FC<LabelProps> = ({
  children,
  className = "",
  fieldId,
  showOptional,
  showRequired,
  ...props
}) => (
  <label
    htmlFor={fieldId}
    id={fieldId ? `${fieldId}Label` : ''}
    className={className}
    {...props}
  >
    {children}
    {(showOptional || showRequired) && (
      <FieldRequiredIndicator
        showOptional={showOptional}
        showRequired={showRequired}
      />
    )}
  </label>
);

export default Label;
