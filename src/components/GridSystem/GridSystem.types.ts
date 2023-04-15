import { ReactNode } from "react";


export type GridSystemCtxType = {
  index: number;
  rowIndex: number;
  colIndex: number
}

export type inf = {id:string; title: string; description: string;}
export type renderFuncType = (
  item: inf ,
  indexValues: GridSystemCtxType
) => ReactNode;


export type GridSystemProps = {
  /**
   * Array of items to generate the cols and rows
   */
  items?: Array<unknown>;
  /**
   * it will be the items.length by default or any props passed
   */
  cols?: number;
  gap?: number;
  className?: string;
  rowClassName?: string;
  children?: renderFuncType;
  render?: renderFuncType;
  renderBelowRow?: (rowIndex:number, rowsLength: number) => ReactNode



}