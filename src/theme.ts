import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2", // Azul
    },
    secondary: {
      main: '#37474f', // Cinza escuro
    },
    success: {
      main: '#2e7d32', // Verde escuro
    },
    warning: {
      main: '#fbc02d', // Amarelo escuro
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
    secondary: {
      main: '#90a4ae', // Cinza claro
    },
    success: {
      main: '#66bb6a', // Verde claro
    },
    warning: {
      main: '#ffeb3b', // Amarelo claro
    },
    background: {
      default: "#fcfade", // Cor clara personalizada
    },
    text: {
      primary: "#000000", // Preto para o texto no modo claro
    },
  },
  typography: {
    allVariants: {
      color: "#000000", // Garante que todos os textos sejam pretos no tema claro
    },
  },
});
