import React, { useContext } from "react";
import classes from "./Grid.module.scss";
import { MovableBlock } from "./movableBlock/MovableBlock";
import { AppContext } from "../../../App";

export interface GridProps {
  position: number;
}
export const Grid: React.FC<GridProps> = ({ position }) => {
  const context = useContext(AppContext);
  return (
    <div className={classes.container}>
      <MovableBlock blockNo={position} />
      {!context.appStarted && (
        <div
          className={classes.startMsg}
          onClick={() => context.setAppStarted(true)}
        >
          Try to push the block to bottom. You can click on GO button when
          slider comes to middle. Click here to start.
        </div>
      )}
    </div>
  );
};
