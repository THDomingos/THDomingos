import React, { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme.ts";
import HomePage from "./components/HomePage.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";


import { Brightness7, Brightness4 } from "@mui/icons-material";

interface ToggleThemeButtonProps {
  toggleTheme: () => void;
}

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <HomePage />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <IconButton
        onClick={toggleTheme}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          color: theme.palette.mode === "dark" ? "#fbc02d" : "#ff9800",
          backgroundColor: theme.palette.background.paper,
          borderRadius: "50%",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>   

      <Footer /> 
    </ThemeProvider>
  );
};

export default App;
