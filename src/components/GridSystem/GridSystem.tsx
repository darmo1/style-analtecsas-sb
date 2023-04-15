import React, {
  ForwardRefExoticComponent,
  Fragment,
  ReactNode,
  forwardRef,
  useMemo,
} from "react";
import { GridSystemProps } from "./GridSystem.types";
import GridSystemCtx from "./GridSystemCtx";

const GridSystem: ForwardRefExoticComponent<GridSystemProps> = forwardRef<
  HTMLDivElement,
  GridSystemProps
>(
  (
    {
      items = [],
      cols,
      gap = 3,
      className = "",
      rowClassName = "",
      render = (_item: unknown): ReactNode => <></>,
      renderBelowRow,
      children,
    },
    ref
  ) => {
    const itemsMatrix = useMemo(() => {
      if (!cols) return items;
      if (cols === 1) return items.map((item) => [item]);

      const rows = Math.ceil(items.length / cols);
      const rowItems = [];

      for (let row = 0; row < rows; row++) {
        const colItems = items.slice(cols * row, cols * (row + 1));
        rowItems.push(colItems);
      }

      return rowItems;
    }, [cols, items]);
    const getRandom = (): number => Math.floor(Math.random() * 1000);
    const getUniqueKey = (infix: string, index: number): string =>
      `grid-${infix}-${index}-${getRandom()}`;

    //Render Props
    const renderFunc = typeof children === "function" ? children : render;

    const renderRow = (itemsToRender: Array<unknown>, rowIndex = 0) => (
      <div>
        {itemsToRender.map((item, colIndex) => {
          const index = rowIndex * (cols ?? 0) + colIndex;
          const ctxValue = { index, rowIndex, colIndex };
          return (
            <Fragment key={getUniqueKey("col", colIndex)}>
              <GridSystemCtx.Provider value={ctxValue}>
                {renderFunc(item, ctxValue)}
              </GridSystemCtx.Provider>
            </Fragment>
          );
        })}
      </div>
    );

    return (
      <div ref={ref}>
        {cols
          ? itemsMatrix.map((rowItems, rowIndex) => (
              <Fragment key={getUniqueKey("row", rowIndex)}>
                {renderRow(rowItems as Array<unknown>, rowIndex)}
                {renderBelowRow && renderBelowRow(rowIndex, itemsMatrix.length)}
              </Fragment>
            ))
          : renderRow(items)}
      </div>
    );
  }
);

export default GridSystem;
