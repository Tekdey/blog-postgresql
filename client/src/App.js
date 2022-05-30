import React from "react";
import Posts from "./pages/Posts";
import Profil from "./pages/Profil";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
