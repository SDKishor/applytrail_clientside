import { useEffect, useState } from 'react';
import { ProfileBio } from './profileBio';
import { ProfileHeader } from './profileHeader';
import { ProfilePreferences } from './profilepreferance';
import { ProfileSkills } from './profileSkills';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from 'sonner';

type TworkType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';

export interface IUserProfile {
  _id?: string;
  profileId: string;
  username?: string;
  email: string;
  bio?: string;
  skills?: {
    technicalSkills?: string[];
    softSkills?: string[];
  };
  jobPreferences?: {
    preferredLocations?: string[];
    salaryRange?: string;
    workType?: TworkType[];
  };
}

export const ProfilePage = () => {
  const [profileData, setProfileData] = useState<IUserProfile>({
    profileId: '',
    email: '',
  });
  const { user } = useUser();

  useEffect(() => {
    axios
      .get(
        `https://applytrail-serverside.vercel.app/api/v1/user-profile/${user?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setProfileData(res.data.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  }, [user?.id]);

  const stringToArray = (string: string) => {
    if (string === undefined) return [];
    return string.split(', ').map((item) => item.trim());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdate = (data: any) => {
    console.log(data);

    const updatedData: IUserProfile = {
      ...profileData,
      bio: data.bio,
      skills: {
        ...profileData.skills,
        technicalSkills: stringToArray(data.technicalSkills),
        softSkills: stringToArray(data.softSkills),
      },
      jobPreferences: {
        ...profileData.jobPreferences,
        preferredLocations: stringToArray(data.preferredLocations),
        salaryRange: data.salaryRange,
      },
    };

    axios
      .patch(
        `https://applytrail-serverside.vercel.app/api/v1/user-profile/update`,
        updatedData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProfileData(res.data.data);
        setIsOpen(false);
        toast.success(res.data.message);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <ProfileHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        profileData={profileData}
        handleUpdate={handleUpdate}
      />

      <ProfileBio
        bio={
          profileData.bio === ''
            ? 'Please update your bio'
            : (profileData.bio ?? '')
        }
      />
      <div className="mb-6 flex flex-col justify-between gap-6 lg:flex-row">
        <ProfileSkills
          technical={profileData.skills?.technicalSkills ?? []}
          soft={profileData.skills?.softSkills ?? []}
        />
        <ProfilePreferences
          locations={profileData.jobPreferences?.preferredLocations ?? []}
          salary={profileData.jobPreferences?.salaryRange ?? ''}
          workType={profileData.jobPreferences?.workType ?? []}
        />
      </div>
    </div>
  );
};
