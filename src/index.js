import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from 'react-router-dom'
import { ProductsProvider } from "./context/useProducts";

// Call make Server
makeServer();

ReactDOM.render(
    <BrowserRouter>
    <ProductsProvider>
    <App/>
    </ProductsProvider>
      
    </BrowserRouter>
    ,
  document.getElementById("root")
);
