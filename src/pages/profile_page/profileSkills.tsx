import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export function ProfileSkills({
  technical,
  soft,
}: {
  technical: string[];
  soft: string[];
}) {
  return (
    <Card className="flex-1 bg-sidebar">
      <CardHeader>
        <CardTitle className="font-heading text-lg">Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {technical.length > 0 && soft.length > 0 ? (
          <>
            <div className="flex gap-2">
              <Laptop className="mt-1 h-6 w-6 text-primary/80 dark:text-primary/50" />
              <div className="flex-1">
                <h3 className="mb-2 font-heading font-medium">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technical.map((skill, index) => (
                    <Badge key={skill + index} variant="outline">
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
                  {soft.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          'Please add skills'
        )}
      </CardContent>
    </Card>
  );
}
