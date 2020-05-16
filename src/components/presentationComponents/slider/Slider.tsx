import React from "react";
import classes from "./Slider.module.scss";

export interface SliderProps {
  left: number;
}
export const Slider: React.FC<SliderProps> = ({ left }) => {
  const location = {
    left: `${left}px`,
  };

  return (
    <div className={classes.container}>
      <div className={classes.cursor} style={location}></div>
    </div>
  );
};
