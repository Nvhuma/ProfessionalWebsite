import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '@/components/BackToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-sans text-dark bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}