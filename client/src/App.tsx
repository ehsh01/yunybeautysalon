import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/lib/language-context";
import Layout from "@/components/layout";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Cutting from "@/pages/cutting";
import Color from "@/pages/color";
import Treatments from "@/pages/treatments";
import Book from "@/pages/book";
import NotFound from "@/pages/not-found";

function AppRoutes() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/cutting" component={Cutting} />
        <Route path="/services/color" component={Color} />
        <Route path="/services/treatments" component={Treatments} />
        <Route path="/book" component={Book} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <LanguageProvider>
          <WouterRouter hook={useHashLocation}>
            <AppRoutes />
          </WouterRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
