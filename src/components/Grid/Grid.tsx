import React from "react";
import classes from "./Grid.module.scss";
import { MovableBlock } from "../MovableBlock/MovableBlock";

export interface GridProps {
  position: number;
}
export const Grid: React.FC<GridProps> = ({ position }) => {
  return (
    <div className={classes.container}>
      <MovableBlock blockNo={position} />
    </div>
  );
};
