import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import BlogDetal from "./components/BlogDetal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogTitle" element={<BlogDetal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
