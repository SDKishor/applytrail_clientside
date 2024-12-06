import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Mail, UserRound } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { IUserProfile } from './profilePage';

interface profilehearderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  profileData: IUserProfile;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUpdate: (data: any) => void;
}
const arryToString = (array: string[]) => {
  if (array === undefined) return '';
  return array.join(', ');
};

export const ProfileHeader = ({
  isOpen,
  setIsOpen,
  profileData,
  handleUpdate,
}: profilehearderProps) => {
  const { username, email } = profileData;

  const [updateData, setUpdateData] = useState({
    bio: profileData.bio,
    technicalSkills: arryToString(profileData.skills?.technicalSkills || []),
    softSkills: arryToString(profileData.skills?.softSkills || []),
    preferredLocations: arryToString(
      profileData.jobPreferences?.preferredLocations || []
    ),
    salaryRange: profileData.jobPreferences?.salaryRange || '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
              <p className="text-xs uppercase">User Name</p>
              <h2 className="font-bold">{username}</h2>
            </div>
          </div>
          <div className="">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="!px-4 font-bold">Update</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Update profile</DialogTitle>
                  <DialogDescription>
                    Update your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Bio
                    </Label>
                    <Input
                      className="col-span-3"
                      name="bio"
                      defaultValue={profileData?.bio}
                      onChange={handleInputChange}
                      id="bio"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Salary Range
                    </Label>
                    <Input
                      className="col-span-3"
                      name="salaryRange"
                      defaultValue={profileData?.jobPreferences?.salaryRange}
                      onChange={handleInputChange}
                      id="salaryRange"
                    />
                  </div>
                  <Separator />
                  <p className="text-xs font-bold">
                    use{' '}
                    <span className="rounded-md bg-gray-400/20 px-2">,</span> to
                    separate
                  </p>
                  <Separator />
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Technical skills
                    </Label>
                    <Input
                      className="col-span-3"
                      name="technicalSkills"
                      defaultValue={arryToString(
                        profileData?.skills?.technicalSkills as string[]
                      )}
                      onChange={handleInputChange}
                      id="technicalSkills"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Soft skills
                    </Label>
                    <Input
                      className="col-span-3"
                      name="softSkills"
                      defaultValue={arryToString(
                        profileData?.skills?.softSkills as string[]
                      )}
                      onChange={handleInputChange}
                      id="softSkills"
                    />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Preferred Locations
                    </Label>
                    <Input
                      className="col-span-3"
                      name="preferredLocations"
                      defaultValue={arryToString(
                        profileData?.jobPreferences
                          ?.preferredLocations as string[]
                      )}
                      onChange={handleInputChange}
                      id="preferredLocations"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => handleUpdate(updateData)}
                    size={'sm'}
                    className="hidden !px-4 font-bold uppercase sm:block"
                  >
                    Update Profile
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="my-4 h-[2px] bg-fade-center"></div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="mb-2">
            <Mail className="mx-auto h-4 w-4 text-primary" />
          </div>

          <div className="gap-2">
            <p className="text-xs uppercase">Email Address</p>
            <h2 className="font-bold">{email}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
