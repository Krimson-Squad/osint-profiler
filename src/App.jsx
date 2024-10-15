/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { account } from './lib/appwrite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateDocument from './Pages/CreateDocument';
import Profiler from './Pages/Profiler';
import ViewProfiles from './Pages/ViewProfile';
import EditProfile from './Pages/EditProfile';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import PrivacyPolicy from './Components/Privacy Policy/PrivacyPolicy';

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
    <Router basename='/osint-profiler/'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-document" element={<CreateDocument />} />
        <Route path="/create-profile" element={<Profiler />} />
        <Route path="/view-profile" element={<ViewProfiles />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const Home = () => {
  return <h2 className='text-white'>Welcome to the Home Page</h2>;
};

export default App;
