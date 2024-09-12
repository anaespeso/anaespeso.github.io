import React from "react";
import ReactDOMClient from "react-dom/client";
import { Bentolio } from "./screens/Bentolio";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Bentolio />);
