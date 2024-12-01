import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export const AccoutSetting = () => {
  const handleDeleteAccount = () => {
    return;
  };

  return (
    <Card className="my-6">
      <CardHeader>
        <CardTitle>Account Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <p className="rounded-sm border p-2 opacity-50">Kishor Sutradhar</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <p className="rounded-sm border p-2 opacity-50">
              kishor@example.com
            </p>
          </div>
        </div>
      </CardContent>

      <CardContent className="space-y-4">
        <div className="rounded-sm border p-4">
          <div className="mb-4 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="space-y-0.5">
              <Label>Download Personal Data</Label>
              <p className="text-sm text-muted-foreground">
                Get a copy of your personal data
              </p>
            </div>
            <Button variant="outline">Download</Button>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="space-y-0.5">
              <Label>Delete Account</Label>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove all of your data from our servers,
                    including:
                  </AlertDialogDescription>

                  <div className="">
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>Your profile information</li>
                      <li>All job applications and their history</li>
                      <li>Saved jobs and preferences</li>
                      <li>Interview schedules and notes</li>
                    </ul>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
