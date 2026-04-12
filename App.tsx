import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/views/HomePage';
import WritingsIndex from './components/views/WritingsIndex';
import WritingPage from './components/views/WritingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/escritos" element={<WritingsIndex />} />
          <Route path="/escritos/:slug" element={<WritingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
