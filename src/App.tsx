import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./views/about";
import Detail from "./views/detail";
import { getSearchParams } from "./utils/common";

function App() {
  const { source } = getSearchParams();
  return (
    <div className="App">
      <BrowserRouter>
        {source != "ops2" && (
          <ul className="nav-ul">
            <li>
              <Link className="link" to="/about">
                about
              </Link>
            </li>
            <li>
              <Link className="link" to="/detail">
                detail
              </Link>
            </li>
          </ul>
        )}

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
