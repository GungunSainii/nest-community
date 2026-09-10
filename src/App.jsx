import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CircleProvider } from './context/CircleContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { DiscoverPage } from './pages/DiscoverPage';
import { CircleDetailsPage } from './pages/CircleDetailsPage';
import { CreateCirclePage } from './pages/CreateCirclePage';
import { KeepAlivePage } from './pages/KeepAlivePage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CircleProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#18181B] font-sans selection:bg-[#F5F3FF] selection:text-[#7C3AED]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discover" element={<DiscoverPage />} />
              <Route path="/circle" element={<CircleDetailsPage />} />
              <Route path="/circle/:id" element={<CircleDetailsPage />} />
              <Route path="/create" element={<CreateCirclePage />} />
              <Route path="/keep-alive" element={<KeepAlivePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CircleProvider>
  );
}
