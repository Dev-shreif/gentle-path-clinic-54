
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Shield, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const backgroundX = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"]);

  const services = [
    {
      id: 1,
      icon: Brain,
      title: "Individual Therapy",
      tagline: "Personalized one-on-one sessions",
      description: "Confidential, personalized therapy sessions designed to address your unique mental health needs and goals.",
      features: ["Cognitive Behavioral Therapy", "Psychodynamic Therapy", "Mindfulness-Based Approaches"],
      duration: "50 minutes",
      price: "Starting from $120",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      icon: Users,
      title: "Group Therapy",
      tagline: "Healing together in community",
      description: "Connect with others facing similar challenges in a supportive, therapeutic group environment.",
      features: ["Anxiety Support Groups", "Depression Recovery", "Trauma Healing Circles"],
      duration: "90 minutes",
      price: "Starting from $60",
      color: "from-green-500/20 to-teal-500/20"
    },
    {
      id: 3,
      icon: Heart,
      title: "Couples Counseling",
      tagline: "Strengthen your relationship",
      description: "Professional guidance to improve communication, resolve conflicts, and deepen your connection.",
      features: ["Communication Skills", "Conflict Resolution", "Intimacy Building"],
      duration: "60 minutes",
      price: "Starting from $150",
      color: "from-pink-500/20 to-rose-500/20"
    },
    {
      id: 4,
      icon: Shield,
      title: "Trauma Treatment",
      tagline: "Healing from past wounds",
      description: "Specialized approaches to help you process and heal from traumatic experiences safely.",
      features: ["EMDR Therapy", "Trauma-Focused CBT", "Somatic Experiencing"],
      duration: "60 minutes",
      price: "Starting from $140",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      icon: Sparkles,
      title: "Mindfulness Training",
      tagline: "Present moment awareness",
      description: "Learn practical mindfulness techniques to reduce stress and enhance overall well-being.",
      features: ["Meditation Training", "Breathing Techniques", "Body Awareness"],
      duration: "45 minutes",
      price: "Starting from $80",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 6,
      icon: Zap,
      title: "Crisis Intervention",
      tagline: "Immediate support when needed",
      description: "24/7 emergency mental health support for acute psychological distress and crisis situations.",
      features: ["24/7 Availability", "Emergency Assessment", "Safety Planning"],
      duration: "As needed",
      price: "Contact for pricing",
      color: "from-yellow-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Gradient with Parallax */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 -z-10"
        style={{ x: backgroundX }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Our Mental Health{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Comprehensive mental health care tailored to your unique needs and journey toward wellness.
          </p>
        </motion.div>

        {/* Horizontal Scroll Services */}
        <div className="relative">
          <motion.div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex-shrink-0 w-96 snap-center"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 group">
                  <motion.div 
                    className={`h-2 bg-gradient-to-r ${service.color} rounded-t-lg`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  
                  <CardHeader className="pb-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      <service.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">
                      {service.tagline}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="font-medium mb-3 text-sm uppercase tracking-wide">Features</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                            className="flex items-center text-sm"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Duration</p>
                        <p className="font-medium">{service.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Investment</p>
                        <p className="font-medium">{service.price}</p>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full gradient-calm text-white hover:opacity-90">
                        Learn More
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Take the first step toward better mental health. Our compassionate team is here to support you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="gradient-calm text-white hover:opacity-90">
                      Schedule Consultation
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
