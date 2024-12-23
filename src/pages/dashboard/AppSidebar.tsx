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
  BellRing,
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
    url: '/dashboard/applications',
    icon: FileUser,
  },
  {
    title: 'Analytics',
    url: 'analytics',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Reminders',
    url: 'reminders',
    icon: BellRing,
  },
  {
    title: 'Profile',
    url: 'profile',
    icon: UserRound,
  },
  {
    title: 'Settings',
    url: 'settings',
    icon: Settings,
  },
];

export const AppSidebar = () => {
  return (
    <div className="flex min-h-[80vh]">
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
