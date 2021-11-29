import React from "react";
import "./Header.css";
import { Routes, Route, Link } from "react-router-dom";
import { Artist } from "../Artist/Artist";

export const Header = () => {
    return (
        <div className="header">
            <header>
                <nav>
                    <Link to="/artist">ARTIST</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/artist" element={<Artist />} />
            </Routes>
        </div>
    );
};