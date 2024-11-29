import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ProfileBio() {
  return (
    <Card className="my-6 bg-sidebar">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-heading text-lg">About Me</CardTitle>
      </CardHeader>
      <CardContent className="min-h-16">
        <p className="text-muted-foreground">
          Passionate software engineer with 8+ years of experience in full-stack
          development. Focused on creating scalable solutions and mentoring
          junior developers. Currently seeking new opportunities in innovative
          tech companies.
        </p>
      </CardContent>
    </Card>
  );
}
