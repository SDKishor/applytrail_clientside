import { useUser } from '@clerk/clerk-react';
import { AnalyticsOverview } from './analyticsOverview';
import { ApplicationTimeline } from './applicationTimeline';
import { ResponseRates } from './responseRate';
import { SourceBreakdown } from './sourceBreakdown';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface IAnalytics {
  applied: number;
  screening: number;
  interview: number;
  offer: number;
  weekData: {
    w1: number;
    w2: number;
    w3: number;
    w4: number;
    w5: number;
    w6: number;
  };
  source: {
    linkedin: number;
    companyWebsite: number;
    jobBoard: number;
    referrals: number;
  };
  profileId: string;
}

export const AnalyticsPage = () => {
  const { user } = useUser();
  const [analyticsdata, setAnalyticsdata] = useState<IAnalytics>();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/analytics/:${user?.id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setAnalyticsdata(res.data.data[0]);
      });
  }, [user]);

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="font-heading text-2xl font-bold">Analytics</h1>
        <p className="text-md text-muted-foreground">
          Track your job search progress and insights
        </p>
      </div>
      <div className="my-6">
        <AnalyticsOverview
          application={analyticsdata?.applied ?? 0}
          interview={analyticsdata?.interview ?? 0}
          offer={analyticsdata?.offer ?? 0}
        />
      </div>

      {analyticsdata?.applied === 0 ? (
        <p>To see your analytics, please add a job </p>
      ) : (
        <>
          <div className="mb-6 flex flex-col gap-4 lg:flex-row">
            <ResponseRates
              application={analyticsdata?.applied ?? 0}
              interview={analyticsdata?.interview ?? 0}
              offer={analyticsdata?.offer ?? 0}
              screening={analyticsdata?.screening ?? 0}
            />
            <SourceBreakdown
              linkedIn={analyticsdata?.source?.linkedin ?? 0}
              companyWebsite={analyticsdata?.source?.companyWebsite ?? 0}
              jobBoard={analyticsdata?.source?.jobBoard ?? 0}
              referrals={analyticsdata?.source?.referrals ?? 0}
            />
          </div>
          <div className="">
            <ApplicationTimeline />
          </div>
        </>
      )}
    </div>
  );
};
