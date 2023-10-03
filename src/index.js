import React from 'react';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from './components/App.jsx';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
  );