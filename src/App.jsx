import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectView from "./pages/ProjectView";
import Footer from "./pages/miniComponents/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
            {/* Removed Portfolio Logo */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectView />} />
            </Routes>
            <Footer />
            <ToastContainer position="bottom-right" theme="dark" />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;