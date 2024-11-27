import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CalendarClock, Handshake } from 'lucide-react';

export interface PertialReminderData {
  title: string;
  date: string;
  time: string;
}
interface PertialReminderDataProps {
  data: PertialReminderData;
}

export const Remindercard = ({ data }: PertialReminderDataProps) => {
  return (
    <Card className="max-w-72">
      <CardHeader className="flex-row items-center justify-evenly pb-3 text-center font-heading text-lg font-bold">
        <div className="rounded-lg bg-primary/50 p-2">
          <Handshake className="" />
        </div>
        {data.title}
      </CardHeader>
      <CardContent>
        <Separator />
        <div className="flex items-center justify-evenly pt-2">
          <CalendarClock className="text-accent" />

          <div className="text-base font-normal opacity-70">
            {data.date}, {data.time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
