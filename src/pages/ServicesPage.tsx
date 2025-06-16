
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Users, Shield, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ServicesPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
      color: "from-blue-500/20 to-purple-500/20",
      iconBg: "from-blue-100 to-purple-100",
      hoverColor: "hover:from-blue-500/30 hover:to-purple-500/30"
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
      color: "from-green-500/20 to-teal-500/20",
      iconBg: "from-green-100 to-teal-100",
      hoverColor: "hover:from-green-500/30 hover:to-teal-500/30"
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
      color: "from-pink-500/20 to-rose-500/20",
      iconBg: "from-pink-100 to-rose-100",
      hoverColor: "hover:from-pink-500/30 hover:to-rose-500/30"
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
      color: "from-orange-500/20 to-red-500/20",
      iconBg: "from-orange-100 to-red-100",
      hoverColor: "hover:from-orange-500/30 hover:to-red-500/30"
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
      color: "from-purple-500/20 to-indigo-500/20",
      iconBg: "from-purple-100 to-indigo-100",
      hoverColor: "hover:from-purple-500/30 hover:to-indigo-500/30"
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
      color: "from-yellow-500/20 to-orange-500/20",
      iconBg: "from-yellow-100 to-orange-100",
      hoverColor: "hover:from-yellow-500/30 hover:to-orange-500/30"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Parallax and Gradient Layers */}
      <div className="fixed inset-0 -z-20">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40"
          style={{ y: backgroundY, scale: backgroundScale }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-sage/10 via-transparent to-lavender/15"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
        />
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-secondary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        {/* Header Section - Full Width */}
        <div className="w-full">
          <motion.div 
            className="text-center mb-20 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-light mb-8 bg-gradient-to-r from-slate-800 via-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              Our{" "}
              <span className="font-medium italic">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover our comprehensive range of mental health services designed to support your unique journey
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Services Grid - Enhanced Layout */}
        <div className="w-full px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 80, rotateX: 15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <Card className={`h-full border-0 shadow-lg backdrop-blur-sm bg-white/80 hover:bg-white/90 hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${service.color} ${service.hoverColor}`}>
                    {/* Animated Top Border */}
                    <motion.div 
                      className={`h-1 bg-gradient-to-r ${service.color.replace('/20', '')} rounded-t-lg`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                    
                    {/* Floating Icon Background */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                    
                    <CardHeader className="pb-6 relative">
                      <motion.div
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.4,
                          type: "spring",
                          stiffness: 200 
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.iconBg} shadow-lg flex items-center justify-center mb-6 group-hover:shadow-xl transition-all duration-500`}
                      >
                        <service.icon className="h-10 w-10 text-slate-700 group-hover:text-slate-800 transition-colors" />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <CardTitle className="text-2xl mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-primary/80 font-medium text-sm uppercase tracking-wide">
                          {service.tagline}
                        </p>
                      </motion.div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative">
                      <motion.p 
                        className="text-slate-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {service.description}
                      </motion.p>
                      
                      <div>
                        <h4 className="font-semibold mb-4 text-slate-800 text-sm uppercase tracking-wide">Features</h4>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                              className="flex items-center text-sm text-slate-600"
                            >
                              <motion.div 
                                className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/50">
                        <div>
                          <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Duration</p>
                          <p className="font-semibold text-slate-700">{service.duration}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Investment</p>
                          <p className="font-semibold text-slate-700">{service.price}</p>
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                      >
                        <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 rounded-xl font-medium">
                          Learn More
                          <motion.div
                            className="ml-2"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            →
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-32 px-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
              
              <CardContent className="p-12 md:p-16 text-center relative">
                <motion.h2 
                  className="text-3xl md:text-4xl font-light mb-6 text-slate-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to Begin Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                    Healing Journey?
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Take the first step toward better mental health. Our compassionate team is here to support you every step of the way with personalized care and evidence-based treatments.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link to="/booking">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }} 
                      whileTap={{ scale: 0.95 }}
                      className="group"
                    >
                      <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium">
                        Schedule Consultation
                        <motion.div
                          className="ml-2"
                          initial={{ rotate: 0 }}
                          whileHover={{ rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          ✨
                        </motion.div>
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <Link to="/contact">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -2 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className="border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 text-slate-700 hover:text-slate-800 px-8 py-4 h-14 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm text-lg font-medium"
                      >
                        Contact Us
                        <motion.div
                          className="ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.div>
                      </Button>
                    </motion.div>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
