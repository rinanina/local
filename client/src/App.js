import "./App.css";
import { Header } from "./features/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import { Artist } from "./features/Artist/Artist";
import {Blog} from "./features/Blog/Blog"
import {Contact} from "./features/Contact/Contact"
import {Archive} from "./features/Archive/Archive"
import {Publisher} from "./features/Publisher/Publisher"

function App() {
  return (
    <div className="App">
      <h4>LOCAL STICKERBOOK</h4>
      <header>
        <nav>
        <Link to="/artist">ARTIST  </Link>
        <Link to="/blog">BLOG  </Link>
        <Link to="/contact">CONTACT  </Link>
        <Link to="/archive">ARCHIVE  </Link>
        <Link to="/publisher">PUBLISHER  </Link>
        </nav>
        </header>

      <Routes>
        <Route path="/artist" element={<Artist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archive" element={<Archive/>} />
        <Route path="/publisher" element={<Publisher />} />

      </Routes>
    </div>
  );
}

export default App;
