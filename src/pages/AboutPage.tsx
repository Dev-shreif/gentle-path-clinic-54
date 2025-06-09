
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Heart, Users, Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const timeline = [
    {
      year: "2010",
      title: "Clinic Founded",
      description: "Dr. Sarah Mitchell established Serenity Psychiatric Clinic with a vision to provide compassionate mental health care.",
      emoji: "🌱"
    },
    {
      year: "2015", 
      title: "Expanded Services",
      description: "Added specialized programs for anxiety disorders, trauma therapy, and couples counseling.",
      emoji: "🌿"
    },
    {
      year: "2018",
      title: "Digital Innovation", 
      description: "Launched teletherapy services to make mental health care more accessible to our community.",
      emoji: "💻"
    },
    {
      year: "2020",
      title: "Community Outreach",
      description: "Initiated mental health awareness programs and partnerships with local organizations.", 
      emoji: "🤝"
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description: "Recognized as a leading mental health facility with over 5,000 patients helped.",
      emoji: "⭐"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We believe in treating every patient with empathy, respect, and understanding.",
      emoji: "💚"
    },
    {
      icon: Users,
      title: "Collaborative Approach", 
      description: "Working together with patients to develop personalized treatment plans.",
      emoji: "🤝"
    },
    {
      icon: Award,
      title: "Evidence-Based Treatment",
      description: "Using proven therapeutic methods backed by scientific research.",
      emoji: "🏆"
    },
    {
      icon: Clock,
      title: "Accessible Support",
      description: "Providing flexible scheduling and multiple ways to access mental health care.",
      emoji: "⏰"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10"
        style={{ y, opacity }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Split Reveal */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
              About{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Serenity Clinic
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Dedicated to transforming lives through compassionate mental health care 
              and evidence-based treatment approaches.
            </motion.p>
          </motion.div>
        </div>

        {/* Mission Statement with Animated Emojis */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center relative">
              {/* Floating animated emojis */}
              <motion.div
                className="absolute top-8 left-8 text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌟
              </motion.div>
              <motion.div
                className="absolute top-12 right-12 text-3xl"
                animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                💙
              </motion.div>
              <motion.div
                className="absolute bottom-8 left-16 text-3xl"
                animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              >
                🌱
              </motion.div>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-light mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Serenity Psychiatric Clinic, we are committed to providing exceptional mental health care 
                that empowers individuals to achieve lasting wellness. Our team of experienced professionals 
                creates a safe, supportive environment where healing can flourish naturally.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Values with Split Reveal */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-light text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className="relative mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {value.emoji}
                      </motion.div>
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Timeline */}
        <div className="mb-24">
          <motion.h2 
            className="text-3xl font-light text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Animated timeline line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            <div className="space-y-16">
              {timeline.map((event, index) => (
                <motion.div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border-border/50 hover:shadow-xl transition-all duration-500 bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <Badge className="gradient-calm text-white mr-3">{event.year}</Badge>
                            <motion.span 
                              className="text-2xl"
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                              {event.emoji}
                            </motion.span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  {/* Animated timeline dot */}
                  <motion.div 
                    className="relative flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>
                  
                  <div className="w-full lg:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5,000+", label: "Patients Helped", icon: "👥" },
              { number: "15+", label: "Years Experience", icon: "⏳" },
              { number: "8", label: "Expert Doctors", icon: "🩺" },
              { number: "95%", label: "Patient Satisfaction", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-2xl mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-light text-primary"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA with Video Placeholder */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              {/* Audio wave animation placeholder */}
              <motion.div
                className="absolute top-4 right-4 flex space-x-1"
                whileHover={{ scale: 1.1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-primary rounded-full"
                    animate={{ height: [20, 30, 20] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
              </motion.div>
              
              <motion.h2 
                className="text-2xl md:text-3xl font-light mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Ready to Begin Your Journey?
              </motion.h2>
              <motion.p 
                className="text-muted-foreground mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Join thousands of individuals who have found healing and growth through our compassionate care.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="gradient-calm text-white hover:opacity-90">
                      Schedule Consultation
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.95 }}
                  >
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

export default AboutPage;
