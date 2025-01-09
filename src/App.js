import { createContext, useEffect, useState } from "react";
import "./App.scss";
import DashboardLayout from "./Layout/Dashboard/Dashboard";

export const GlobalSettingsContext = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <GlobalSettingsContext.Provider value={{ darkMode, setDarkMode }}>
      <DashboardLayout />
    </GlobalSettingsContext.Provider>
  );
}

export default App;
