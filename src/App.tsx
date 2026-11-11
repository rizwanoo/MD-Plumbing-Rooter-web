/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export type PageId = 'home' | 'services' | 'work' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Sync with browser history and popstate for direct navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '');
      if (['services', 'work', 'about', 'contact'].includes(path)) {
        setCurrentPage(path as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId, serviceId?: string) => {
    setCurrentPage(page);
    setSelectedServiceId(serviceId);

    // Push state cleanly without breaking hash or subroutes
    const targetUrl = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({}, '', targetUrl);
    }

    if (!serviceId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-[#26343D] flex flex-col relative selection:bg-[#FFE16B] selection:text-[#26343D]">
      {/* Custom Agency Magnetic Cursor */}
      <CustomCursor />

      {/* Cinematic Transparent Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage initialServiceId={selectedServiceId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'work' && <OurWorkPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage initialServiceId={selectedServiceId} onNavigate={handleNavigate} />
        )}
      </main>

      {/* Master Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
