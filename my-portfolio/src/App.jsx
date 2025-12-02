import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} /> */}
          {/* 404 Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
