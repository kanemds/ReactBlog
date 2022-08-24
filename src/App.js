
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from "./component/Create";


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <div className='content'>
          <Routes>

            <Route path="/create" element={<Create />} />
            <Route path="/" element={<Home />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
