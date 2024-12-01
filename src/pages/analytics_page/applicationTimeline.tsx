import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export function ApplicationTimeline() {
  const data = [
    { week: 'W1', applications: 12 },
    { week: 'W2', applications: 15 },
    { week: 'W3', applications: 8 },
    { week: 'W4', applications: 18 },
    { week: 'W5', applications: 14 },
    { week: 'W6', applications: 10 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
