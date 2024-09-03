import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Albums from './pages/Albums';
import Photocards from './pages/Photocards';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Register from './pages/Register';
import Album1 from './pages/album/Album1';
import Album2 from './pages/album/Album2';
import Album16 from './pages/album/Album16';
import Album17 from './pages/album/Album17';
import Album18 from './pages/album/Album18';
import Album19 from './pages/album/Album19';
import Photocard1 from './pages/photocards/Photocard1';
import Photocard2 from './pages/photocards/Photocard2';
import Photocard3 from './pages/photocards/Photocard3';
import Photocard4 from './pages/photocards/Photocard4';
import Photocard5 from './pages/photocards/Photocard5';
import Photocard6 from './pages/photocards/Photocard6';
import Photocard7 from './pages/photocards/Photocard7';
import Photocard8 from './pages/photocards/Photocard8';
import Photocard9 from './pages/photocards/Photocard9';
import Photocard10 from './pages/photocards/Photocard10';
import Photocard11 from './pages/photocards/Photocard11';
import Photocard12 from './pages/photocards/Photocard12';
import Photocard13 from './pages/photocards/Photocard13';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photocards" element={<Photocards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/album/1" element={<Album1 />} />
          <Route path="/album/2" element={<Album2 />} />
          <Route path="/album/16" element={<Album16 />} />
          <Route path="/album/17" element={<Album17 />} />
          <Route path="/album/18" element={<Album18 />} />
          <Route path="/album/19" element={<Album19 />} />
          <Route path="/photocards/1" element={<Photocard1 />} />
          <Route path="/photocards/2" element={<Photocard2 />} />
          <Route path="/photocards/3" element={<Photocard3 />} />
          <Route path="/photocards/4" element={<Photocard4 />} />
          <Route path="/photocards/5" element={<Photocard5 />} />
          <Route path="/photocards/6" element={<Photocard6 />} />
          <Route path="/photocards/7" element={<Photocard7 />} />
          <Route path="/photocards/8" element={<Photocard8 />} />
          <Route path="/photocards/9" element={<Photocard9 />} />
          <Route path="/photocards/10" element={<Photocard10 />} />
          <Route path="/photocards/11" element={<Photocard11 />} />
          <Route path="/photocards/12" element={<Photocard12 />} />
          <Route path="/photocards/13" element={<Photocard13 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
