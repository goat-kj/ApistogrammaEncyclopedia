import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import Delete from './Components/Delete';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
