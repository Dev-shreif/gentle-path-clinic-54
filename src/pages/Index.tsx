import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Users, Clock, Shield, CheckCircle, Star, ArrowRight, Phone, Calendar, Heart, Lightbulb, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Index = () => {
  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en";
  const isRTL = language === "ar";
  const getText = (enText: string, arText: string) => language === "ar" ? arText : enText;
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section with Beautiful Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(135deg, rgba(247, 250, 252, 0.95) 0%, rgba(239, 246, 255, 0.9) 50%, rgba(236, 254, 255, 0.85) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}></div>
        </div>

        {/* Floating Nature Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft Floating Circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-2xl floating"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full blur-xl floating-delayed"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-teal-200/25 to-cyan-200/30 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-indigo-200/35 to-blue-200/25 rounded-full blur-2xl floating-delayed"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-sage/20 to-lavender/20 rounded-full blur-xl floating"></div>
          <div className="absolute top-3/4 right-1/4 w-20 h-20 bg-gradient-to-br from-soft-blue/25 to-cream/30 rounded-full blur-2xl floating-delayed"></div>
        </div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(147, 197, 253, 0.1) 0%, transparent 50%)`
        }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="bg-slate-50">
              
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-slate-800">
              {getText("Your Journey to", "رحلتك نحو")}
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                {getText("Mental Wellness", "العافية النفسية")}
              </span>
              <br />
              {getText("Starts Here", "تبدأ هنا")}
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              {getText("Connect with certified mental health professionals who understand your unique journey and provide personalized care in a safe, supportive environment.", "تواصل مع أخصائيي الصحة النفسية المعتمدين الذين يفهمون رحلتك الفريدة ويقدمون رعاية شخصية في بيئة آمنة وداعمة.")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link to="/booking">
                <Button size="lg" className="gradient-calm hover:opacity-90 text-slate-800 shadow-xl px-8 py-6 text-lg rounded-full border-0">
                  <Calendar className="w-5 h-5 mr-2" />
                  {getText("Book Consultation", "احجز استشارة")}
                </Button>
              </Link>

              <Link to="/doctors">
                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-white/80 backdrop-blur-sm bg-white/60 px-8 py-6 text-lg rounded-full shadow-lg text-slate-700 hover:text-slate-800">
                  <Users className="w-5 h-5 mr-2" />
                  {getText("Meet Our Doctors", "تعرف على أطبائنا")}
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center backdrop-blur-sm bg-white/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-slate-600">
                  {getText("Happy Clients", "عميل سعيد")}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-slate-600">
                  {getText("Expert Doctors", "طبيب خبير")}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-slate-600">
                  {getText("Support", "دعم")}
                </div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/30 rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-slate-600">
                  {getText("Rating", "تقييم")}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
            <div className="w-1 h-3 bg-primary/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with Nature Background */}
      <motion.section className="relative py-24 overflow-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 1
    }} viewport={{
      once: true
    }}>
        {/* Services Background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}></div>
        </div>

        {/* Floating Elements for Services */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              {getText("Our", "خدماتنا")}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium ml-3">
                {getText("Services", "المميزة")}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {getText("Comprehensive mental health services designed to support your journey towards emotional wellness and personal growth.", "خدمات صحة نفسية شاملة مصممة لدعم رحلتك نحو العافية العاطفية والنمو الشخصي.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: Brain,
            title: getText("Individual Therapy", "العلاج الفردي"),
            description: getText("Personalized one-on-one sessions", "جلسات فردية مخصصة"),
            color: "from-blue-500 to-cyan-500"
          }, {
            icon: Users,
            title: getText("Group Therapy", "العلاج الجماعي"),
            description: getText("Supportive group sessions", "جلسات جماعية داعمة"),
            color: "from-purple-500 to-pink-500"
          }, {
            icon: Heart,
            title: getText("Couples Counseling", "استشارات الأزواج"),
            description: getText("Relationship guidance", "إرشاد العلاقات"),
            color: "from-rose-500 to-orange-500"
          }, {
            icon: Lightbulb,
            title: getText("Cognitive Behavioral Therapy", "العلاج المعرفي السلوكي"),
            description: getText("Evidence-based treatment", "علاج قائم على الأدلة"),
            color: "from-green-500 to-teal-500"
          }, {
            icon: Target,
            title: getText("Goal-Oriented Therapy", "العلاج الموجه بالأهداف"),
            description: getText("Focused therapeutic approach", "نهج علاجي مركز"),
            color: "from-indigo-500 to-blue-500"
          }, {
            icon: Award,
            title: getText("Specialized Programs", "برامج متخصصة"),
            description: getText("Tailored treatment plans", "خطط علاج مخصصة"),
            color: "from-yellow-500 to-orange-500"
          }].map((service, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05,
            rotateY: 5,
            z: 50
          }} className="group perspective-1000">
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 transform-gpu hover:shadow-2xl hover:shadow-primary/20">
                  <CardContent className="p-8 text-center">
                    <motion.div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`} whileHover={{
                  rotate: 360
                }} transition={{
                  duration: 0.6
                }}>
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="text-center mt-16">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-xl px-8 py-6 text-lg rounded-full">
                {getText("Explore All Services", "استكشف جميع الخدمات")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section with Gentle Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background for Why Choose Us */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800">
              {getText("Why Choose", "لماذا تختار")}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium ml-3">
                {getText("Our Clinic?", "عيادتنا؟")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {getText("We're committed to providing exceptional mental health care with a personalized approach that puts your wellbeing first.", "نحن ملتزمون بتقديم رعاية استثنائية للصحة النفسية بنهج شخصي يضع رفاهيتك في المقدمة.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: Shield,
            title: getText("Confidential & Safe", "سري وآمن"),
            description: getText("Complete privacy protection", "حماية كاملة للخصوصية")
          }, {
            icon: Star,
            title: getText("Expert Professionals", "محترفون خبراء"),
            description: getText("Licensed and experienced", "مرخصون وذوو خبرة")
          }, {
            icon: Clock,
            title: getText("Flexible Scheduling", "مواعيد مرنة"),
            description: getText("Book at your convenience", "احجز في الوقت المناسب لك")
          }, {
            icon: Heart,
            title: getText("Compassionate Care", "رعاية متفهمة"),
            description: getText("Empathetic support", "دعم متفهم")
          }].map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            scale: 1.05
          }} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-3 transition-colors text-stone-950">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* CTA Section with Calming Background */}
      <section className="relative py-24 overflow-hidden">
        {/* CTA Background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `linear-gradient(135deg, rgba(236, 254, 255, 0.9) 0%, rgba(240, 253, 250, 0.85) 50%, rgba(245, 245, 255, 0.9) 100%), url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-800">
              {getText("Ready to Start Your", "مستعد لبدء")}
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                {getText("Healing Journey?", "رحلة الشفاء؟")}
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              {getText("Take the first step towards better mental health. Our compassionate team is here to support you every step of the way.", "اتخذ الخطوة الأولى نحو صحة نفسية أفضل. فريقنا المتفهم هنا لدعمك في كل خطوة من الطريق.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button size="lg" className="gradient-calm hover:opacity-90 text-slate-800 shadow-lg px-8 py-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    {getText("Book Your Session", "احجز جلستك")}
                  </Button>
                </motion.div>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button size="lg" variant="outline" className="border-slate-400 hover:bg-white/80 px-8 py-4 backdrop-blur-sm bg-white/60 text-slate-700">
                    <Phone className="w-5 h-5 mr-2" />
                    {getText("Contact Us", "تواصل معنا")}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Index;