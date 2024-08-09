import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ReadQuran from './pages/read_quran/index';
// import Index from './pages/layouts/index';
import Layouts from "./pages/layouts/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ReadQuran /> */}
    {/* <Index/> */}
    <Layouts />
  </React.StrictMode>
);
