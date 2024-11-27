import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';

export const DashboardPage = () => {
  return (
    <div className="">
      <SidebarProvider className="">
        <AppSidebar />
        <SidebarTrigger className="fixed right-3 top-[80px] z-40 h-14 w-14 rounded-full bg-primary text-black shadow-lg md:hidden" />
        <Outlet />
      </SidebarProvider>
    </div>
  );
};
