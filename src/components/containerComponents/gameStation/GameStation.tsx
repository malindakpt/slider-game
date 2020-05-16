import React, { Component } from "react";
import { Grid } from "../../presentationComponents/grid/Grid";
import classes from "./GameStation.module.scss";
import { Slider } from "../../presentationComponents/slider/Slider";
import { GameController } from "../../presentationComponents/gameController/GameController";

export class GameStation extends Component {
  private timer: any;
  private readonly SLIDE_GAP = 5;
  private readonly SLIDER_END_POSITION = 250;
  private readonly SLIDE_START_POSITION = 25;
  private readonly REFRESH_INTERVAL = 100;
  private readonly JUMP_OK_START = 125;
  private readonly JUMP_OK_END = 150;

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
      if (newState.playerPosition === 3) {
        const endTime = new Date().getTime();
        const duration = endTime - newState.startTime;

        // Reset the game staus
        newState.score += Math.round(1000000 / duration);
        newState.playerPosition = 1;
        newState.startTime = endTime;
      } else {
        newState.playerPosition++;
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
        <Slider left={this.state.sliderPosition} />
      </div>
    );
  }
}
