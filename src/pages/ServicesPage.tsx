
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Heart, User, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [openService, setOpenService] = useState<string | null>(null);

  const services = [
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      icon: User,
      shortDescription: "One-on-one personalized therapy sessions",
      price: "Starting at $150/session",
      duration: "50 minutes",
      fullDescription: "Individual therapy provides a safe, confidential space for you to explore your thoughts, feelings, and behaviors with a trained mental health professional. Our therapists use evidence-based approaches tailored to your specific needs and goals.",
      benefits: [
        "Personalized treatment approach",
        "Confidential and safe environment",
        "Evidence-based therapeutic techniques",
        "Flexible scheduling options",
        "Progress tracking and goal setting"
      ],
      approaches: [
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Psychodynamic Therapy",
        "Mindfulness-Based Therapy",
        "Solution-Focused Therapy"
      ]
    },
    {
      id: "couples-therapy",
      title: "Couples Therapy",
      icon: Heart,
      shortDescription: "Relationship counseling for couples",
      price: "Starting at $200/session",
      duration: "75 minutes",
      fullDescription: "Couples therapy helps partners improve communication, resolve conflicts, and strengthen their relationship. Our experienced therapists provide a neutral space for both partners to express their feelings and work toward common goals.",
      benefits: [
        "Improved communication skills",
        "Conflict resolution strategies",
        "Strengthened emotional connection",
        "Better understanding of each other",
        "Tools for ongoing relationship health"
      ],
      approaches: [
        "Emotionally Focused Therapy (EFT)",
        "Gottman Method",
        "Imago Relationship Therapy",
        "Communication Skills Training",
        "Attachment-Based Therapy"
      ]
    },
    {
      id: "group-therapy",
      title: "Group Therapy",
      icon: User,
      shortDescription: "Therapeutic groups for shared experiences",
      price: "Starting at $80/session",
      duration: "90 minutes",
      fullDescription: "Group therapy provides a supportive environment where individuals with similar challenges can share experiences, learn from each other, and develop coping strategies together under professional guidance.",
      benefits: [
        "Peer support and understanding",
        "Cost-effective treatment option",
        "Social skills development",
        "Reduced feelings of isolation",
        "Multiple perspectives on challenges"
      ],
      approaches: [
        "Process Groups",
        "Skills-Based Groups",
        "Support Groups",
        "Psychoeducational Groups",
        "Specialty Focus Groups"
      ]
    },
    {
      id: "psychiatric-evaluation",
      title: "Psychiatric Evaluation",
      icon: Heart,
      shortDescription: "Comprehensive mental health assessment",
      price: "Starting at $300/session",
      duration: "90-120 minutes",
      fullDescription: "A thorough psychiatric evaluation helps determine the most appropriate treatment plan for your mental health needs. This comprehensive assessment includes medical history, symptom evaluation, and treatment recommendations.",
      benefits: [
        "Accurate diagnosis and assessment",
        "Personalized treatment planning",
        "Medication evaluation if needed",
        "Comprehensive mental health review",
        "Coordination with other providers"
      ],
      approaches: [
        "Clinical Interview",
        "Psychological Testing",
        "Medical History Review",
        "Symptom Assessment",
        "Treatment Planning"
      ]
    },
    {
      id: "teletherapy",
      title: "Online Therapy",
      icon: Calendar,
      shortDescription: "Convenient therapy from home",
      price: "Starting at $120/session",
      duration: "50 minutes",
      fullDescription: "Online therapy provides the same quality care as in-person sessions with the added convenience of accessing treatment from the comfort of your own home. Perfect for those with busy schedules or mobility constraints.",
      benefits: [
        "Convenient access from home",
        "Flexible scheduling options",
        "Same quality as in-person care",
        "Reduced travel time and costs",
        "Comfortable familiar environment"
      ],
      approaches: [
        "Video Conferencing",
        "Secure Messaging",
        "Digital Worksheets",
        "Online Assessment Tools",
        "Virtual Reality Therapy"
      ]
    },
    {
      id: "crisis-intervention",
      title: "Crisis Intervention",
      icon: Heart,
      shortDescription: "Immediate support during mental health crises",
      price: "Contact for pricing",
      duration: "Variable",
      fullDescription: "Crisis intervention provides immediate, short-term assistance for individuals experiencing acute mental health emergencies. Our trained professionals offer rapid assessment and stabilization services.",
      benefits: [
        "24/7 emergency support",
        "Rapid assessment and stabilization",
        "Safety planning and risk assessment",
        "Connection to ongoing care",
        "Family and support system involvement"
      ],
      approaches: [
        "Crisis Assessment",
        "Safety Planning",
        "Emergency Stabilization",
        "Resource Coordination",
        "Follow-up Care Planning"
      ]
    }
  ];

  const toggleService = (serviceId: string) => {
    setOpenService(openService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive mental health services designed to support your journey toward 
            wellness and personal growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <Collapsible open={openService === service.id}>
                <CollapsibleTrigger
                  onClick={() => toggleService(service.id)}
                  className="w-full"
                >
                  <CardHeader className="hover:bg-muted/20 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-xl">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <p className="text-muted-foreground text-sm">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right hidden sm:block">
                          <Badge variant="secondary" className="mb-1">
                            {service.duration}
                          </Badge>
                          <p className="text-sm text-muted-foreground">
                            {service.price}
                          </p>
                        </div>
                        <ChevronDown 
                          className={`h-5 w-5 text-muted-foreground transition-transform ${
                            openService === service.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0 pb-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-3">About This Service</h4>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.fullDescription}
                        </p>
                        
                        <h4 className="font-semibold mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Treatment Approaches</h4>
                        <div className="space-y-2 mb-6">
                          {service.approaches.map((approach, idx) => (
                            <Badge key={idx} variant="outline" className="mr-2 mb-2">
                              {approach}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Duration:</span>
                            <span className="text-muted-foreground">{service.duration}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Pricing:</span>
                            <span className="text-muted-foreground">{service.price}</span>
                          </div>
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <Link to="/booking" state={{ selectedService: service.title }}>
                            <Button className="w-full gradient-calm text-white hover:opacity-90">
                              <Calendar className="h-4 w-4 mr-2" />
                              Book This Service
                            </Button>
                          </Link>
                          <Link to="/doctors">
                            <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                              Meet Our Specialists
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can help you determine the best treatment approach for your specific needs and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="gradient-calm text-white hover:opacity-90">
                  Get a Free Consultation
                </Button>
              </Link>
              <Link to="/booking">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Schedule Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
