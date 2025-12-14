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
        {/* English Routes */}
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/cutting" component={Cutting} />
        <Route path="/services/color" component={Color} />
        <Route path="/services/treatments" component={Treatments} />
        <Route path="/book" component={Book} />

        {/* Spanish Routes */}
        <Route path="/es" component={Home} />
        <Route path="/es/about" component={About} />
        <Route path="/es/services" component={Services} />
        <Route path="/es/services/cutting" component={Cutting} />
        <Route path="/es/services/color" component={Color} />
        <Route path="/es/services/treatments" component={Treatments} />
        <Route path="/es/book" component={Book} />

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
        <WouterRouter hook={useHashLocation}>
          <LanguageProvider>
            <AppRoutes />
          </LanguageProvider>
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
