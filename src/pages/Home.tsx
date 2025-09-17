import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Leaf, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Sprout,
  TrendingUp,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "AI-Powered Crop Health",
      description: "Advanced hyperspectral imaging and AI models detect crop stress, diseases, and pest risks before they become visible to the naked eye."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with spectral health maps, temporal trends, and predictive analytics for informed decision-making."
    },
    {
      icon: Shield,
      title: "Early Warning System",
      description: "Automated alerts for environmental threats, soil degradation, and optimal intervention timing to prevent crop losses."
    },
    {
      icon: Globe,
      title: "Field-Level Precision",
      description: "Zone-specific insights combining satellite imagery, sensor data, and environmental conditions for targeted farm management."
    }
  ];

  const benefits = [
    "Reduce crop losses by up to 30%",
    "Optimize resource usage and reduce costs",
    "Shift from reactive to proactive farming",
    "Increase yield with precision agriculture",
    "Real-time field monitoring 24/7",
    "Data-driven farming decisions"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AgriAI Platform</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/login">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Agriculture with
                  <span className="text-primary block">AI-Powered Insights</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Harness the power of hyperspectral imaging, environmental sensors, and deep learning 
                  to revolutionize crop monitoring and maximize farm productivity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span>30% Yield Increase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-success" />
                  <span>98% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-success" />
                  <span>Real-time Alerts</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src={heroImage} 
                  alt="AI-powered agricultural monitoring showing healthy crops with data overlays" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -top-4 -left-4 bg-card/90 backdrop-blur-sm border shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Real-time Monitoring</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="absolute -bottom-4 -right-4 bg-card/90 backdrop-blur-sm border shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">AI Analytics</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Advanced Agricultural Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with agricultural expertise 
              to deliver actionable insights for modern farming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Why Choose AgriAI Platform?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of farmers and agronomists who trust our AI-powered 
                  platform to optimize their agricultural operations.
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/login">
                <Button size="lg" className="group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              <div className="space-y-6">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                    <div className="text-sm text-muted-foreground">Acres Monitored</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-xl opacity-90">
              Join the agricultural revolution with AI-powered insights that help you 
              make smarter decisions and maximize your harvest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">AgriAI Platform</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 AgriAI Platform. Empowering sustainable agriculture through AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;