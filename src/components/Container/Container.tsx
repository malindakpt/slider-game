import React, { Component } from "react";
import { Grid } from "../Grid/Grid";
import classes from "./Container.module.scss";
import { Slider } from "../Slider/Slider";

export class Container extends Component {
  private timer: any;
  private readonly SLIDE_GAP = 5;
  private readonly SLIDER_END_POSITION = 250;
  private readonly SLIDE_START_POSITION = 25;
  private readonly REFRESH_INTERVAL = 20;

  state = {
    sliderPosition: this.SLIDE_START_POSITION,
    isForward: true,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const next = { ...this.state };

      next.sliderPosition = next.isForward
        ? next.sliderPosition + this.SLIDE_GAP
        : next.sliderPosition - this.SLIDE_GAP;

      next.isForward =
        next.sliderPosition === this.SLIDER_END_POSITION
          ? false
          : next.sliderPosition === this.SLIDE_START_POSITION
          ? true
          : next.isForward;

      this.setState(next);
    }, this.REFRESH_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={classes.container}>
        <Grid />
        <Slider left={this.state.sliderPosition} />
      </div>
    );
  }
}
