import { useState } from 'react';
import ApplicationForm from './applicationForm';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { toast } from 'sonner';

export interface IJobApplication {
  _id?: string;
  title: string;
  description?: string;
  company: string;
  salaryRange: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  applyDate: Date;
  interviewDate?: Date;
  status: 'Applied' | 'Interviewing' | 'Offered' | 'Rejected' | 'Accepted';
  source: 'linkedin' | ' companyWebsite' | 'jobBoard' | 'referrals';
}

export const AddApplicationPage = () => {
  const [formData, setFormData] = useState<IJobApplication>({
    title: '',
    description: '',
    company: '',
    salaryRange: '',
    jobType: 'Full-time',
    applyDate: new Date(),
    status: 'Applied',
    source: 'linkedin',
  });

  const { user } = useUser();

  console.log(formData);

  const handleFormSubmit = () => {
    const data = { ...formData, profileId: user?.id };
    setFormData((prevState) => ({
      ...prevState,
      applyDate: new Date(),
      title: '',
      description: '',
      company: '',
      salaryRange: '',
      jobType: 'Full-time',
      status: 'Applied',
      source: 'linkedin',
    }));

    axios
      .post(
        `https://applytrail-serverside.vercel.app/api/v1/job-application/create`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data);
      });
  };

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      Add Application
      <ApplicationForm
        onSubmit={handleFormSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};
