import React, { useState } from "react";
import { GameStation } from "./components/containerComponents/gameStation/GameStation";

export const AppContext = React.createContext({
  appStarted: false,
  setAppStarted: (status: boolean) => {},
});

function App() {
  const [appStarted, setAppStarted] = useState(false);
  return (
    <AppContext.Provider value={{ appStarted, setAppStarted }}>
      <GameStation />
    </AppContext.Provider>
  );
}

export default App;
