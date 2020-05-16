import React, { useState } from "react";
import classes from "./Grid.module.scss";
import { MovableBlock } from "../MovableBlock/MovableBlock";

export const Grid: React.FC = () => {
  const [block, setBlock] = useState(1);

  const handleIncrement = () => {
    setBlock((prev) => (prev === 9 ? 1 : prev + 1));
  };

  return (
    <div className={classes.container} onClick={handleIncrement}>
      <MovableBlock blockNo={block} />
    </div>
  );
};
