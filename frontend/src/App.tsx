import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Interconnections from './pages/Interconnections';
import RoleDashboard from './pages/RoleDashboard';
import ImpactAnalysis from './pages/ImpactAnalysis';
import Scenarios from './pages/Scenarios';
import AntiPatterns from './pages/AntiPatterns';
import Pillars from './pages/Pillars';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/interconnections" element={<Interconnections />} />
            <Route path="/role-dashboard" element={<RoleDashboard />} />
            <Route path="/impact-analysis" element={<ImpactAnalysis />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/anti-patterns" element={<AntiPatterns />} />
            <Route path="/pillars" element={<Pillars />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>Busula - The Startup Business Compass | Mock Data Mode</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
