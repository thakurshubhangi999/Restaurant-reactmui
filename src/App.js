import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import CircularProgress from "@mui/material/CircularProgress"; // Import Material-UI Loader
import Box from "@mui/material/Box"; // Import Box for centering

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}
        >
          <CircularProgress /> {/* Material-UI loader */}
        </Box>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
