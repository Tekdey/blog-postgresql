import React from "react";
import Posts from "./pages/Posts";
import Profil from "./pages/Profil";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UserProfile from "./components/UserProfile";
import UserAllPosts from "./components/UserAllPosts";
import EditPost from "./components/EditPost";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Posts />} />
        <Route element={<Profil />}>
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="/profile/:userId/posts" element={<UserAllPosts />} />
          <Route
            path="/profile/:userId/posts/edit/:postId"
            element={<EditPost />}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
