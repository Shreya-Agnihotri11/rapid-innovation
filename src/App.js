import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
