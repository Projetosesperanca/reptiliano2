import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Infrastructure from "./pages/Infrastructure";
import Networks from "./pages/Networks";
import Processes from "./pages/Processes";
import BI from "./pages/BI";
import About from "./pages/About";
import Careers from "./pages/Careers";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/desenvolvimento" component={Development} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/infraestrutura" component={Infrastructure} />
      <Route path="/redes" component={Networks} />
      <Route path="/processos" component={Processes} />
      <Route path="/bi" component={BI} />
      <Route path="/sobre" component={About} />
      <Route path="/carreiras" component={Careers} />
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
