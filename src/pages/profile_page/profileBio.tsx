import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProfileBio({ bio }: { bio: string }) {
  return (
    <Card className="my-6 bg-sidebar">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-heading text-lg">About Me</CardTitle>
      </CardHeader>
      <CardContent className="min-h-16">
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
