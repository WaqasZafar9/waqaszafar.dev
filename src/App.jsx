import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ThemeToggle />
      <SpeedInsights />
    </>
  );
}

export default App;
