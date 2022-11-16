import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Birds from "./Birds";
import Animals from "./Animals";
import About from "./About";

import "./Home.css";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="heading">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/birds">Birds</Link>
              <Link to="/animals">Animals</Link>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default Home;
