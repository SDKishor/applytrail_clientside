import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // ShadCN Button
import { Input } from '@/components/ui/input'; // ShadCN Input
import { Label } from '@/components/ui/label'; // ShadCN Label

interface ReminderNotificationProps {
  scheduleNotification: (message: string, time: string) => void;
}

const ReminderNotification: React.FC<ReminderNotificationProps> = ({
  scheduleNotification,
}: ReminderNotificationProps) => {
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="mx-auto w-full max-w-md rounded-md border p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-bold">Set a Reminder</h2>
      <div className="flex flex-col gap-4">
        {/* Reminder Message Input */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="reminder-message">Reminder Message:</Label>
          <Input
            id="reminder-message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your reminder message"
          />
        </div>

        {/* Reminder Time Input */}
        <div className="flex flex-col gap-2">
          <Label htmlFor="reminder-time">Reminder Time:</Label>
          <Input
            id="reminder-time"
            type="datetime-local"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            variant="default"
            onClick={() => {
              scheduleNotification(time, message);
              setMessage('');
              setTime('');
            }}
            disabled={!message || !time}
          >
            Set Reminder
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReminderNotification;
