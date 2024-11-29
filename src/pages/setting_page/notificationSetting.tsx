import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@radix-ui/react-dropdown-menu';

export const NotificationSetting = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5 pr-2 sm:pr-4">
              <Label>Interview Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Get reminded about upcoming interviews and assessments
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Job Recommendations</Label>
              <p className="pr-2 text-sm text-muted-foreground sm:pr-4">
                Receive personalized job recommendations based on your profile
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="pr-2 text-sm text-muted-foreground sm:pr-4">
                Receive email notifications for important updates
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
