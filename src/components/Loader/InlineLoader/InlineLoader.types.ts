export type InlineLoaderProps = {
  className?: string;
  darkMode?: boolean;
  message?: string;
  messageClassName?: string;
  timeoutCallback?: () => void;
  timeout?: number;
}