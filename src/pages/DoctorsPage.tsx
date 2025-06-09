import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const DoctorsPage = () => {
  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? (localStorage.getItem("language") || "en") : "en";
  const isRTL = language === "ar";

  const doctors = [
    {
      id: 1,
      name: { en: "Dr. Abdel Rahman Mohsen", ar: "د. عبد الرحمن محسن" },
      slug: "dr-abdel-rahman-mohsen",
      specialty: { en: "Psychiatrist", ar: "أخصائي الطب النفسي" },
      image: "/lovable-uploads/56124021-c453-4af0-a73d-55eba7308a31.png",
      description: { 
        en: "Experienced psychiatrist specializing in mental health treatment and psychological therapy with a focus on comprehensive patient care.",
        ar: "طبيب نفسي ذو خبرة متخصص في علاج الصحة النفسية والعلاج النفسي مع التركيز على الرعاية الشاملة للمرضى."
      },
      expertise: {
        en: ["Depression", "Anxiety Disorders", "Psychological Therapy"],
        ar: ["الاكتئاب", "اضطرابات القلق", "العلاج النفسي"]
      },
      experience: { en: "10+ years", ar: "أكثر من 10 سنوات" },
      size: "large"
    },
    {
      id: 2,
      name: { en: "Dr. Maha Mohsen", ar: "د. مها محسن" },
      slug: "dr-maha-mohsen",
      specialty: { en: "Psychiatrist & Addiction Treatment", ar: "أخصائي الطب النفسي وعلاج الإدمان" },
      image: "/lovable-uploads/cede00fa-ffe6-4d0c-9026-3dbff006bbad.png",
      description: { 
        en: "Specialist in psychiatric medicine and addiction treatment with extensive experience in comprehensive mental health care.",
        ar: "أخصائية في الطب النفسي وعلاج الإدمان مع خبرة واسعة في الرعاية الشاملة للصحة النفسية."
      },
      expertise: {
        en: ["Psychiatry", "Addiction Treatment", "Mental Health"],
        ar: ["الطب النفسي", "علاج الإدمان", "الصحة النفسية"]
      },
      experience: { en: "12+ years", ar: "أكثر من 12 سنة" },
      size: "medium"
    },
    {
      id: 3,
      name: { en: "Dr. Heba Ahmed Al-Azab", ar: "د. هبة أحمد العزب" },
      slug: "dr-heba-ahmed-alazab",
      specialty: { en: "Psychiatrist", ar: "طبيبة نفسية" },
      image: "/lovable-uploads/2f284f11-59ed-4850-9684-375341aae1ba.png",
      description: { 
        en: "Dedicated psychiatrist specializing in comprehensive mental health treatment and patient care.",
        ar: "طبيبة نفسية مكرسة متخصصة في العلاج الشامل للصحة النفسية ورعاية المرضى."
      },
      expertise: {
        en: ["Psychiatry", "Mental Health Treatment", "Patient Care"],
        ar: ["الطب النفسي", "علاج الصحة النفسية", "رعاية المرضى"]
      },
      experience: { en: "8+ years", ar: "أكثر من 8 سنوات" }
    },
    {
      id: 4,
      name: { en: "Dr. Nada Al-Awadi", ar: "د. ندى العوضي" },
      slug: "dr-nada-alawadi",
      specialty: { en: "Psychiatrist & Psychological Treatment", ar: "طبيبة ومعالجة نفسية" },
      image: "/lovable-uploads/5a3488b9-e38f-44f4-90d7-8dce28f0003a.png",
      description: { 
        en: "Expert in psychiatric medicine and psychological treatment with a focus on holistic patient care.",
        ar: "خبيرة في الطب النفسي والعلاج النفسي مع التركيز على الرعاية الشاملة للمرضى."
      },
      expertise: {
        en: ["Psychiatry", "Psychological Treatment", "Therapy"],
        ar: ["الطب النفسي", "العلاج النفسي", "العلاج"]
      },
      experience: { en: "9+ years", ar: "أكثر من 9 سنوات" }
    },
    {
      id: 5,
      name: { en: "Prof. Bahaa Mohammed Sharaf El-Din", ar: "أ. بهاء محمد شرف الدين" },
      slug: "prof-bahaa-mohammed-sharaf-eldin",
      specialty: { en: "Clinical Psychologist", ar: "أخصائي نفسي إكلينيكي" },
      image: "/lovable-uploads/311b6663-caea-4df5-be65-6d3bbf5e434d.png",
      description: { 
        en: "Professor and clinical psychologist with extensive experience in psychological assessment and therapy.",
        ar: "أستاذ وأخصائي نفسي إكلينيكي مع خبرة واسعة في التقييم النفسي والعلاج."
      },
      expertise: {
        en: ["Clinical Psychology", "Psychological Assessment", "Therapy"],
        ar: ["علم النفس الإكلينيكي", "التقييم النفسي", "العلاج"]
      },
      experience: { en: "15+ years", ar: "أكثر من 15 سنة" }
    },
    {
      id: 6,
      name: { en: "Dr. Fatima Abdeldin", ar: "د. فاطمة عابدين" },
      slug: "dr-fatima-abdeldin",
      specialty: { en: "Psychiatrist & Psychological Treatment", ar: "طبيبة ومعالجة نفسية" },
      image: "/lovable-uploads/c75597ef-239d-4c00-b646-6e4c3a125dd8.png",
      description: { 
        en: "Specialist in psychiatric medicine and psychological treatment with a compassionate approach to patient care.",
        ar: "متخصصة في الطب النفسي والعلاج النفسي مع نهج متفهم في رعاية المرضى."
      },
      expertise: {
        en: ["Psychiatry", "Psychological Treatment", "Mental Health"],
        ar: ["الطب النفسي", "العلاج النفسي", "الصحة النفسية"]
      },
      experience: { en: "11+ years", ar: "أكثر من 11 سنة" }
    }
  ];

  const specialties = [
    { key: "all", name: { en: "All Specialties", ar: "جميع التخصصات" } },
    { key: "psychiatrist", name: { en: "Psychiatrist", ar: "طب نفسي" } },
    { key: "addiction", name: { en: "Addiction Treatment", ar: "علاج الإدمان" } },
    { key: "psychology", name: { en: "Psychology", ar: "علم النفس" } },
  ];

  const getText = (textObj: any) => {
    return textObj[language] || textObj.en;
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case "large": return "h-96 w-80";
      case "medium": return "h-80 w-72";
      default: return "h-72 w-64";
    }
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            {language === "ar" ? "تعرف على " : "Meet Our "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              {language === "ar" ? "أطبائنا الخبراء" : "Expert Doctors"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            {language === "ar" 
              ? "فريقنا من أخصائيي الصحة النفسية ذوي الخبرة مكرس لتقديم رعاية متفهمة وقائمة على الأدلة مصممة لتناسب احتياجاتك الفريدة."
              : "Our team of experienced mental health professionals is dedicated to providing compassionate, evidence-based care tailored to your unique needs."
            }
          </p>
        </motion.div>

        {/* Animated Filter Bar */}
        <motion.div 
          className="flex justify-center mb-12 overflow-x-auto scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-4 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/50">
            {specialties.map((specialty, index) => (
              <motion.button
                key={specialty.key}
                onClick={() => setSelectedSpecialty(specialty.key)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedSpecialty === specialty.key 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-muted'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {getText(specialty.name)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="relative">
          <motion.div 
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                className={`flex-shrink-0 snap-center ${getCardSize(doctor.size)}`}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="group h-full w-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={doctor.image} 
                      alt={getText(doctor.name)}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link to={`/doctors/${doctor.slug}`}>
                        <Button className="w-full bg-white/90 text-primary hover:bg-white shadow-lg">
                          {language === "ar" ? "عرض الملف الشخصي" : "View Profile"}
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="mb-4 flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {getText(doctor.name)}
                      </h3>
                      <Badge variant="secondary" className="mb-3">
                        {getText(doctor.specialty)}
                      </Badge>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {getText(doctor.description)}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          {language === "ar" ? "الخبرة" : "EXPERTISE"}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {getText(doctor.expertise).slice(0, 2).map((skill: string, idx: number) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground">
                          {getText(doctor.experience)}
                        </span>
                        <Link to="/booking" state={{ selectedDoctor: getText(doctor.name) }}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5">
                              <Calendar className="h-4 w-4 mr-2" />
                              {language === "ar" ? "احجز" : "Book"}
                            </Button>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
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
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              {language === "ar" 
                ? "لست متأكداً من الطبيب المناسب لك؟"
                : "Not sure which doctor is right for you?"
              }
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === "ar"
                ? "يمكن لفريقنا مساعدتك في العثور على أخصائي الصحة النفسية المثالي بناءً على احتياجاتك وتفضيلاتك المحددة."
                : "Our team can help match you with the perfect mental health professional based on your specific needs and preferences."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gradient-calm text-white hover:opacity-90">
                    {language === "ar" ? "احصل على مطابقة مع طبيب" : "Get Matched with a Doctor"}
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    {language === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsPage;
