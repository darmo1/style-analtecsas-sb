import { ReactNode } from "react"

export type ActionType = {
  label: string;
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
  [propName: string]: unknown;
}
export type SystemFeedbackType = 'error' | 'success' | 'warning';
export type SysteFeedbackProps = {
  children?: ReactNode;
  type?: SystemFeedbackType;
  title?: string;
  message?: string | string[];
  actions?: ActionType[];
  className?: string;
  icon?: string;
  closeState?: boolean;
  onClose?: () => void;
  [propName: string]: unknown;
}