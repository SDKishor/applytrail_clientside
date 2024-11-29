import { AccoutSetting } from './accoutSetting';
import { NotificationSetting } from './notificationSetting';

export const SettingPage = () => {
  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 font-heading text-2xl font-bold">Setting</h2>
      <AccoutSetting />
      <NotificationSetting />
    </div>
  );
};
