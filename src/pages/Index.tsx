import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, User, Check, ArrowRight, Search } from "lucide-react";
const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [{
    name: "Sarah Johnson",
    text: "The care I received here transformed my life. The doctors truly listen and understand.",
    role: "Patient since 2023"
  }, {
    name: "Michael Chen",
    text: "Professional, compassionate, and effective treatment. I finally found the help I needed.",
    role: "Patient since 2022"
  }, {
    name: "Emma Davis",
    text: "The calming environment and expert care made all the difference in my recovery journey.",
    role: "Patient since 2024"
  }];
  const services = [{
    title: "Individual Therapy",
    description: "One-on-one sessions tailored to your unique needs",
    icon: User
  }, {
    title: "Anxiety Treatment",
    description: "Evidence-based approaches to manage anxiety disorders",
    icon: Heart
  }, {
    title: "Depression Care",
    description: "Comprehensive treatment for mood disorders",
    icon: Heart
  }, {
    title: "Trauma Therapy",
    description: "Specialized care for trauma and PTSD recovery",
    icon: User
  }];
  const conditions = ["Depression & Mood Disorders", "Anxiety & Panic Disorders", "PTSD & Trauma", "Bipolar Disorder", "OCD & Related Disorders", "ADHD & Focus Issues"];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 gradient-calm opacity-30"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender/20 rounded-full floating"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-sage/20 rounded-full floating-delayed"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-soft-blue/20 rounded-full floating"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-light text-balance mb-6">
                Your Journey to{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                  Mental Wellness
                </span>{" "}
                Starts Here
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Expert psychiatric care in a serene environment where healing happens naturally. 
                Our compassionate doctors are here to support your mental health journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/booking">
                  <Button size="lg" className="gradient-calm hover:opacity-90 transition-opacity w-full sm:w-auto text-zinc-950">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Your Session
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                    Meet Our Doctors
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative lg:justify-self-end">
              <div className="relative w-full max-w-md mx-auto">
                <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Peaceful therapy session" className="rounded-3xl shadow-2xl w-full h-96 object-cover breathe" />
                <div className="absolute -bottom-6 -left-6 backdrop-blur-sm rounded-2xl p-4 shadow-lg bg-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-slate-900">Available Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services vs Conditions Split Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-balance mb-4">
              Comprehensive Care for Your{" "}
              <span className="text-primary font-medium">Mental Health</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              We provide specialized services for a wide range of mental health conditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-center lg:text-left mb-8">Our Services</h3>
              <div className="grid gap-6">
                {services.map((service, index) => <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-2">{service.title}</h4>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
              <div className="text-center lg:text-left pt-4">
                <Link to="/services">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    View All Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Conditions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-center lg:text-left mb-8">Conditions We Treat</h3>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <div className="grid gap-4">
                  {conditions.map((condition, index) => <div key={index} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="bg-secondary/20 p-2 rounded-lg group-hover:bg-secondary/30 transition-colors">
                        <Check className="h-4 w-4 text-secondary" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {condition}
                      </span>
                    </div>)}
                </div>
                <div className="mt-8 text-center">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Search className="h-4 w-4 mr-2" />
                    Personalized Treatment Plans
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Curved Edges */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-lavender curve-bottom"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-6 text-balance font-normal text-slate-900">
            Ready to Begin Your{" "}
            <span className="font-medium">Healing Journey?</span>
          </h2>
          <p className="text-xl mb-8 text-balance font-normal text-slate-950">
            Take the first step towards better mental health. Our experienced team is here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-primary w-full sm:w-auto bg-slate-950 hover:bg-slate-800">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Testimonial Carousel */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-balance">
            Stories of{" "}
            <span className="text-primary font-medium">Transformation</span>
          </h2>
          
          <div className="relative">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="mb-6">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <p className="text-lg md:text-xl text-muted-foreground italic text-balance">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                  <div className="text-left">
                    <p className="font-medium">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? "bg-primary" : "bg-primary/20"}`} />)}
            </div>
          </div>
          
          <div className="mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                Read More Stories
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;