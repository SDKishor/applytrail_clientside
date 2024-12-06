import { Separator } from '@/components/ui/separator';
import DashBoardHomeTable, { PartialJobData } from './deshboardHomepageTable';
import { PertialReminderData, Remindercard } from './remindercard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AnalyticsOverview } from '../analytics_page/analyticsOverview';
import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IAnalytics } from '../analytics_page/analyticsPage';

const mockData: PartialJobData[] = [
  {
    id: 'job_001',
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    appliedDate: '2024-11-20',
    status: 'Interview Scheduled',
  },
  {
    id: 'job_002',
    title: 'Backend Engineer',
    company: 'Code Solutions',
    appliedDate: '2024-11-15',
    status: 'Offer Received',
  },
  {
    id: 'job_003',
    title: 'UI/UX Designer',
    company: 'DesignPro Agency',
    appliedDate: '2024-11-10',
    status: 'Rejected',
  },
  {
    id: 'job_004',
    title: 'Fullstack Developer',
    company: 'Tech Innovators',
    appliedDate: '2024-11-05',
    status: 'Applied',
  },
];

const mockData2: PertialReminderData = {
  title: 'Frontend Developer Interview',
  date: '2024-11-20',
  time: '10:00 AM',
};

export const DashboardHome = () => {
  const { user } = useUser();
  const [analyticsdata, setAnalyticsdata] = useState<IAnalytics>();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/analytics/${user?.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAnalyticsdata(res.data[0]);
      });
  }, [user]);

  return (
    <div className="container mx-auto mt-8 min-h-svh px-4 sm:px-6 lg:px-8">
      <h4 className="mb-4 text-lg">
        🖐 Hi{' '}
        <span className="font-bold capitalize">{user?.username ?? 'User'}</span>
        . Welcome
      </h4>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Overview</h2>
        <Link to="/dashboard/add-application">
          <Button className="!px-3 font-bold">Add Application</Button>
        </Link>
      </div>
      <p className="mt-2 text-muted-foreground">
        Here's a quick look at your progress.
      </p>
      <div className="my-6">
        <AnalyticsOverview
          application={analyticsdata?.applied ?? 0}
          interview={analyticsdata?.interview ?? 0}
          offer={analyticsdata?.offer ?? 0}
        />
      </div>
      <div className="flex justify-between">
        <h2 className="text-lg font-bold">Your recent job applications.</h2>
        <Button variant={'link'}>
          <Link to="/dashboard/applications" className="text-primary">
            See all
          </Link>
        </Button>
      </div>
      <Separator className="dark:bg-white/50" />
      <DashBoardHomeTable data={mockData.slice(0, 5)} />
      <h2 className="my-2 text-lg font-bold">Your upcoming interviews.</h2>
      <Separator className="dark:bg-white/50" />
      <div className="my-6 flex flex-wrap justify-center gap-4 xl:justify-evenly">
        <Remindercard data={mockData2} />
        <Remindercard data={mockData2} />
        <Remindercard data={mockData2} />
      </div>
    </div>
  );
};
