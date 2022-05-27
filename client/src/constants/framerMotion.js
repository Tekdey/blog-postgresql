export const V_ButtonForm = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  exit: {
    y: "-100vh",
  },
};
export const V_ArticlePost = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
export const V_MainContainer = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
