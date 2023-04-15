import { ReactNode } from "react"

export type LabelProps = {
  children?: ReactNode;
  className?: string;
  fieldId?: string;
  showOptional?: boolean;
  showRequired ?: boolean;
}