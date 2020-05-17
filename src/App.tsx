import React, { useState } from "react";
import { GameStation } from "./components/containerComponents/gameStation/GameStation";
import { ErrorBoundary } from "./components/containerComponents/errorBoundary/ErrorBoundary";

export const AppContext = React.createContext({
  appStarted: false,
  setAppStarted: (status: boolean) => {},
});

function App() {
  const [appStarted, setAppStarted] = useState(false);
  return (
    <AppContext.Provider value={{ appStarted, setAppStarted }}>
      {/* Wrapped by ErrorBoundary to handle errors */}
      <ErrorBoundary>
        <GameStation />
      </ErrorBoundary>
    </AppContext.Provider>
  );
}

export default App;
