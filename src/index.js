import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_CLIENT}
        redirectUri={window.location.origin}
    >
        <AppProvider>
            <FilterContextProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </FilterContextProvider>
        </AppProvider>
    </Auth0Provider>,
);