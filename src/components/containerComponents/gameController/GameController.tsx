import React, { useContext } from "react";
import classes from "./GameController.module.scss";
import { AppContext } from "../../../App";

export interface GameControllerProps {
  onTryToGo: () => void;
  score: number;
}
export const GameController: React.FC<GameControllerProps> = ({
  onTryToGo,
  score,
}) => {
  const context = useContext(AppContext);

  return (
    <div className={classes.container}>
      {context.appStarted ? (
        <>
          <div className={classes.score}>Score: {score}</div>
          <div>
            <div
              className={classes.goBtn}
              onClick={() => {
                context.appStarted && onTryToGo();
              }}
            >
              GO
            </div>
          </div>
        </>
      ) : (
        <div className={classes.headerMsg}>Slider Game</div>
      )}
    </div>
  );
};
