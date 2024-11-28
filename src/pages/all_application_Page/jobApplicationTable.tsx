import React, { useState, useMemo } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export type JobApplication = {
  id: string;
  title: string;
  company: string;
  salary: string;
  jobType: string;
  appliedDate: string;
  status: 'Applied' | 'Interview Scheduled' | 'Offer Received' | 'Rejected';
};

const statusColors: Record<JobApplication['status'], string> = {
  Applied: 'bg-blue-100 text-blue-600',
  'Interview Scheduled': 'bg-yellow-100 text-yellow-600',
  'Offer Received': 'bg-green-100 text-green-600',
  Rejected: 'bg-red-100 text-red-600',
};

interface JobApplicationsTableProps {
  data: JobApplication[];
  onEdit: (id: string) => void;
}

const JobApplicationsTable: React.FC<JobApplicationsTableProps> = ({
  data,
  onEdit,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof JobApplication | null>(
    null
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filter data based on search term
  const filteredData = useMemo(() => {
    return data.filter((job) =>
      Object.values(job)
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, searchTerm, itemsPerPage]);

  // Sort data based on column and order
  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return 0;
    });
  }, [filteredData, sortColumn, sortOrder]);

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedData, currentPage]);

  // Handle sorting
  const handleSort = (column: keyof JobApplication) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  return (
    <div className="">
      <div className="mb-4 flex items-center justify-between">
        <Input
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md"
        />
        <div className="">
          <Select onValueChange={(value) => setItemsPerPage(Number(value))}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="5" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        {/* Table */}
        <div
          className={`mb-4 ${itemsPerPage === 5 ? 'min-h-[320px]' : 'min-h-[620px]'} w-full overflow-hidden rounded-md border`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                {[
                  { label: 'Title', key: 'title' },
                  { label: 'Company', key: 'company' },
                  { label: 'Salary', key: 'salary', sortable: false },
                  { label: 'Job Type', key: 'jobType' },
                  { label: 'Application Date', key: 'appliedDate' },
                  { label: 'Status', key: 'status' },
                  { label: 'Actions', key: 'actions', sortable: false },
                ].map(({ label, key, sortable = true }) => (
                  <TableHead
                    key={key}
                    onClick={
                      sortable
                        ? () => handleSort(key as keyof JobApplication)
                        : undefined
                    }
                    className={sortable ? 'cursor-pointer' : ''}
                  >
                    {label}
                    {sortable &&
                      sortColumn === key &&
                      (sortOrder === 'asc' ? ' ↑' : ' ↓')}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.salary}</TableCell>
                  <TableCell>{job.jobType}</TableCell>
                  <TableCell>
                    {new Date(job.appliedDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColors[job.status]}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(job.id)}
                    >
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}

        <Pagination className="my-10">
          <PaginationContent className="gap-4">
            <PaginationItem>
              <PaginationPrevious
                disabled={currentPage === 1}
                className="cursor-pointer hover:bg-border"
                onClick={() => {
                  if (currentPage === 1) {
                    return;
                  }
                  setCurrentPage(currentPage - 1);
                }}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={i + 1 === currentPage}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                disabled={currentPage === totalPages}
                className="cursor-pointer hover:bg-border disabled:cursor-not-allowed"
                onClick={() => {
                  if (currentPage === totalPages) {
                    return;
                  }
                  setCurrentPage(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default JobApplicationsTable;
