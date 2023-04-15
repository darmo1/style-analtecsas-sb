
export type SkeletonLoaderProps = {
  /**
   * Skeleton loader tag. 
   */
  tag?: keyof JSX.IntrinsicElements;
  /**
   * className to style
   */
  className?: string;
  /**
   * Specific extra attributes that may find necessary to make the element as expected
   */
  [key:string]: any;
}

export const DEFAULT_TAG = 'div';