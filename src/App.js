import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import BlogPages from "./Pages/BlogPages";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import UserProfile from "./Pages/UserProfile";
import PDFReader from "./PDFReader";
import Register from "./Register/Register";
import { ScrollToTop } from 'react-router-scroll-to-top';
import Competition from "./Pages/Competion";
import EmailVerify from "./EmailVerify";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pdfReader" element={<PDFReader />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/events" element={<BlogPages />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/emailverify/:token" element={<EmailVerify />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
