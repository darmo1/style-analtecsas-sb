import { ReactElement, ReactNode } from "react"


export type FieldProps = {
  children?: ReactNode | ReactNode[];
  className?: string;
  error?: string;
  errorClassName?:string;
  formGroupClassName?:string;
  hideErrorMessage?: boolean;
  hideLabel?: boolean;
  id?: string;
  label?: string| ReactElement;
  labelledBy?: string;
  labelClassName?: string;
  name?: string;
  onError?: (error: any) => void;
  placeholder?: string;
  showOptional?: boolean;
  showRequired?: boolean;
  type?: string;
  value?: string | number;
  [propName: string]: any;
}