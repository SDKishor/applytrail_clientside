import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Select } from '@radix-ui/react-select';
import { CalendarIcon } from 'lucide-react';
import { IJobApplication } from './addApplicationPage';

interface applicationFormProps {
  onSubmit: (data: Partial<IJobApplication>) => void;
  formData: Partial<IJobApplication>;
  setFormData: React.Dispatch<React.SetStateAction<IJobApplication>>;
}

const ApplicationForm: React.FC<applicationFormProps> = ({
  onSubmit,
  formData,
  setFormData,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null, field: string) => {
    if (date) {
      setFormData((prevState) => ({
        ...prevState,
        [field]: date,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Job Title
        </label>
        <Input
          required
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium">
          Company
        </label>
        <Input
          required
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="salaryRange" className="block text-sm font-medium">
          Salary Range
        </label>
        <Input
          required
          id="salaryRange"
          name="salaryRange"
          value={formData.salaryRange}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="applyDate" className="block text-sm font-medium">
          Apply Date
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[240px] justify-start text-left font-normal',
                !formData.applyDate && 'text-muted-foreground'
              )}
            >
              <CalendarIcon />
              {'Apply Date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={formData.applyDate}
              onSelect={(date) => {
                if (date === undefined) {
                  date = new Date();
                }
                handleDateChange(date, 'applyDate');
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label htmlFor="jobType" className="block text-sm font-medium">
          Job Type
        </label>
        <Select
          name="jobType"
          value={formData.jobType}
          onValueChange={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              jobType: value as IJobApplication['jobType'],
            }));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={formData.jobType} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium">
          Source
        </label>
        <Select
          name="source"
          value={formData.source}
          onValueChange={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              source: value as IJobApplication['source'],
            }));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={formData.source} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="companyWebsite">Company website</SelectItem>
              <SelectItem value="jobBoard">Job board</SelectItem>
              <SelectItem value="referrals">Referrals</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium">
          Description (optional)
        </label>
        <Input
          id="description"
          name="description"
          value={formData.description || ''}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ApplicationForm;
