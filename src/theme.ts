import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // Azul
    },
    background: {
      default: "#121212", // Preto para o background escuro
    },
    text: {
      primary: "#ffffff", // Branco para o texto no modo escuro
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Azul
    },
    background: {
      default: "#fcfade", // Cor clara personalizada
    },
    text: {
      primary: "#000000", // Preto para o texto no modo claro
    },
  },
});
