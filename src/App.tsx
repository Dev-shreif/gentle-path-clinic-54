import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import DoctorsPage from "./pages/DoctorsPage";
import DoctorProfile from "./pages/DoctorProfile";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ProgramsPage from "./pages/ProgramsPage";
import StoriesPage from "./pages/StoriesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="serenity-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen bg-background flex flex-col">
              <Navigation />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/doctors" element={<DoctorsPage />} />
                  <Route path="/doctors/:doctorSlug" element={<DoctorProfile />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/activities" element={<ActivitiesPage />} />
                  <Route path="/programs" element={<ProgramsPage />} />
                  <Route path="/stories" element={<StoriesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
