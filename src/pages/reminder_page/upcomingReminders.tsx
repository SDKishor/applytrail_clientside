import { Button } from '@/components/ui/button';
import { Reminder } from './reminderPage';
import { useState, useEffect } from 'react';

interface UpcomingRemindersProps {
  reminders: Reminder[];
  deleteReminder: (id: number) => void;
}

export const UpcomingReminders = ({
  reminders,
  deleteReminder,
}: UpcomingRemindersProps) => {
  const [localReminders, setLocalReminders] = useState(reminders);

  useEffect(() => {
    setLocalReminders(reminders);
  }, [reminders]);

  const handleDelete = (id: number) => {
    deleteReminder(id);
    setLocalReminders((prevReminders) =>
      prevReminders.filter((reminder) => reminder.id !== id)
    );
  };

  return (
    <div className="my-6">
      <h2 className="mb-3 font-heading text-lg font-bold">
        Upcoming Reminders
      </h2>
      <div className="rounded-sm border p-4">
        {localReminders.length > 0 ? (
          localReminders.map((reminder) => (
            <div key={reminder.id} className="flex h-auto items-center gap-6">
              <p className="w-[80px]">{reminder.time.split('T')[1]}</p>
              <div className="relative h-[90px] w-[2px] bg-primary">
                <div className="absolute left-[-7px] top-[37px] flex h-4 w-4 items-center justify-center rounded-full bg-primary">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 rounded-sm border p-2">
                <h3>{reminder.message}</h3>
                <p className="text-sm opacity-50">
                  {reminder.time.split('T')[0]}
                </p>
              </div>
              <Button
                className="!px-5"
                variant="destructive"
                onClick={() => handleDelete(reminder.id)}
                size="sm"
              >
                Delete
              </Button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reminders scheduled.</p>
        )}
      </div>
    </div>
  );
};
