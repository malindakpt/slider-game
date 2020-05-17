import React from "react";
import classes from "./Slider.module.scss";

export interface SliderProps {
  location: number;
}
export const Slider: React.FC<SliderProps> = ({ location }) => {
  const loc = {
    left: `${location}px`,
  };

  return (
    <div className={classes.container}>
      <div className={classes.cursor} style={loc}></div>
    </div>
  );
};
