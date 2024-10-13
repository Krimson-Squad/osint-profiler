import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateDocument from './Pages/CreateDocument';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-document">Create Document</Link>
            </li>
          </ul>
        </nav>

        <p>
          {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
        </p>

        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <button type="button" onClick={() => login(email, password)}>
            Login
          </button>

          <button
            type="button"
            onClick={async () => {
              await account.create(ID.unique(), email, password, name);
              login(email, password);
            }}
          >
            Register
          </button>

          <button
            type="button"
            onClick={async () => {
              await account.deleteSession('current');
              setLoggedInUser(null);
            }}
          >
            Logout
          </button>
        </form>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-document" element={<CreateDocument />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
