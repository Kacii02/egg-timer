import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/main.scss'
import HomePage from './pages/HomePage';
import SelectTimePage from './pages/SelectTimePage';
import TimerPage from './pages/TimerPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-time" element={<SelectTimePage />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
