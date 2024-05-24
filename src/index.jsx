import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import "../src/css/normalize.css";
import "./index.css";

import RoutingComponent from './components/Routing.component';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <RoutingComponent />
  </BrowserRouter>
);