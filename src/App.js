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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Event from "./Pages/Events";
import BlogIndex from "./Pages/BlogIndex";
import Gallery from "./Gallery/Gallery";
import BookPage from "./Pages/BookPage";

export default function App() {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pdfReader/:id" element={<PDFReader />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/events/:id" element={<BlogPages />} />
          <Route path="/events" element={<BlogIndex />} />
          <Route path="/bookPage/:id" element={<BookPage/>}/>
          <Route path="/competition" element={<Competition />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}
