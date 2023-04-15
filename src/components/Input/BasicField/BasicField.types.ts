import { ReactElement, ReactNode } from "react"


export type BasicFieldProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  /**
   * Error message to show
   */
  error?: string;
  errorClassName?: string;
  hideErrorMessage?: boolean;
  hideLabel?: boolean;
  id?: string;
  label?: string | ReactElement;
  labelClassName?: string;
  /**
   * Callback function when error is occurred
   */
  onError?: (error: any) => void;
  placeholder?: string;
  showOptional?: boolean;
  showRequired?: boolean;
  type?: string;
  value?: string | number;
  /**
   * any extra props
   */
  [propName: string]: any;
}