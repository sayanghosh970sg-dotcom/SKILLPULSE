import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PulseAIFloatingButton } from '../components/pulseai';
import './globals.css';

export const metadata = {
  title: 'SkillPulse - Where Industry Demand Meets Skill Development',
  description: 'National Industry-to-Skill Intelligence Platform connecting industry requirements with skill development, training programs, and real-time labor telemetry.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <PulseAIFloatingButton />
      </body>
    </html>
  );
}
