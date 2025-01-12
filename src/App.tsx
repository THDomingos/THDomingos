import React, { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { darkTheme, lightTheme } from "./theme.ts";
import HomePage from "./components/HomePage.tsx";
import { Brightness7, Brightness4 } from "@mui/icons-material";


const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <HomePage />
      {/* Botão de alternância de tema */}
      <IconButton
              onClick={toggleTheme}
              sx={{
                position: "fixed",
                top: 20,
                right: 20,
                backgroundColor: "white",
                boxShadow: 2,
                "&:hover": {
                  backgroundColor: "lightgray",
                },
              }}
            >
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>    
    </ThemeProvider>
  );
};

export default App;
