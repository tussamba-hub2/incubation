import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './global/HomePage';
import RegisterPage from './global/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registrar" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
