import { FC } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export interface PartialJobData {
  id: string;
  title: string;
  company: string;
  appliedDate: string;
  status: 'Applied' | 'Interview Scheduled' | 'Offer Received' | 'Rejected';
}

const statusColors: Record<PartialJobData['status'], string> = {
  Applied: 'bg-blue-100 text-blue-600',
  'Interview Scheduled': 'bg-yellow-100 text-yellow-600',
  'Offer Received': 'bg-green-100 text-green-600',
  Rejected: 'bg-red-100 text-red-600',
};

interface JobApplicationsTableProps {
  data: PartialJobData[];
}

const DashBoardHomeTable: FC<JobApplicationsTableProps> = ({
  data,
}: JobApplicationsTableProps) => {
  return data.length === 0 ? (
    <p className="my-4 text-muted-foreground">No job applications found.</p>
  ) : (
    <div className="my-5 w-full overflow-hidden rounded-md border dark:border-white/30">
      <Table>
        <TableHeader className="h-12 bg-sidebar">
          <TableRow className="my-2 dark:border-white/30 sm:text-lg">
            <TableHead className="text-left">Title</TableHead>
            <TableHead className="text-left">Company</TableHead>
            <TableHead className="text-left">Application Date</TableHead>
            <TableHead className="text-left">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((job) => (
            <TableRow
              key={job.id}
              className="text-xs dark:border-white/30 sm:text-base"
            >
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>
                {new Date(job.appliedDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Badge className={statusColors[job.status]}>{job.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashBoardHomeTable;
