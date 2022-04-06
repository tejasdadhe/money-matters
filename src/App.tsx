import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form12bbGenerator from "./Pages/Form12bbGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="form-12bb" element={<Form12bbGenerator />} />
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
