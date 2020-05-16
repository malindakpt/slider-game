import React, { useState } from "react";
import classes from "./Grid.module.scss";
import { MovableBlock } from "../MovableBlock/MovableBlock";

export const Grid: React.FC = () => {
  const [block, setBlock] = useState(1);
  return (
    <div className={classes.container} onClick={() => setBlock(block + 1)}>
      <MovableBlock blockNo={block} />
    </div>
  );
};
