
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Home, BookOpen, Lightbulb, HelpCircle, Leaf, Wind, Sun } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path || 
    (currentPath.startsWith('/ideia/') && path === '/ideias');
  
  // Group status for ideas
  const ideasExpanded = currentPath === '/ideias' || currentPath.startsWith('/ideia/');

  // Navigation link class generator
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-white font-medium" 
      : "text-white hover:bg-sidebar-accent/50";

  // Ideas submenu items
  const ideiaItems = [
    { title: "Bicicletas Geradoras", url: "/ideia/1", icon: Wind },
    { title: "Reciclagem Eletrônica", url: "/ideia/2", icon: Leaf },
    { title: "Luminárias Solares", url: "/ideia/3", icon: Sun },
    { title: "Lombadas Inteligentes", url: "/ideia/4", icon: Leaf },
    { title: "Biodigestores", url: "/ideia/5", icon: Wind },
    { title: "Bikes com Bateria", url: "/ideia/6", icon: Wind },
    { title: "Energia de Biomassa", url: "/ideia/7", icon: Leaf },
    { title: "Energia Solar", url: "/ideia/8", icon: Sun },
  ];

  return (
    <SidebarComponent
      className={`transition-all duration-300 ease-in-out h-screen ${collapsed ? "w-14" : "w-64"}`}
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end md:hidden" />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" end className={getNavClass}>
                    <Home className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Resumos</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/quiz" className={getNavClass}>
                    <HelpCircle className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Quiz</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed ? "Ideias Sustentáveis" : "Ideias"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/ideias" end className={getNavClass}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Todas as Ideias</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              {!collapsed && ideiaItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
