import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import { TrendingUp, Calendar } from "lucide-react";

export function HealthChart() {
  // Sample data for the last 30 days
  const healthData = [
    { date: "Jan 1", health: 82, ndvi: 0.72, predicted: 84 },
    { date: "Jan 3", health: 84, ndvi: 0.74, predicted: 85 },
    { date: "Jan 5", health: 86, ndvi: 0.76, predicted: 87 },
    { date: "Jan 7", health: 85, ndvi: 0.75, predicted: 86 },
    { date: "Jan 9", health: 87, ndvi: 0.78, predicted: 89 },
    { date: "Jan 11", health: 89, ndvi: 0.80, predicted: 90 },
    { date: "Jan 13", health: 88, ndvi: 0.79, predicted: 89 },
    { date: "Jan 15", health: 90, ndvi: 0.82, predicted: 91 },
    { date: "Jan 17", health: 87, ndvi: 0.77, predicted: 88 },
    { date: "Jan 19", health: 85, ndvi: 0.75, predicted: 86 },
    { date: "Jan 21", health: 88, ndvi: 0.79, predicted: 90 },
    { date: "Jan 23", health: 91, ndvi: 0.84, predicted: 93 },
    { date: "Jan 25", health: 89, ndvi: 0.81, predicted: 91 },
    { date: "Jan 27", health: 87, ndvi: 0.78, predicted: 89 },
    { date: "Today", health: 87, ndvi: 0.78, predicted: 88 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border rounded-lg shadow-lg p-3">
          <p className="font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.name === 'NDVI' ? entry.value.toFixed(2) : `${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Crop Health Trends</span>
          </CardTitle>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={healthData}>
              <defs>
                <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--health-excellent))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--health-excellent))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="ndviGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-secondary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-secondary))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="date" 
                className="text-xs" 
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis 
                className="text-xs" 
                tick={{ fontSize: 12 }}
                domain={[70, 100]}
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Health Score Area */}
              <Area
                type="monotone"
                dataKey="health"
                stroke="hsl(var(--health-excellent))"
                fillOpacity={1}
                fill="url(#healthGradient)"
                strokeWidth={2}
                name="Health Score"
              />
              
              {/* NDVI Line (scaled to match health score range) */}
              <Line
                type="monotone"
                dataKey={(data) => (data.ndvi * 100).toFixed(0)} // Scale NDVI to 0-100 range
                stroke="hsl(var(--chart-secondary))"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
                name="NDVI Index"
              />
              
              {/* Predicted trend */}
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="hsl(var(--warning))"
                strokeWidth={2}
                strokeDasharray="2 2"
                dot={false}
                name="AI Prediction"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend and insights */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-health-excellent"></div>
                <span className="text-xs">Health Score</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-chart-secondary"></div>
                <span className="text-xs">NDVI Index</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-warning border-dashed"></div>
                <span className="text-xs">AI Forecast</span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              Current: 87% Health, 0.78 NDVI
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}