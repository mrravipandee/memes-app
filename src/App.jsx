import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Reaction from "./components/Reaction";
import Text from "./components/Text";
import Political from "./components/Political";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/Fonts.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex bg-orange-100">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex items-center justify-center h-screen w-full">
          <div className="bg-orange-200 w-[72rem] h-[40rem] flex items-center justify-center border-black rounded-2xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trending" element={<TrendingPage />} />
              <Route path="/reaction" element={<ReactionPage />} />
              <Route path="/text" element={<TextPage />} />
              <Route path="/political" element={<PoliticalPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// Define router component
const HomePage = () => {
  return <Home />;
};

const TrendingPage = () => {
  return <Trending />;
};

const ReactionPage = () => {
  return <Reaction />;
};

const TextPage = () => {
  return <Text />;
};

const PoliticalPage = () => {
  return <Political />;
};
