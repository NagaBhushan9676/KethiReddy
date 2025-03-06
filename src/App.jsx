import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainHome from "./Components/MainHome";
import Footer from "./Components/Footer";
import SuperNav from "./Components/SuperNav";
import ProjectsPage from "./Components/ProjectsPage";
import ServicePage from "./Components/ServicePage";

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -100, transition: { duration: 0.5 } },
};

// Animated Routes Component
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <MainHome />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectsPage />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              key="services"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ServicePage />
            </motion.div>
          }
        />
        <Route
          path="/footer"
          element={
            <motion.div
              key="footer"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Footer />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// Main App Component
function App() {
  return (
    <Router >
      <SuperNav />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
