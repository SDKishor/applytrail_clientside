import { Briefcase, CalendarIcon } from 'lucide-react';
import { IJobApplication } from '../add_application_page/addApplicationPage';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { toast } from 'sonner';

const statusColors: Record<IJobApplication['status'], string> = {
  Applied: 'bg-blue-100 text-blue-600',
  Interviewing: 'bg-yellow-100 text-yellow-600',
  Offered: 'bg-green-100 text-green-600',
  Rejected: 'bg-red-100 text-red-600',
  Accepted: 'bg-green-100 text-green-600',
};

export const SingleJobApplication = () => {
  const [data, setData] = useState<IJobApplication>({} as IJobApplication);
  const [updatedData, setUpdatedData] = useState<IJobApplication>(
    {} as IJobApplication
  );
  const formattedDate = new Date(data?.applyDate ?? '').toLocaleDateString();

  const [isOpen, setIsOpen] = useState(false);

  // get params
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://applytrail-serverside.vercel.app/api/v1/job-application/getsinglejobapplication/${params.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        setData(res.data.data);
        setUpdatedData(res.data.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  }, [params.id]);

  const handleDateChange = (date: Date | null, field: string) => {
    if (date) {
      setUpdatedData((prevState) => ({
        ...prevState,
        [field]: date,
      }));
    }
  };

  const handelUpdate = (id: string) => {
    setIsOpen(false);

    axios
      .patch(
        `https://applytrail-serverside.vercel.app/api/v1/job-application/update/${id}`,
        {
          status: updatedData.status,
          interviewDate: updatedData.interviewDate,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setData(res.data.data);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex justify-between rounded-lg bg-sidebar p-6 shadow-md dark:bg-gray-800">
        <div className="w-2/3">
          <div className="mb-2 flex items-center gap-4">
            <h1 className="text-2xl font-bold">{data?.title}</h1>
            <Badge className={statusColors[data?.status]}>{data?.status}</Badge>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <div className="mb-6">
              <div className="flex gap-3 text-gray-400">
                <div className="font-semibold">
                  <Briefcase />
                </div>
                {data?.company}
              </div>
            </div>

            <p className="flex justify-between">
              <span className="font-semibold">Salary Range: </span>
              {data?.salaryRange}
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Job Type: </span>
              {data?.jobType}
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Apply Date: </span>
              {formattedDate}
            </p>

            <p className="flex justify-between">
              <span className="font-semibold">Source: </span>
              {data?.source}
            </p>
          </div>
          <h2 className="mb-2 text-xl font-semibold">Description</h2>
          <p className="text-gray-400">{data?.description}</p>
        </div>
        <div className="">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="!px-4 font-bold">Update</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Update profile</DialogTitle>
                <DialogDescription>
                  Update your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Status
                  </Label>
                  <Select
                    name="status"
                    value={updatedData.status}
                    onValueChange={(value) => {
                      setUpdatedData((prevState) => ({
                        ...prevState,
                        status: value as IJobApplication['status'],
                      }));
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={updatedData?.status} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Applied">Applied</SelectItem>
                        <SelectItem value="Interviewing">
                          Interviewing
                        </SelectItem>
                        <SelectItem value="Offered">Offered</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                        <SelectItem value="Accepted">Accepted</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {updatedData?.status === 'Interviewing' && (
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Interview Date
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] justify-start text-left font-normal',
                            !data.interviewDate && 'text-muted-foreground'
                          )}
                        >
                          <CalendarIcon />
                          {updatedData.interviewDate
                            ? updatedData.interviewDate.toLocaleDateString()
                            : 'Interview Date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={data.interviewDate}
                          onSelect={(date) => {
                            if (date === undefined) {
                              date = new Date();
                            }
                            handleDateChange(date, 'interviewDate');
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button
                  onClick={() => {
                    handelUpdate(data._id as string);
                  }}
                  type="submit"
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
