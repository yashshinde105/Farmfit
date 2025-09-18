import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  AlertTriangle, 
  Droplets, 
  Thermometer,
  Wind,
  Sun,
  TrendingUp,
  MapPin,
  Zap
} from "lucide-react";
import { HealthChart } from "./HealthChart";
import { AlertsPanel } from "./AlertsPanel";
import { EnvironmentalMonitor } from "./EnvironmentalMonitor";

export function Dashboard() {
  const stats = [
    {
      title: "Crop Health Score",
      value: "87%",
      change: "+3% from last week",
      icon: Leaf,
      status: "excellent"
    },
    {
      title: "Active Alerts", 
      value: "3",
      change: "2 resolved today",
      icon: AlertTriangle,
      status: "moderate"
    },
    {
      title: "AI Predictions",
      value: "12",
      change: "Updated 2h ago",
      icon: Zap,
      status: "good"
    }
  ];

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agriculture AI Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor crop health, soil conditions, and environmental factors in real-time
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
            Live Data Active
          </Badge>
          <Button>Generate Report</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const healthColor = `health-${stat.status}` as const;
          
          return (
            <Card key={index} className="transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`p-2 rounded-md bg-${healthColor}/10`}>
                  <Icon className={`h-4 w-4 text-${healthColor}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      

      {/* Bottom Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <HealthChart />
        
        <AlertsPanel />
      </div>
      <div className="grid gap-0 md:grid-cols-1 lg:grid-cols-1 ">
        {/* Alerts Panel */}
        <div>
          <EnvironmentalMonitor />
        </div>
      </div>
    </div>

  );
}