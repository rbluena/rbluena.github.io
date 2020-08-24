export default {
  menuVariants: {
    hidden: {
      y: "-50vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        stiffness: 120,
      },
    },
  },
};
