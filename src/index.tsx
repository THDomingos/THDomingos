import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Configurando o tema personalizado
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: "#fcfade",
      500: "#1e3a8a", // Azul médio
      900: "#0f172a", // Azul escuro quase preto
    },
  },
});

const App = () => {
  return (
    <div>
      <h1>Thiago H. Domingos - Portfólio</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
