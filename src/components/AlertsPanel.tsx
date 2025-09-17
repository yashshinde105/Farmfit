import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Bug,
  Droplets,
  Thermometer
} from "lucide-react";

export function AlertsPanel() {
  const alerts = [
    {
      id: "ALT001",
      title: "Pest Activity Detected",
      field: "East Field C",
      severity: "high",
      type: "pest",
      time: "2 hours ago",
      description: "Aphid population spike detected in sector 7-B",
      status: "active"
    },
    {
      id: "ALT002", 
      title: "Low Soil Moisture",
      field: "West Field D",
      severity: "medium",
      type: "moisture",
      time: "4 hours ago", 
      description: "Moisture levels below optimal threshold",
      status: "active"
    },
    {
      id: "ALT003",
      title: "Temperature Stress Risk",
      field: "North Field A",
      severity: "low",
      type: "temperature",
      time: "6 hours ago",
      description: "Predicted heat stress conditions tomorrow",
      status: "monitoring"
    },
    {
      id: "ALT004",
      title: "Irrigation System OK",
      field: "South Field B", 
      severity: "resolved",
      type: "system",
      time: "1 day ago",
      description: "Irrigation malfunction resolved successfully",
      status: "resolved"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "pest": return Bug;
      case "moisture": return Droplets;
      case "temperature": return Thermometer;
      case "system": return CheckCircle;
      default: return AlertTriangle;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      case "resolved": return "success";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved": return CheckCircle;
      case "monitoring": return Clock;
      default: return AlertTriangle;
    }
  };

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Live Alerts</span>
          </CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {alerts.filter(a => a.status === 'active').length} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {alerts.map((alert) => {
            const AlertIcon = getAlertIcon(alert.type);
            const StatusIcon = getStatusIcon(alert.status);
            const severityColor = getSeverityColor(alert.severity);
            
            return (
              <div 
                key={alert.id} 
                className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <div className={`p-2 rounded-md bg-${severityColor === 'destructive' ? 'destructive' : severityColor === 'warning' ? 'warning' : severityColor === 'success' ? 'success' : 'secondary'}/10 flex-shrink-0`}>
                  <AlertIcon className={`h-4 w-4 text-${severityColor === 'destructive' ? 'destructive' : severityColor === 'warning' ? 'warning' : severityColor === 'success' ? 'success' : 'secondary'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium truncate">{alert.title}</h4>
                      <p className="text-xs text-muted-foreground">{alert.field}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-2">
                      <Badge 
                        variant={severityColor as any}
                        className="text-xs"
                      >
                        {alert.severity}
                      </Badge>
                      <StatusIcon className={`h-3 w-3 ${
                        alert.status === 'resolved' ? 'text-success' : 
                        alert.status === 'monitoring' ? 'text-warning' : 
                        'text-muted-foreground'
                      }`} />
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {alert.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                    {alert.status === 'active' && (
                      <Button size="sm" variant="outline" className="h-6 text-xs">
                        View Details
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t">
          <Button variant="outline" className="w-full" size="sm">
            View All Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}