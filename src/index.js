import React from "react";
import ReactDOM from "react-dom/client";

// **Style
import "./index.scss";

// **Components
import App from "./App";

// **ChakraProvider
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./Theme";
import { ColorModeScript } from "@chakra-ui/react";

// **Auth and Main Context
import AuthProvider from "./context/AuthContext";
import MainProvider from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <AuthProvider>
      <MainProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainProvider>
    </AuthProvider>
  </ChakraProvider>
);
