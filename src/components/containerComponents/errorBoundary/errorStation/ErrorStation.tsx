import React, { ErrorInfo } from "react";
import classes from "./ErrorStation.module.scss";

interface ErrorStationProps {
  error: Error;
  errorInfo: ErrorInfo;
}

export const ErrorStation: React.FC<ErrorStationProps> = ({
  error,
  errorInfo,
}) => {
  return (
    <div className={classes.container}>
      <h1>Something went wrong.</h1>
      <p>An error occurred while rendering this station.</p>
      <div className={classes.details}>
        <h2>Debug Information</h2>
        <p>{error.toString()}</p>
        <h3>Stack Trace</h3>
        {error?.stack}
        <h3>Component Stack</h3>
        {errorInfo?.componentStack}
      </div>
    </div>
  );
};
