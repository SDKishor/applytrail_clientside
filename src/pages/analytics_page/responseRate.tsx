import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ResponseRatesProps {
  application: number;
  screening: number;
  interview: number;
  offer: number;
}

export function ResponseRates({
  application,
  screening,
  interview,
  offer,
}: ResponseRatesProps) {
  const stages = [
    {
      name: 'Applied',
      count: application,
      total: application,
      color: 'bg-blue-500',
    },
    {
      name: 'Screening',
      count: screening,
      total: application,
      color: 'bg-yellow-500',
    },
    {
      name: 'Interview',
      count: interview,
      total: application,
      color: 'bg-green-500',
    },
    { name: 'Offer', count: offer, total: application, color: 'bg-purple-500' },
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
          let percentage;
          if (stage.total === 0) {
            percentage = 100;
          } else {
            percentage = Math.round((stage.count / stage.total) * 100);
          }

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
