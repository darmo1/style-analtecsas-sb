import { MutableRefObject, ReactNode } from "react";

export type ErrorMessageProps = {
  children?: ReactNode | ReactNode[];
  className?: string
  errorClassName?: string;
  fieldName?: string;
  inputRef?: MutableRefObject<ReactNode | null>;
  onShow?: (
    fieldName: string,
    inputRef: MutableRefObject<ReactNode | null>
  ) => void;
};
