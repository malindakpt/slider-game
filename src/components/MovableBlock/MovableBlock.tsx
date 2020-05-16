import React from "react";
import classes from "./MovableBlock.module.scss";

export interface MovableBlockProps {
  blockNo: number;
}
export const MovableBlock: React.FC<MovableBlockProps> = ({ blockNo }) => {
  const top = blockNo < 4 ? 0 : blockNo < 7 ? 100 : 200;
  let left = blockNo % 3 === 1 ? 0 : blockNo % 3 === 2 ? 100 : 200;
  left = top === 100 ? 200 - left : left;

  console.log(top);
  const location = {
    transition: "all 700ms",
    color: "white",
    left: `${left}px`,
    top: `${top}px`,
  };
  return <div className={classes.container} style={location}></div>;
};
