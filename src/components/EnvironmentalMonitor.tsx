import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Thermometer,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Gauge
} from "lucide-react";

export function EnvironmentalMonitor() {
  const environmentalData = [
    {
      label: "Soil Temperature",
      value: "22°C",
      percentage: 75,
      status: "optimal",
      icon: Thermometer,
      trend: "+1.2°C from yesterday",
      range: "18-26°C optimal"
    },
    {
      label: "Soil Moisture",
      value: "45%",
      percentage: 60,
      status: "moderate", 
      icon: Droplets,
      trend: "-5% from yesterday",
      range: "40-70% optimal"
    },
    {
      label: "Air Humidity",
      value: "68%",
      percentage: 68,
      status: "good",
      icon: CloudRain,
      trend: "+3% from yesterday",
      range: "50-80% optimal"
    },
    {
      label: "Wind Speed", 
      value: "12 km/h",
      percentage: 40,
      status: "good",
      icon: Wind,
      trend: "Consistent light breeze",
      range: "5-25 km/h optimal"
    },
    {
      label: "UV Index",
      value: "6.2",
      percentage: 62,
      status: "moderate",
      icon: Sun,
      trend: "Peak at 2 PM",
      range: "4-8 moderate"
    },
    {
      label: "Atmospheric Pressure",
      value: "1013 hPa",
      percentage: 85,
      status: "excellent",
      icon: Gauge,
      trend: "Stable conditions",
      range: "1000-1020 hPa normal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "health-excellent";
      case "optimal": return "health-excellent";
      case "good": return "health-good";
      case "moderate": return "health-moderate";
      case "poor": return "health-poor";
      default: return "health-moderate";
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      excellent: "default",
      optimal: "default", 
      good: "default",
      moderate: "outline",
      poor: "destructive"
    } as const;
    
    return colors[status as keyof typeof colors] || "secondary";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Gauge className="h-5 w-5" />
          <span>Environmental Conditions</span>
          <Badge variant="outline" className="ml-auto bg-success/10 text-success">
            Live Sensors
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {environmentalData.map((item, index) => {
            const Icon = item.icon;
            const statusColor = getStatusColor(item.status);
            const badgeVariant = getStatusBadge(item.status);
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-md bg-${statusColor}/10`}>
                      <Icon className={`h-4 w-4 text-${statusColor}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{item.label}</span>
                        <Badge variant={badgeVariant} className="text-xs h-5">
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.range}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{item.value}</div>
                    <p className="text-xs text-muted-foreground">{item.trend}</p>
                  </div>
                </div>
                
                <Progress 
                  value={item.percentage} 
                  className={`h-2 bg-${statusColor}/20`}
                />
              </div>
            );
          })}
        </div>

        {/* Summary card */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Overall Environmental Score</h4>
              <p className="text-sm text-muted-foreground">
                Based on current sensor readings
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-health-good">82/100</div>
              <p className="text-xs text-muted-foreground">Good conditions</p>
            </div>
          </div>
          <Progress value={82} className="mt-3 h-2" />
        </div>
      </CardContent>
    </Card>
  );
}