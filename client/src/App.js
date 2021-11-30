import './App.css';

import { Login } from 'features/Pages';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Archive } from './features/Archive/Archive';
import { Artist } from './features/Artist/Artist';
import { Blog } from './features/Blog/Blog';
import { Contact } from './features/Contact/Contact';
import { Publisher } from './features/Publisher/Publisher';

function App() {
  return (
    <div className="App">
      <h4>LOCAL STICKERBOOK</h4>
      <header>
        <nav>
          <Link to="/artist">ARTIST</Link>
          <Link to="/blog">BLOG </Link>
          <Link to="/contact">CONTACT </Link>
          <Link to="/archive">ARCHIVE </Link>
          <Link to="/publisher">PUBLISHER </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/artist" element={<Artist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
