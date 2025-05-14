
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/assets/Logo';
import { useSidebar } from '@/components/ui/sidebar';

const Navbar: React.FC = () => {
  const { setOpenMobile, state } = useSidebar();
  
  const toggleSidebar = () => {
    setOpenMobile(prevState => !prevState);
  };
  
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <Logo />
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `nav-link font-medium ${isActive ? 'text-eco-green' : 'text-gray-600 hover:text-eco-green'}`
          }
          end
        >
          Resumos
        </NavLink>
        <NavLink 
          to="/ideias" 
          className={({ isActive }) => 
            `nav-link font-medium ${isActive ? 'text-eco-green' : 'text-gray-600 hover:text-eco-green'}`
          }
        >
          Ideias
        </NavLink>
        <NavLink 
          to="/quiz" 
          className={({ isActive }) => 
            `nav-link font-medium ${isActive ? 'text-eco-green' : 'text-gray-600 hover:text-eco-green'}`
          }
        >
          Quiz
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
