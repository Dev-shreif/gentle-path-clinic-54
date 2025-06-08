
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      slug: "dr-sarah-mitchell",
      specialty: "Clinical Psychology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specializing in anxiety disorders and cognitive behavioral therapy with over 15 years of experience.",
      expertise: ["Anxiety Disorders", "CBT", "Trauma Therapy"],
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      slug: "dr-michael-rodriguez",
      specialty: "Psychiatrist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Expert in mood disorders and medication management, helping patients achieve optimal mental health.",
      expertise: ["Depression", "Bipolar Disorder", "Medication Management"],
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      slug: "dr-emily-chen",
      specialty: "Child Psychology",
      image: "https://images.unsplash.com/photo-1594824709602-7b0c7b2e0c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Dedicated to helping children and adolescents navigate emotional and behavioral challenges.",
      expertise: ["Child Psychology", "ADHD", "Family Therapy"],
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      slug: "dr-james-thompson",
      specialty: "Trauma Specialist",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Specialized in PTSD treatment and trauma recovery using evidence-based therapeutic approaches.",
      expertise: ["PTSD", "Trauma Recovery", "EMDR"],
      experience: "18+ years"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      slug: "dr-lisa-park",
      specialty: "Addiction Counselor",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Compassionate care for addiction recovery and substance abuse treatment programs.",
      expertise: ["Addiction Recovery", "Substance Abuse", "Group Therapy"],
      experience: "14+ years"
    },
    {
      id: 6,
      name: "Dr. David Wilson",
      slug: "dr-david-wilson",
      specialty: "Couples Therapy",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Helping couples strengthen relationships and improve communication through therapeutic intervention.",
      expertise: ["Couples Therapy", "Marriage Counseling", "Communication"],
      experience: "16+ years"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Expert Doctors
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our team of experienced mental health professionals is dedicated to providing 
            compassionate, evidence-based care tailored to your unique needs.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <Card 
              key={doctor.id} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Link to={`/doctors/${doctor.slug}`}>
                    <Button className="w-full bg-white/90 text-primary hover:bg-white">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {doctor.specialty}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">EXPERTISE</p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.slice(0, 2).map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {doctor.expertise.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{doctor.expertise.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      {doctor.experience}
                    </span>
                    <Link to="/booking" state={{ selectedDoctor: doctor.name }}>
                      <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5">
                        <Calendar className="h-4 w-4 mr-2" />
                        Book
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              Not sure which doctor is right for you?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team can help match you with the perfect mental health professional based on your specific needs and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="gradient-calm text-white hover:opacity-90">
                  Get Matched with a Doctor
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
