import React, { FC, memo } from "react";
import { DEFAULT_TAG, SkeletonLoaderProps } from "./SkeletonLoader.types";

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
  className = "",
  tag = DEFAULT_TAG,
  ...props
}) => {
  const Tag: any =  tag;
  return <Tag className={`animate-pulse bg-gradient-to-r from-gray-300 to-gray-500 min-h-[100px] min-w-[100px] ${className}`}  {...props} />
};

export default memo(SkeletonLoader);
