import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface SourceBreakdownProps {
  linkedIn: number;
  companyWebsite: number;
  jobBoard: number;
  referrals: number;
}

export function SourceBreakdown({
  linkedIn = 0,
  companyWebsite = 0,
  jobBoard = 0,
  referrals = 0,
}: SourceBreakdownProps) {
  const data = [
    { name: 'LinkedIn', value: linkedIn, color: '#0077B5' },
    { name: 'Company Sites', value: companyWebsite, color: '#2557a7' },
    { name: 'Referrals', value: referrals, color: '#00a550' },
    { name: 'Job Boards', value: jobBoard, color: '#ff6b6b' },
  ];

  return (
    <Card className="w-full lg:w-1/3">
      <CardHeader>
        <CardTitle className="font-heading text-lg">
          Application Sources
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
