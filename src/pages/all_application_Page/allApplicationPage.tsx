import { Button } from '@/components/ui/button';
import JobApplicationsTable from './jobApplicationTable';
import { Link, useNavigate } from 'react-router-dom';
import { IJobApplication } from '../add_application_page/addApplicationPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';

export const AllApplicationPage = () => {
  const [tabeldata, setTabeldata] = useState<IJobApplication[]>([]);
  const { user } = useUser();

  useEffect(() => {
    axios
      .get(
        `https://applytrail-serverside.vercel.app/api/v1/job-application/${user?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setTabeldata(res.data.data);
      });
  }, [user]);

  const navigate = useNavigate();
  const handleDetails = (id: string) => {
    //navigate to details page
    navigate(`/dashboard/application-details/${id}`);
  };

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">
          All Job Applications
        </h2>
        <Link to="/dashboard/add-application">
          <Button className="!px-3 font-bold">Add Application</Button>
        </Link>
      </div>

      <JobApplicationsTable data={tabeldata} onClickDetails={handleDetails} />
    </div>
  );
};
