import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { ProductsProvider } from "./context/useProducts";
import { AuthProvider } from "./context/useAuth";
import { CartProvider } from "./context/useCart";

// Call make Server
makeServer();

ReactDOM.render(
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <ProductsProvider>
    <App/>
    </ProductsProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
    ,
  document.getElementById("root")
);
