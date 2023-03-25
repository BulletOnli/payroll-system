import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <AppProvider>
                <App />
            </AppProvider>
        </ChakraProvider>
    </React.StrictMode>
);
