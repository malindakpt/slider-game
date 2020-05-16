import React from "react";
import classes from "./GameController.module.scss";

export interface GameControllerProps {
  onTryToGo: () => void;
}
export const GameController: React.FC<GameControllerProps> = ({
  onTryToGo,
}) => {
  return (
    <div className={classes.container}>
      <div>Score: </div>
      <div>
        <button
          onClick={() => {
            onTryToGo();
          }}
        >
          GO
        </button>
      </div>
    </div>
  );
};
