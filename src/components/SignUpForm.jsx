import React, { useState } from 'react';


const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data); // Observe the response data in the console

      // TODO: Handle the response data, including the token, as needed for your application
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-title">Sign Up</h2>
      {error && <p className="signup-form-error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password: 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
