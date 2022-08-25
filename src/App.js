
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from "./component/Create";
import BlogDetails from "./component/BlogDetails";
import './index.css';
import NotFound from "./component/NotFound";

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router >
    </div>

  );
}

export default App;
