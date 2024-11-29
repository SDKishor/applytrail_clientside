import { ProfileBio } from './profileBio';
import { ProfileHeader } from './profileHeader';
import { ProfilePreferences } from './profilepreferance';
import { ProfileSkills } from './profileSkills';

export const ProfilePage = () => {
  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <ProfileHeader />

      <ProfileBio />
      <div className="mb-6 flex flex-col justify-between gap-6 lg:flex-row">
        <ProfileSkills />
        <ProfilePreferences />
      </div>
    </div>
  );
};
