import { FC, ReactNode } from "react";

export type SizeButton = 'small' | 'medium' | 'large';
export type TypeButton = 'primary'
| 'secondary'
| 'tertiary'

export type Props = {
  className: string;
  children: ReactNode;
  onClick?: () => void;
  size?: SizeButton;
  disabled?: boolean;
  typeButton ?: TypeButton
};

export const Btn: FC<Props> = ({
  className,
  children,
  onClick,
  size = "small",
  typeButton = 'primary',
  disabled = false,
}) => {
  const getSize = (size: string): string => {
    switch (size) {
      case "small": {
        return "max-w-[200px] w-[200px]";
      }

      case "medium": {
        return "max-w-[400px] w-[400px]";
      }

      case "large": {
        return "max-w-[600px] w-[600px]";
      }

      default: {
        return "max-w-[600px]";
      }
    }
  };

  const getType = (type: string): string  => {
    switch(type){
      case 'primary':{
        return 'bg-black bg-[--black] text-white hover:bg-[--bg-white-100] hover:text-black'
      }

      case 'secondary': {
        return 'bg-[--bg-white-100] text-black hover:bg-[--gray-400]'
      }

      case 'tertiary':{
        return 'bg-[--bg-white-100] text-black hover:bg-[--success-200]'
      }

      default:{
        return 'bg-[--black] hover:bg-[--bg-white-100] hover:text-black'
      }
  }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`my-12 border border-[--black] px-12 py-1 rounded ${getType(typeButton)}  ${getSize(
        size
      )} ${className}`}
    >
      {children && children}
    </button>
  );
};

export default Btn;
