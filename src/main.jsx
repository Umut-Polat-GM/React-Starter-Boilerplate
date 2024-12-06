import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { store } from "./store/store.js";
import { theme } from "./theme/theme.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <SnackbarProvider maxSnack={3}>
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
);
