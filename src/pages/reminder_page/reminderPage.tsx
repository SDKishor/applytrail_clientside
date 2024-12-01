import { useState, useRef } from 'react';
import ReminderNotification from './reminderNotification';
import { UpcomingReminders } from './upcomingReminders';
import { toast } from 'sonner';

export interface Reminder {
  id: number;
  message: string;
  time: string;
  timeoutId: number;
}

export const ReminderPage = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const reminderIdRef = useRef(1);

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        toast('Please allow notifications', {
          description: 'You need to allow notifications to use this feature.',
        });
      }
    } else {
      alert('Your browser does not support notifications.');
    }
  };

  const scheduleNotification = async (time: string, message: string) => {
    await requestNotificationPermission();
    if (Notification.permission === 'granted') {
      const reminderTime = new Date(time).getTime();
      const now = new Date().getTime();

      if (reminderTime > now) {
        const delay = reminderTime - now;

        const timeoutId = window.setTimeout(() => {
          new Notification('Reminder', {
            body: message || 'You have a new reminder!',
            icon: './logo_dark.svg',
          });
        }, delay);

        const newReminder: Reminder = {
          id: reminderIdRef.current++,
          message,
          time,
          timeoutId,
        };
        setReminders((prev) => [...prev, newReminder]);
        toast('Reminder set Successfully', {
          description: `Reminder set for ${new Date(reminderTime).toLocaleString()}`,
        });
      } else {
        toast('Please Enter a Future Data and Time', {
          description: 'You need to provide a future date and time.',
        });
      }
    } else {
      toast('Please allow notifications', {
        description: 'You need to allow notifications to use this feature.',
      });
    }
  };

  const deleteReminder = (id: number) => {
    setReminders((prev) =>
      prev.filter((reminder) => {
        if (reminder.id === id) {
          clearTimeout(reminder.timeoutId);
          return false;
        }
        return true;
      })
    );
  };

  return (
    <div className="container mt-8 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-3 font-heading text-2xl font-bold">Set a Reminder</h2>
      <ReminderNotification scheduleNotification={scheduleNotification} />
      <UpcomingReminders
        reminders={reminders}
        deleteReminder={deleteReminder}
      />
    </div>
  );
};
