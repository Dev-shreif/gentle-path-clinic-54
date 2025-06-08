
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 32,
      condition: "Anxiety Disorder",
      treatment: "Cognitive Behavioral Therapy",
      doctor: "Dr. Sarah Mitchell",
      rating: 5,
      quote: "I never thought I could overcome my anxiety, but the compassionate care I received here changed my life completely. The techniques I learned help me every single day.",
      story: "After struggling with severe anxiety for years, I finally found the support I needed. The personalized approach and evidence-based treatments made all the difference in my recovery journey.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c5c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "6 months",
      outcome: "Significant reduction in anxiety symptoms and improved quality of life"
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 28,
      condition: "Depression",
      treatment: "Therapy + Medication Management",
      doctor: "Dr. Michael Rodriguez",
      rating: 5,
      quote: "The integrated approach to my treatment helped me understand that recovery is possible. I'm grateful for the professional yet warm environment here.",
      story: "Depression had taken over my life, but the comprehensive treatment plan helped me regain control. The combination of therapy and medication management was exactly what I needed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "8 months",
      outcome: "Remission of depressive symptoms and return to work"
    },
    {
      id: 3,
      name: "Emma Davis",
      age: 35,
      condition: "PTSD",
      treatment: "EMDR Therapy",
      doctor: "Dr. James Thompson",
      rating: 5,
      quote: "The trauma that haunted me for years finally feels manageable. The specialized care and understanding I received made healing possible.",
      story: "After a traumatic experience, I thought I'd never feel normal again. The EMDR therapy sessions were transformative, and I'm now able to live without constant fear.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "10 months",
      outcome: "Significant trauma processing and improved emotional regulation"
    },
    {
      id: 4,
      name: "James Wilson",
      age: 42,
      condition: "Addiction Recovery",
      treatment: "Group Therapy + Individual Sessions",
      doctor: "Dr. Lisa Park",
      rating: 5,
      quote: "The support system here gave me the strength to overcome addiction. The group sessions showed me I wasn't alone in this fight.",
      story: "Addiction had destroyed relationships and my career. The comprehensive treatment approach helped me rebuild my life from the ground up.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "12 months",
      outcome: "18 months sober and rebuilt family relationships"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      age: 29,
      condition: "Couples Therapy",
      treatment: "Emotionally Focused Therapy",
      doctor: "Dr. David Wilson",
      rating: 5,
      quote: "Our marriage was on the brink of ending, but the couples therapy here saved our relationship and made it stronger than ever.",
      story: "Communication had completely broken down in our marriage. The therapy sessions taught us how to connect emotionally and resolve conflicts constructively.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "4 months",
      outcome: "Improved communication and stronger relationship bond"
    },
    {
      id: 6,
      name: "David Rodriguez",
      age: 38,
      condition: "Work Stress & Burnout",
      treatment: "Mindfulness-Based Therapy",
      doctor: "Dr. Emily Chen",
      rating: 5,
      quote: "Learning mindfulness techniques changed how I handle work stress. I'm more productive and happier than I've been in years.",
      story: "Burnout was affecting every aspect of my life. The mindfulness-based approach taught me sustainable ways to manage stress and find work-life balance.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      duration: "3 months",
      outcome: "Better stress management and improved work performance"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Patient{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Success Stories
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Real stories from real people who found healing and hope through our compassionate care.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-20">
          <Card className="relative overflow-hidden border-border/50 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-2 gradient-calm"></div>
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Patient Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{currentTestimonial.name}</h3>
                  <p className="text-muted-foreground mb-2">Age {currentTestimonial.age}</p>
                  
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary">{currentTestimonial.condition}</Badge>
                    <p className="text-sm text-muted-foreground">
                      Treated by {currentTestimonial.doctor}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Duration: {currentTestimonial.duration}
                    </p>
                  </div>
                </div>

                {/* Quote & Story */}
                <div className="lg:col-span-2">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <blockquote className="text-xl md:text-2xl font-light text-balance mb-6 italic">
                    {currentTestimonial.quote}
                  </blockquote>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {currentTestimonial.story}
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Treatment Outcome:</h4>
                    <p className="text-muted-foreground">{currentTestimonial.outcome}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-light text-center mb-12">More Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 ${
                  index === currentIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.condition}
                    </Badge>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.treatment}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">95%</div>
              <div className="text-muted-foreground">Patient Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">5,000+</div>
              <div className="text-muted-foreground">Lives Changed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">88%</div>
              <div className="text-muted-foreground">Treatment Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Your Success Story Starts Here
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of individuals who have transformed their lives through our compassionate mental health care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-calm text-white hover:opacity-90">
                  Begin Your Journey
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Meet Our Doctors
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
