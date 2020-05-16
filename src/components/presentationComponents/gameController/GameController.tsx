import React from "react";
import classes from "./GameController.module.scss";

export interface GameControllerProps {
  onTryToGo: () => void;
  score: number;
}
export const GameController: React.FC<GameControllerProps> = ({
  onTryToGo,
  score,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.score}>Score: {score}</div>
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
