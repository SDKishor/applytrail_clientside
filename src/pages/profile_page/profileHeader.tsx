import { Button } from '@/components/ui/button';
import { Mail, UserRound } from 'lucide-react';

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row">
      <div className="h-32 w-32 overflow-hidden rounded-lg">
        <img src="https://github.com/shadcn.png" alt="" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <div className="flex items-center justify-between">
          <div className="flex-1 gap-2 sm:flex">
            <div className="mb-2">
              <UserRound className="mx-auto h-4 w-4 text-primary" />
            </div>
            <div className="gap-2">
              <p className="text-xs uppercase">Full Name</p>
              <h2 className="font-bold">Kishor Sutradhar</h2>
            </div>
          </div>
          <Button
            size={'sm'}
            className="hidden !px-4 font-bold uppercase sm:block"
          >
            Update Profile
          </Button>
        </div>

        <div className="my-4 h-[2px] bg-fade-center"></div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="mb-2">
            <Mail className="mx-auto h-4 w-4 text-primary" />
          </div>

          <div className="gap-2">
            <p className="text-xs uppercase">Email Address</p>
            <h2 className="font-bold">Kishorsutradhar32@gmail.com</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
