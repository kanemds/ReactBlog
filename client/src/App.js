
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from "./component/Create";
import BlogDetails from "./component/BlogDetails";
import './index.css';
import NotFound from "./component/NotFound";
import { DataProvider } from './context/DataContext'
import Edit from "./component/Edit";
import Register from "./component/Register";
import Login from "./component/Login";



function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router >
          <Navbar />
          <div className='content'>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create" element={<Create />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router >
      </DataProvider>
    </div>
  );
}

export default App;
