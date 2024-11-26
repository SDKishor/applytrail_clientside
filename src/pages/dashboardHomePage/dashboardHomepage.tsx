export const DashboardHome = () => {
  return (
    <div className="container mx-auto mt-8 min-h-svh px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <p className="mt-2 text-muted-foreground">
        Here's a quick look at your progress.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Total Applications</h2>
          <p className="text-3xl font-bold">42</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Pending Tasks</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
        <div className="rounded-lg border bg-card p-4 shadow-sm">
          <h2 className="text-lg font-medium">Completed Tasks</h2>
          <p className="text-3xl font-bold">34</p>
        </div>
      </div>

      {/* Example for embedding a chart */}
      <div className="mt-8">
        <h2 className="text-lg font-bold">Application Trends</h2>
        <div className="rounded-lg bg-card p-4 shadow-sm">
          {/* Replace this with a real chart */}
          <p>Chart goes here</p>
        </div>
      </div>
    </div>
  );
};
