
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const timeline = [
    {
      year: "2010",
      title: "Clinic Founded",
      description: "Dr. Sarah Mitchell established Serenity Psychiatric Clinic with a vision to provide compassionate mental health care."
    },
    {
      year: "2015",
      title: "Expanded Services",
      description: "Added specialized programs for anxiety disorders, trauma therapy, and couples counseling."
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched teletherapy services to make mental health care more accessible to our community."
    },
    {
      year: "2020",
      title: "Community Outreach",
      description: "Initiated mental health awareness programs and partnerships with local organizations."
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description: "Recognized as a leading mental health facility with over 5,000 patients helped."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in treating every patient with empathy, respect, and understanding."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working together with patients to develop personalized treatment plans."
    },
    {
      icon: Award,
      title: "Evidence-Based Treatment",
      description: "Using proven therapeutic methods backed by scientific research."
    },
    {
      icon: Clock,
      title: "Accessible Support",
      description: "Providing flexible scheduling and multiple ways to access mental health care."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Serenity Clinic
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Dedicated to transforming lives through compassionate mental health care 
            and evidence-based treatment approaches.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-border/50">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-light mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                At Serenity Psychiatric Clinic, we are committed to providing exceptional mental health care 
                that empowers individuals to achieve lasting wellness. Our team of experienced professionals 
                creates a safe, supportive environment where healing can flourish naturally.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-light text-center mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="gradient-calm text-white mb-3">{event.year}</Badge>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">5,000+</div>
              <div className="text-muted-foreground">Patients Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">8</div>
              <div className="text-muted-foreground">Expert Doctors</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-light text-primary">95%</div>
              <div className="text-muted-foreground">Patient Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of individuals who have found healing and growth through our compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button className="gradient-calm text-white hover:opacity-90">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
