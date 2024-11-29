import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export function ProfileSkills() {
  const skills = {
    technical: ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'],
    soft: ['Leadership', 'Communication', 'Problem Solving', 'Team Management'],
  };

  return (
    <Card className="flex-1 bg-sidebar">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Laptop className="mt-1 h-6 w-6 text-primary/80 dark:text-primary/50" />
          <div className="flex-1">
            <h3 className="mb-2 font-heading font-medium">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Laptop className="mt-1 h-6 w-6 text-primary/80 dark:text-primary/50" />
          <div className="flex-1">
            <h3 className="mb-2 font-heading font-medium">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
