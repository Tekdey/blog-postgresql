import React from "react";
import Posts from "./pages/Posts";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route path="/profil" element={<Posts />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
