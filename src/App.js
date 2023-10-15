import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import {Main} from "./pages/main/main";
import {Login} from "./pages/login";
import { CreatePost } from "./pages/createPost/createPost";
import { Navbar } from "./components/navbar";
import { PageNotFound } from "./components/pageNotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          ?<Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
