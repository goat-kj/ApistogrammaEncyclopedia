import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Delete from './Components/Delete';
import NavBar from './Components/NavBar';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Router>
          <div className="navbar-container">
            <NavBar />
          </div>
          <div className="home-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/delete/:id" element={<Delete />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
