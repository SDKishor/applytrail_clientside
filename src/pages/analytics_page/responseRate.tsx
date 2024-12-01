import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function ResponseRates() {
  const stages = [
    { name: 'Applied', count: 156, total: 156, color: 'bg-blue-500' },
    { name: 'Screening', count: 89, total: 156, color: 'bg-yellow-500' },
    { name: 'Interview', count: 28, total: 156, color: 'bg-green-500' },
    { name: 'Offer', count: 3, total: 156, color: 'bg-purple-500' },
  ];

  return (
    <Card className="lg:w-2/3">
      <CardHeader>
        <CardTitle className="font-heading text-lg">
          Application Pipeline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {stages.map((stage) => {
          const percentage = Math.round((stage.count / stage.total) * 100);
          return (
            <div key={stage.name} className="space-y-2">
              <div className="text-md flex items-center justify-between opacity-70">
                <span>{stage.name}</span>
                <span className="text-muted-foreground">
                  {stage.count} ({percentage}%)
                </span>
              </div>
              <Progress value={percentage} className={stage.color} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
