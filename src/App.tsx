import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="fields" element={<div className="p-6">Fields page coming soon...</div>} />
            <Route path="health" element={<div className="p-6">Crop health page coming soon...</div>} />
            <Route path="alerts" element={<div className="p-6">Alerts page coming soon...</div>} />
            <Route path="environmental" element={<div className="p-6">Environmental page coming soon...</div>} />
            <Route path="analytics" element={<div className="p-6">Analytics page coming soon...</div>} />
            <Route path="models" element={<div className="p-6">AI Models page coming soon...</div>} />
            <Route path="settings" element={<div className="p-6">Settings page coming soon...</div>} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
