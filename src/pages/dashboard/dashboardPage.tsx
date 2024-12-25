import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import axios from 'axios';

export const DashboardPage = () => {
  const { user } = useUser();

  useEffect(() => {
    const handleFirstLogin = async () => {
      if (user) {
        try {
          // Check if it's the user's first login
          if (typeof user?.unsafeMetadata?.isFirstLogin === 'undefined') {
            await user.update({ unsafeMetadata: { isFirstLogin: true } });
          }

          const isFirstLogin = user.unsafeMetadata?.isFirstLogin;

          if (isFirstLogin) {
            console.log('Welcome! This is your first login.');

            // Perform first login setup
            await firstLoginSetup();

            // Update metadata to mark as not the first login
            await user.update({ unsafeMetadata: { isFirstLogin: false } });
          }
        } catch (error) {
          console.error('Error during first login setup:', error);
        }
      }
    };

    const firstLoginSetup = async () => {
      if (!user) return;

      try {
        // Add user to the database
        await axios.post(
          'https://applytrail-serverside.vercel.app/api/v1/user-profile/create',
          {
            profileId: user?.id,
            email: user?.emailAddresses[0]?.emailAddress,
            username: user?.username,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        // Add defalut analytics data of user
        await axios.post(
          'https://applytrail-serverside.vercel.app/api/v1/analytics/create',
          {
            profileId: user?.id,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
      } catch (error) {
        console.error('Error creating user profile:', error);
      }
    };

    // Invoke the function
    handleFirstLogin();
  }, [user]);

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
