import React from "react";
import Posts from "./pages/Posts";
import Profil from "./pages/Profil";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UserProfile from "./components/UserProfile";
import UserAllPosts from "./components/UserAllPosts";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route element={<Profil />}>
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/profile/:id/posts" element={<UserAllPosts />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
