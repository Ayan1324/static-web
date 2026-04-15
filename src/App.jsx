import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Show toast on load to replicate the screenshot context
    const timer = setTimeout(() => {
      setShowToast(true);
      // Auto hide toast
      setTimeout(() => setShowToast(false), 4000);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert(`Simulating upload for: ${file.name}`);
      setFile(null);
      e.target.reset();
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <>
      <header className="header">
        <h1>Digital Locker</h1>
      </header>

      {/* Toast Notification */}
      <div className={`toast-container ${showToast ? 'show' : ''}`}>
        <div className="toast-content">
          <div className="toast-indicator">
            <svg viewBox="0 0 24 24" fill="none" className="success-icon" stroke="currentColor">
              <circle cx="12" cy="12" r="10" fill="#22c55e" stroke="none"></circle>
              <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span>Logged in successfully</span>
          </div>
          <button className="toast-close" onClick={() => setShowToast(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="toast-progress"></div>
      </div>

      <main className="main-container">
        {/* Dashboard Card */}
        <section className="card">
          <h2 className="card-title">Dashboard</h2>
          <p className="card-subtitle">Welcome back, alice.</p>

          <form className="upload-form" onSubmit={handleSubmit}>
            <div className="file-input-wrapper">
              <input type="file" id="file" className="file-input" onChange={handleFileChange} />
              <label htmlFor="file" className="file-label">
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <span style={{ color: file ? '#f8fafc' : '#94a3b8' }}>
                  {file ? file.name : 'Choose file to upload'}
                </span>
              </label>
            </div>
            <button type="submit" className="btn-primary">Upload</button>
          </form>
        </section>

        {/* File List Card */}
        <section className="card files-card">
          <p className="empty-state">No files uploaded yet.</p>
        </section>
      </main>
    </>
  );
}

export default App;
