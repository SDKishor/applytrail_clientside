const ProgressSection = () => {
  return (
    <div className="my-6 flex flex-wrap justify-center gap-4 xl:justify-between">
      <div className="w-full rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800 sm:w-auto sm:min-w-72">
        <h2 className="text-lg font-medium">Total Applications</h2>
        <p className="text-3xl font-bold">42</p>
      </div>
      <div className="w-full rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800 sm:w-auto sm:min-w-72">
        <h2 className="text-lg font-medium">Pending Tasks</h2>
        <p className="text-3xl font-bold">8</p>
      </div>
      <div className="w-full rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800 sm:w-auto sm:min-w-72">
        <h2 className="text-lg font-medium">Completed Tasks</h2>
        <p className="text-3xl font-bold">34</p>
      </div>
    </div>
  );
};

export default ProgressSection;
