import React from "react";
import { Grid } from "../Grid/Grid";
import classes from "./Container.module.scss";

export const Container: React.FC = () => {
  return (
    <div className={classes.container}>
      <Grid />
    </div>
  );
};
