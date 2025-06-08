
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Clock, MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DoctorProfile = () => {
  const { doctorSlug } = useParams();

  // Mock doctor data - in a real app, this would come from an API
  const doctorData: { [key: string]: any } = {
    "dr-sarah-mitchell": {
      name: "Dr. Sarah Mitchell",
      specialty: "Clinical Psychology",
      title: "Ph.D., Licensed Clinical Psychologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: "15+ years",
      education: [
        "Ph.D. in Clinical Psychology - Stanford University",
        "M.A. in Psychology - University of California, Berkeley",
        "B.A. in Psychology - Harvard University"
      ],
      licenses: [
        "Licensed Clinical Psychologist - California",
        "Certified CBT Therapist",
        "EMDR Certified Therapist"
      ],
      bio: "Dr. Sarah Mitchell is a compassionate clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and trauma. She specializes in cognitive-behavioral therapy and has helped hundreds of patients develop healthy coping mechanisms and achieve lasting mental wellness. Dr. Mitchell believes in a collaborative approach to therapy, working closely with each patient to develop personalized treatment plans.",
      expertise: [
        "Anxiety Disorders",
        "Cognitive Behavioral Therapy (CBT)",
        "Trauma Therapy",
        "Depression",
        "PTSD",
        "Panic Disorders",
        "Stress Management",
        "Mindfulness-Based Therapy"
      ],
      conditions: [
        "Generalized Anxiety Disorder",
        "Social Anxiety",
        "Depression",
        "Post-Traumatic Stress Disorder",
        "Panic Disorder",
        "Obsessive-Compulsive Disorder",
        "Adjustment Disorders",
        "Chronic Stress"
      ],
      awards: [
        "Excellence in Mental Health Care Award 2023",
        "Top Psychologist - Bay Area Mental Health Association",
        "Distinguished Service Award - California Psychological Association",
        "Research Excellence Award - Stanford University"
      ],
      availability: {
        days: ["Monday", "Tuesday", "Wednesday", "Friday"],
        hours: "9:00 AM - 6:00 PM",
        location: "In-person and Online"
      }
    }
  };

  const doctor = doctorData[doctorSlug || ""] || doctorData["dr-sarah-mitchell"];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/doctors">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Doctors
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Doctor Card */}
            <Card className="overflow-hidden border-border/50">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-2xl font-semibold text-white mb-1">
                    {doctor.name}
                  </h1>
                  <p className="text-white/90">{doctor.title}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge className="gradient-calm text-white">
                      {doctor.specialty}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{doctor.experience} Experience</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.availability.location}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Availability</h3>
                    <p className="text-sm text-muted-foreground">
                      {doctor.availability.days.join(", ")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {doctor.availability.hours}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Booking */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Book an Appointment</h3>
                <div className="space-y-3">
                  <Link to="/booking" state={{ selectedDoctor: doctor.name }}>
                    <Button className="w-full gradient-calm text-white hover:opacity-90">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Online
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    <Phone className="h-4 w-4 mr-2" />
                    Call to Book
                  </Button>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div>
              <h2 className="text-3xl font-light mb-6">About Dr. {doctor.name.split(" ")[1]}</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {doctor.bio}
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-light mb-6">Areas of Expertise</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctor.expertise.map((skill: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Treated */}
            <div>
              <h3 className="text-2xl font-light mb-6">Conditions Treated</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {doctor.conditions.map((condition: string, index: number) => (
                  <Badge key={index} variant="outline" className="justify-start p-3 text-sm">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education & Licenses */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Education</h3>
                <div className="space-y-3">
                  {doctor.education.map((edu: string, index: number) => (
                    <div key={index} className="p-3 bg-card border border-border/50 rounded-lg">
                      <p className="text-sm text-foreground">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">Licenses & Certifications</h3>
                <div className="space-y-3">
                  {doctor.licenses.map((license: string, index: number) => (
                    <div key={index} className="p-3 bg-card border border-border/50 rounded-lg">
                      <p className="text-sm text-foreground">{license}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <h3 className="text-2xl font-light mb-6">Awards & Recognition</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {doctor.awards.map((award: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-light mb-4">Ready to start your journey?</h3>
              <p className="text-muted-foreground mb-6">
                Take the first step towards better mental health with Dr. {doctor.name.split(" ")[1]}.
              </p>
              <Link to="/booking" state={{ selectedDoctor: doctor.name }}>
                <Button size="lg" className="gradient-calm text-white hover:opacity-90">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Your Session Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
