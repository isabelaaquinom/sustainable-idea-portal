
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider collapsedWidth={56} defaultCollapsed={true}>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        
        <div className="flex flex-1 w-full">
          <Sidebar />
          
          <div className="flex-1">
            <main className="min-h-[calc(100vh-64px-80px)]">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
