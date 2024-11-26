import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  ChartNoAxesCombined,
  FileUser,
  Home,
  Settings,
  UserRound,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  {
    title: 'Home',
    url: '/dashboard',
    icon: Home,
  },
  {
    title: 'All Applications',
    url: '/deshboard/applications',
    icon: FileUser,
  },
  {
    title: 'Analytics',
    url: '/dashboard/analytics',
    icon: ChartNoAxesCombined,
  },

  {
    title: 'Profile',
    url: 'dashboard/profile',
    icon: UserRound,
  },
  {
    title: 'Settings',
    url: 'dashboard/settings',
    icon: Settings,
  },
];

export const AppSidebar = () => {
  return (
    <div className="flex">
      <Sidebar className="h-full" collapsible="icon" variant="floating">
        <SidebarContent className="fixed">
          <SidebarGroup>
            <SidebarTrigger className="sticky z-50 mx-1 hover:bg-gray-700/10" />
            <SidebarGroupLabel>Dashoard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          cn(
                            '',
                            isActive
                              ? 'font-bold text-primary'
                              : 'text-muted-foreground'
                          )
                        }
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};
