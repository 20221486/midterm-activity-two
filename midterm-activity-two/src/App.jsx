import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentList />} />
        <Route path="/student/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
