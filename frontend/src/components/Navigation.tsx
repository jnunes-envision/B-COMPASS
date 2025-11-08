import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/">
            <h1>🧭 BUSULA</h1>
          </Link>
          <p className="nav-tagline">Your Startup Business Compass</p>
        </div>

        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/interconnections"
            className={`nav-link ${isActive('/interconnections') ? 'active' : ''}`}
          >
            Interconnections
          </Link>
          <Link
            to="/role-dashboard"
            className={`nav-link ${isActive('/role-dashboard') ? 'active' : ''}`}
          >
            Role View
          </Link>
          <Link
            to="/impact-analysis"
            className={`nav-link ${isActive('/impact-analysis') ? 'active' : ''}`}
          >
            Impact Analysis
          </Link>
          <Link
            to="/scenarios"
            className={`nav-link ${isActive('/scenarios') ? 'active' : ''}`}
          >
            Scenarios
          </Link>
          <Link
            to="/anti-patterns"
            className={`nav-link ${isActive('/anti-patterns') ? 'active' : ''}`}
          >
            Anti-Patterns
          </Link>
          <Link
            to="/pillars"
            className={`nav-link ${isActive('/pillars') ? 'active' : ''}`}
          >
            Pillars
          </Link>
        </div>

        <div className="nav-user">
          <span className="user-name">John Founder</span>
          <span className="user-role">CEO</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
