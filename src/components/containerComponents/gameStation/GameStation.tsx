import React, { Component } from "react";
import classes from "./GameStation.module.scss";
import { Slider } from "../../presentationComponents/slider/Slider";
import { GameController } from "../gameController/GameController";
import { Grid } from "../grid/Grid";

export class GameStation extends Component {
  private timer: any;
  private readonly SLIDE_GAP = 5;
  private readonly SLIDER_END_POSITION = 250;
  private readonly SLIDE_START_POSITION = 25;
  private readonly REFRESH_INTERVAL = 100;
  private readonly JUMP_OK_START = 100;
  private readonly JUMP_OK_END = 175;

  state = {
    sliderPosition: this.SLIDE_START_POSITION,
    isForward: true,
    playerPosition: 1,
    score: 0,
    startTime: new Date().getTime(),
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

  handleTryToGo = () => {
    const newState = { ...this.state };
    if (
      this.JUMP_OK_START <= this.state.sliderPosition &&
      this.state.sliderPosition <= this.JUMP_OK_END
    ) {
      newState.playerPosition++;
      this.setState(newState);

      if (newState.playerPosition === 9) {
        const endTime = new Date().getTime();
        const duration = endTime - newState.startTime;
        newState.score += Math.round(1000000 / duration);
        newState.startTime = endTime;
        // Reset the game staus
        setTimeout(() => {
          const newState = { ...this.state };
          newState.playerPosition = 1;
          this.setState(newState);
        }, 1000);
      }
    } else {
      newState.playerPosition = 1;
    }
    this.setState(newState);
  };

  render() {
    return (
      <div className={classes.container}>
        <GameController
          onTryToGo={this.handleTryToGo}
          score={this.state.score}
        />
        <Grid position={this.state.playerPosition} />
        <Slider location={this.state.sliderPosition} />
      </div>
    );
  }
}
