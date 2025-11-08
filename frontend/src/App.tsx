import { useState, useEffect } from 'react'
import './App.css'

interface ApiResponse {
  status?: string;
  message: string;
  version?: string;
}

function App() {
  const [apiStatus, setApiStatus] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        setApiStatus(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to connect to API:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to B-COMPASS</h1>
        <p>A modern full-stack web application</p>

        <div className="api-status">
          <h2>API Status</h2>
          {loading ? (
            <p>Checking API connection...</p>
          ) : apiStatus ? (
            <div className="status-ok">
              <p>✓ {apiStatus.message}</p>
              <p className="status-badge">Status: {apiStatus.status}</p>
            </div>
          ) : (
            <p className="status-error">✗ Failed to connect to API</p>
          )}
        </div>

        <div className="tech-stack">
          <h2>Tech Stack</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
              </ul>
            </div>
            <div className="stack-item">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
