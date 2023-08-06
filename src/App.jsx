import React, { useState } from 'react';
import Authenticate from './components/Authenticate'; // Adjust the path accordingly
import SignUpForm from './components/SignUpForm'; // Adjust the path accordingly
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;
