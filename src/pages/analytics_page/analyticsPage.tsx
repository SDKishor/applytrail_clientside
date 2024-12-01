import { AnalyticsOverview } from './analyticsOverview';
import { ApplicationTimeline } from './applicationTimeline';
import { ResponseRates } from './responseRate';
import { SourceBreakdown } from './sourceBreakdown';

export const AnalyticsPage = () => {
  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <div className="">
        <h1 className="font-heading text-2xl font-bold">Analytics</h1>
        <p className="text-md text-muted-foreground">
          Track your job search progress and insights
        </p>
      </div>
      <div className="my-6">
        <AnalyticsOverview />
      </div>
      <div className="mb-6 flex flex-col gap-4 lg:flex-row">
        <ResponseRates />
        <SourceBreakdown />
      </div>
      <div className="">
        <ApplicationTimeline />
      </div>
    </div>
  );
};
