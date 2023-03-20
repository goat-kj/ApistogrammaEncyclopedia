import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Delete from './Components/Delete';

function App() {
  return (
    <div className="flex">
      <div className="flex flex-row h-screen">
        <SideBar />
      </div>
      <div className="flex-1">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update/:id" element={<Update />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
