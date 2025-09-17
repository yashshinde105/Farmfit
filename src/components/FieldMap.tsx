import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Maximize2, 
  Layers,
  Leaf,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export function FieldMap() {
  const fields = [
    { 
      id: "F001", 
      name: "North Field A", 
      health: "excellent", 
      area: "45.2 ha",
      crop: "Wheat",
      alerts: 0,
      position: { top: "20%", left: "30%" }
    },
    { 
      id: "F002", 
      name: "South Field B", 
      health: "good", 
      area: "38.7 ha",
      crop: "Corn",
      alerts: 1,
      position: { top: "60%", left: "25%" }
    },
    { 
      id: "F003", 
      name: "East Field C", 
      health: "moderate", 
      area: "52.1 ha",
      crop: "Soybeans",
      alerts: 2,
      position: { top: "35%", left: "65%" }
    },
    { 
      id: "F004", 
      name: "West Field D", 
      health: "poor", 
      area: "29.8 ha",
      crop: "Barley",
      alerts: 3,
      position: { top: "75%", left: "55%" }
    }
  ];

  const getHealthColor = (health: string) => {
    switch (health) {
      case "excellent": return "health-excellent";
      case "good": return "health-good";
      case "moderate": return "health-moderate";
      case "poor": return "health-poor";
      default: return "health-moderate";
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case "excellent": 
      case "good": 
        return CheckCircle;
      case "moderate": 
        return Leaf;
      case "poor":
      case "critical":
        return AlertTriangle;
      default: 
        return Leaf;
    }
  };

  return (
    <Card className="h-[400px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Field Health Map</span>
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Layers className="h-4 w-4 mr-2" />
              Layers
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative h-[280px] bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-dashed border-green-200 overflow-hidden">
          {/* Simulate satellite/aerial view background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-green-200 via-yellow-100 to-brown-100"></div>
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="field-texture" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="20" height="20" fill="none" stroke="rgba(0,100,0,0.1)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#field-texture)" />
            </svg>
          </div>

          {/* Field zones */}
          {fields.map((field) => {
            const HealthIcon = getHealthIcon(field.health);
            const healthColor = getHealthColor(field.health);
            
            return (
              <div
                key={field.id}
                className="absolute group cursor-pointer transition-transform hover:scale-110"
                style={field.position}
              >
                {/* Field boundary visualization */}
                <div className={`w-16 h-12 rounded-lg border-2 border-${healthColor} bg-${healthColor}/20 flex items-center justify-center relative`}>
                  <HealthIcon className={`h-6 w-6 text-${healthColor}`} />
                  
                  {/* Alert badge */}
                  {field.alerts > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {field.alerts}
                    </Badge>
                  )}
                </div>

                {/* Field info tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card border rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 min-w-[200px]">
                  <div className="text-sm font-medium">{field.name}</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>ID: {field.id}</div>
                    <div>Crop: {field.crop}</div>
                    <div>Area: {field.area}</div>
                    <div className="flex items-center space-x-1">
                      <span>Health:</span>
                      <Badge 
                        variant="outline" 
                        className={`text-${healthColor} border-${healthColor}/20 bg-${healthColor}/10`}
                      >
                        {field.health}
                      </Badge>
                    </div>
                    {field.alerts > 0 && (
                      <div className="text-warning">⚠️ {field.alerts} active alerts</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur border rounded-lg p-3 text-xs">
            <div className="font-medium mb-2">Health Status</div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-health-excellent"></div>
                <span>Excellent</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-health-good"></div>
                <span>Good</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-health-moderate"></div>
                <span>Moderate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded bg-health-poor"></div>
                <span>Needs Attention</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}