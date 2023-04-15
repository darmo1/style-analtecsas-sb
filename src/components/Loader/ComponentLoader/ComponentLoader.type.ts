import { ReactNode } from "react"


export type ComponentLoaderProps = {
  children?: ReactNode;
  className?: string;
  contentClassName?:string;
  textClassName?:string;
  timeout?:number;
  timeoutCallback?: () => void;
  size?: string;
}