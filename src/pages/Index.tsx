
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Calendar, Heart, User, Check, ArrowRight, Search, Star, Award } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [language, setLanguage] = useState("en");
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.3 });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Load language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const testimonials = [
    {
      name: language === "en" ? "Sarah Johnson" : "سارة جونسون",
      text: language === "en" 
        ? "The care I received here transformed my life. The doctors truly listen and understand."
        : "الرعاية التي تلقيتها هنا غيرت حياتي. الأطباء يستمعون ويفهمون حقاً.",
      role: language === "en" ? "Patient since 2023" : "مريضة منذ 2023",
      rating: 5
    },
    {
      name: language === "en" ? "Michael Chen" : "مايكل تشين",
      text: language === "en"
        ? "Professional, compassionate, and effective treatment. I finally found the help I needed."
        : "علاج مهني ومتفهم وفعال. وجدت أخيراً المساعدة التي احتجتها.",
      role: language === "en" ? "Patient since 2022" : "مريض منذ 2022",
      rating: 5
    },
    {
      name: language === "en" ? "Emma Davis" : "إيما ديفيس",
      text: language === "en"
        ? "The calming environment and expert care made all the difference in my recovery journey."
        : "البيئة المهدئة والرعاية المتخصصة أحدثت فرقاً كبيراً في رحلة شفائي.",
      role: language === "en" ? "Patient since 2024" : "مريضة منذ 2024",
      rating: 5
    }
  ];

  const services = [
    {
      title: language === "en" ? "Individual Therapy" : "العلاج الفردي",
      description: language === "en" 
        ? "One-on-one sessions tailored to your unique needs"
        : "جلسات فردية مصممة لتناسب احتياجاتك الفريدة",
      icon: User,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: language === "en" ? "Anxiety Treatment" : "علاج القلق",
      description: language === "en"
        ? "Evidence-based approaches to manage anxiety disorders"
        : "أساليب مبنية على الأدلة لإدارة اضطرابات القلق",
      icon: Heart,
      color: "from-green-500 to-teal-600"
    },
    {
      title: language === "en" ? "Depression Care" : "رعاية الاكتئاب",
      description: language === "en"
        ? "Comprehensive treatment for mood disorders"
        : "علاج شامل لاضطرابات المزاج",
      icon: Heart,
      color: "from-pink-500 to-rose-600"
    },
    {
      title: language === "en" ? "Trauma Therapy" : "علاج الصدمات",
      description: language === "en"
        ? "Specialized care for trauma and PTSD recovery"
        : "رعاية متخصصة لعلاج الصدمات واضطراب ما بعد الصدمة",
      icon: User,
      color: "from-orange-500 to-red-600"
    },
    {
      title: language === "en" ? "Family Counseling" : "الإرشاد الأسري",
      description: language === "en"
        ? "Strengthening family bonds and communication"
        : "تقوية الروابط الأسرية والتواصل",
      icon: Heart,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: language === "en" ? "Group Therapy" : "العلاج الجماعي",
      description: language === "en"
        ? "Shared healing experiences in supportive environments"
        : "تجارب شفاء مشتركة في بيئات داعمة",
      icon: User,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "500+", label: language === "en" ? "Happy Patients" : "مريض سعيد" },
    { number: "15+", label: language === "en" ? "Years Experience" : "سنة خبرة" },
    { number: "6", label: language === "en" ? "Expert Doctors" : "طبيب خبير" },
    { number: "98%", label: language === "en" ? "Success Rate" : "معدل نجاح" }
  ];

  const conditions = [
    language === "en" ? "Depression & Mood Disorders" : "الاكتئاب واضطرابات المزاج",
    language === "en" ? "Anxiety & Panic Disorders" : "القلق واضطرابات الهلع",
    language === "en" ? "PTSD & Trauma" : "اضطراب ما بعد الصدمة والصدمات",
    language === "en" ? "Bipolar Disorder" : "اضطراب ثنائي القطب",
    language === "en" ? "OCD & Related Disorders" : "الوسواس القهري والاضطرابات المرتبطة",
    language === "en" ? "ADHD & Focus Issues" : "فرط الحركة ونقص الانتباه ومشاكل التركيز"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Asymmetric Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <motion.div 
          className="absolute inset-0 gradient-calm opacity-20"
          style={{ y: y1 }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-24 h-24 bg-secondary/10 rounded-full"
          animate={{ 
            y: [-20, 20, -20]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Asymmetric text layout - takes 7 columns */}
            <motion.div 
              className="lg:col-span-7 lg:col-start-1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-balance mb-8 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {language === "en" ? "Your Journey to" : "رحلتك نحو"}{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {language === "en" ? "Mental Wellness" : "الصحة النفسية"}
                </motion.span>{" "}
                {language === "en" ? "Starts Here" : "تبدأ هنا"}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-10 text-balance max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {language === "en" 
                  ? "Expert psychiatric care in a serene environment where healing happens naturally. Our compassionate doctors are here to support your mental health journey."
                  : "رعاية نفسية متخصصة في بيئة هادئة حيث يحدث الشفاء بشكل طبيعي. أطباؤنا المتفهمون هنا لدعم رحلة صحتك النفسية."
                }
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link to="/booking">
                  <Button size="lg" className="gradient-calm hover:opacity-90 transition-all duration-300 hover:scale-105 text-zinc-950">
                    <Calendar className="h-5 w-5 mr-2" />
                    {language === "en" ? "Book Your Session" : "احجز جلستك"}
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                    {language === "en" ? "Meet Our Doctors" : "تعرف على أطبائنا"}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Asymmetric image layout - takes 5 columns with offset */}
            <motion.div 
              className="lg:col-span-4 lg:col-start-9 relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ y: y2 }}
            >
              <div className="relative">
                <motion.img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Peaceful therapy session" 
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -left-6 backdrop-blur-sm rounded-2xl p-4 shadow-lg bg-background/90 border border-border/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-3 h-3 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium">
                      {language === "en" ? "Available Today" : "متاح اليوم"}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats section with horizontal scroll */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ScrollArea className="w-full">
            <div className="flex space-x-8 px-4 sm:px-6 lg:px-8 pb-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center min-w-[120px] bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold text-primary">{stat.number}</span>
                  <span className="text-sm text-muted-foreground text-center">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
        </motion.div>
      </section>

      {/* Horizontal Scrolling Services Section */}
      <section ref={servicesRef} className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-balance mb-6">
              {language === "en" ? "Our" : "خدماتنا"}{" "}
              <span className="text-primary font-medium">
                {language === "en" ? "Services" : "المتخصصة"}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              {language === "en" 
                ? "Discover our comprehensive range of mental health services designed to support your unique journey"
                : "اكتشف مجموعتنا الشاملة من خدمات الصحة النفسية المصممة لدعم رحلتك الفريدة"
              }
            </p>
          </motion.div>

          <ScrollArea className="w-full">
            <motion.div 
              className="flex space-x-6 pb-6"
              initial={{ x: -100, opacity: 0 }}
              animate={isServicesInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="min-w-[320px] group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-gradient-to-br opacity-90 hover:opacity-100 transition-all duration-500 border-0 shadow-lg hover:shadow-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10`} />
                    <CardContent className="p-8 relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <motion.div 
                        className="mt-6"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                          {language === "en" ? "Learn More" : "اعرف المزيد"}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Asymmetric Conditions Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Asymmetric layout - conditions on right, content on left */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-light mb-8">
                {language === "en" ? "Conditions We" : "الحالات التي"}{" "}
                <span className="text-primary font-medium">
                  {language === "en" ? "Treat" : "نعالجها"}
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "en"
                  ? "Our expert team provides specialized care for a wide range of mental health conditions with personalized treatment approaches."
                  : "يقدم فريقنا المتخصص رعاية متخصصة لمجموعة واسعة من حالات الصحة النفسية بأساليب علاج مخصصة."
                }
              </p>
              <div className="text-center lg:text-left">
                <Badge variant="secondary" className="px-6 py-3 text-sm">
                  <Search className="h-4 w-4 mr-2" />
                  {language === "en" ? "Personalized Treatment Plans" : "خطط علاج مخصصة"}
                </Badge>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-6 lg:col-start-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
                <div className="grid gap-4">
                  {conditions.map((condition, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center space-x-4 group cursor-pointer p-4 rounded-xl hover:bg-background/50 transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-secondary/20 p-3 rounded-xl group-hover:bg-secondary/30 transition-colors duration-300">
                        <Check className="h-5 w-5 text-secondary" />
                      </div>
                      <span className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                        {condition}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Testimonials with Motion */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-16 text-balance"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {language === "en" ? "Stories of" : "قصص"}{" "}
            <span className="text-primary font-medium">
              {language === "en" ? "Transformation" : "التحول"}
            </span>
          </motion.h2>
          
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-lg md:text-xl text-muted-foreground italic text-balance">
                      {testimonials[currentTestimonial].text}
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                    <div className="text-left">
                      <p className="font-medium">{testimonials[currentTestimonial].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Interactive Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-primary scale-125" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/testimonials">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105">
                {language === "en" ? "Read More Stories" : "اقرأ المزيد من القصص"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Curved Design */}
      <section className="relative py-24 overflow-hidden">
        <motion.div 
          className="absolute inset-0 gradient-lavender"
          style={{ 
            clipPath: "ellipse(100% 100% at 50% 0%)",
            y: y1
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl mb-8 text-balance font-light text-slate-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {language === "en" ? "Ready to Begin Your" : "مستعد لبدء"}{" "}
            <span className="font-medium">
              {language === "en" ? "Healing Journey?" : "رحلة الشفاء؟"}
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-balance text-slate-950"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === "en"
              ? "Take the first step towards better mental health. Our experienced team is here to support you."
              : "اتخذ الخطوة الأولى نحو صحة نفسية أفضل. فريقنا ذو الخبرة هنا لدعمك."
            }
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="text-primary bg-slate-950 hover:bg-slate-800 transition-all duration-300 hover:scale-105">
                <Calendar className="h-5 w-5 mr-2" />
                {language === "en" ? "Schedule Consultation" : "حدد موعد استشارة"}
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-slate-950 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {language === "en" ? "Contact Us" : "اتصل بنا"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
