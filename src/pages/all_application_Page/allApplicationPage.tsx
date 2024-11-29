import JobApplicationsTable, { JobApplication } from './jobApplicationTable';

const mockData: JobApplication[] = [
  {
    id: 'job_001',
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    salary: '$70,000 - $90,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-20',
    status: 'Interview Scheduled',
  },
  {
    id: 'job_002',
    title: 'Backend Engineer',
    company: 'Code Solutions',
    salary: '$110,000 - $130,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-15',
    status: 'Offer Received',
  },
  {
    id: 'job_003',
    title: 'UI/UX Designer',
    company: 'DesignPro Agency',
    salary: '$60,000 - $80,000',
    jobType: 'Contract',
    appliedDate: '2024-11-10',
    status: 'Rejected',
  },
  {
    id: 'job_004',
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    salary: '$80,000 - $100,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-05',
    status: 'Applied',
  },
  {
    id: 'job_005',
    title: 'Mobile Developer',
    company: 'Code Solutions',
    salary: '$90,000 - $110,000',
    jobType: 'Contract',
    appliedDate: '2024-10-31',
    status: 'Interview Scheduled',
  },
  {
    id: 'job_006',
    title: 'Data Scientist',
    company: 'DesignPro Agency',
    salary: '$70,000 - $90,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-20',
    status: 'Offer Received',
  },

  {
    id: 'job_007',
    title: 'Frontend Developer',
    company: 'Tech Innovators',
    salary: '$70,000 - $90,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-20',
    status: 'Applied',
  },
  {
    id: 'job_008',
    title: 'Backend Engineer',
    company: 'Code Solutions',
    salary: '$110,000 - $130,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-15',
    status: 'Interview Scheduled',
  },
  {
    id: 'job_009',
    title: 'UI/UX Designer',
    company: 'DesignPro Agency',
    salary: '$60,000 - $80,000',
    jobType: 'Contract',
    appliedDate: '2024-11-10',
    status: 'Offer Received',
  },
  {
    id: 'job_010',
    title: 'Full Stack Developer',
    company: 'Tech Innovators',
    salary: '$80,000 - $100,000',
    jobType: 'Full-time',
    appliedDate: '2024-11-05',
    status: 'Rejected',
  },
  {
    id: 'job_011',
    title: 'Mobile Developer',
    company: 'Code Solutions',
    salary: '$90,000 - $110,000',
    jobType: 'Contract',
    appliedDate: '2024-10-31',
    status: 'Applied',
  },
];

const handleEdit = (id: string) => {
  alert(`Edit job application with ID: ${id}`);
};
export const AllApplicationPage = () => {
  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 font-heading text-2xl font-bold">
        All Job Applications
      </h2>

      <JobApplicationsTable data={mockData} onEdit={handleEdit} />
    </div>
  );
};
