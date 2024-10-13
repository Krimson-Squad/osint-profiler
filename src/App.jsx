import React, { useState } from 'react';
import { account } from './lib/appwrite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateDocument from './Pages/CreateDocument';
import Profiler from './Pages/Profiler';
import ViewProfiles from './Pages/ViewProfile';
import EditProfile from './Pages/EditProfile';
import Navbar from './Components/Navbar';

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-document" element={<CreateDocument />} />
        <Route path="/create-profile" element={<Profiler />} />
        <Route path="/view-profile" element={<ViewProfiles />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
