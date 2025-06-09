
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Star, Clock, MessageCircle, Video, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const DoctorsPage = () => {
  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? (localStorage.getItem("language") || "en") : "en";
  const isRTL = language === "ar";
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hoveredDoctor, setHoveredDoctor] = useState<number | null>(null);
  const [visibleSections, setVisibleSections] = useState({
    topRated: 4,
    availableNow: 4,
    psychiatrists: 4,
    psychologists: 4
  });

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
      rating: 4.9,
      availableNow: true,
      category: "psychiatrist",
      tags: ["anxiety", "depression", "arabic-speaking"],
      nextAvailable: "Today 2:00 PM",
      onlineConsultation: true,
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
      rating: 4.8,
      availableNow: false,
      category: "psychiatrist",
      tags: ["addiction", "psychiatry", "couples"],
      nextAvailable: "Tomorrow 10:00 AM",
      onlineConsultation: true,
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
      experience: { en: "8+ years", ar: "أكثر من 8 سنوات" },
      rating: 4.7,
      availableNow: true,
      category: "psychiatrist",
      tags: ["teens", "anxiety", "arabic-speaking"],
      nextAvailable: "Today 4:30 PM",
      onlineConsultation: false
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
      experience: { en: "9+ years", ar: "أكثر من 9 سنوات" },
      rating: 4.9,
      availableNow: true,
      category: "psychiatrist",
      tags: ["couples", "anxiety", "therapy"],
      nextAvailable: "Today 1:00 PM",
      onlineConsultation: true
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
      experience: { en: "15+ years", ar: "أكثر من 15 سنة" },
      rating: 5.0,
      availableNow: false,
      category: "psychologist",
      tags: ["teens", "assessment", "therapy"],
      nextAvailable: "Monday 9:00 AM",
      onlineConsultation: true
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
      experience: { en: "11+ years", ar: "أكثر من 11 سنة" },
      rating: 4.8,
      availableNow: true,
      category: "psychologist",
      tags: ["arabic-speaking", "couples", "depression"],
      nextAvailable: "Today 6:00 PM",
      onlineConsultation: true
    }
  ];

  const specialties = [
    { key: "all", name: { en: "All", ar: "الكل" } },
    { key: "psychiatrist", name: { en: "Psychiatry", ar: "طب نفسي" } },
    { key: "psychologist", name: { en: "Psychology", ar: "علم النفس" } },
    { key: "online", name: { en: "Online", ar: "عبر الإنترنت" } },
  ];

  const tags = [
    { key: "anxiety", name: { en: "Anxiety", ar: "القلق" } },
    { key: "depression", name: { en: "Depression", ar: "الاكتئاب" } },
    { key: "couples", name: { en: "Couples", ar: "الأزواج" } },
    { key: "teens", name: { en: "Teens", ar: "المراهقين" } },
    { key: "arabic-speaking", name: { en: "Arabic Speaking", ar: "يتحدث العربية" } },
    { key: "addiction", name: { en: "Addiction", ar: "الإدمان" } },
    { key: "therapy", name: { en: "Therapy", ar: "العلاج" } }
  ];

  const getText = (textObj: any) => {
    return textObj[language] || textObj.en;
  };

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSpecialty = selectedSpecialty === "all" || 
        doctor.category === selectedSpecialty || 
        (selectedSpecialty === "online" && doctor.onlineConsultation);
      
      const matchesSearch = searchQuery === "" || 
        getText(doctor.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
        getText(doctor.specialty).toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => doctor.tags.includes(tag));
      
      return matchesSpecialty && matchesSearch && matchesTags;
    });
  }, [selectedSpecialty, searchQuery, selectedTags, language]);

  const getFilterCount = (key: string) => {
    if (key === "all") return doctors.length;
    if (key === "online") return doctors.filter(d => d.onlineConsultation).length;
    return doctors.filter(d => d.category === key).length;
  };

  const topRatedDoctors = doctors.filter(d => d.rating >= 4.8).sort((a, b) => b.rating - a.rating);
  const availableNowDoctors = doctors.filter(d => d.availableNow);
  const psychiatrists = doctors.filter(d => d.category === "psychiatrist");
  const psychologists = doctors.filter(d => d.category === "psychologist");

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const loadMore = (section: keyof typeof visibleSections) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: prev[section] + 4
    }));
  };

  const DoctorCard = ({ doctor, index }: { doctor: any, index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, rotateY: 2 }}
      className="relative group"
      onHoverStart={() => setHoveredDoctor(doctor.id)}
      onHoverEnd={() => setHoveredDoctor(null)}
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={doctor.image} 
            alt={getText(doctor.name)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {doctor.availableNow && (
            <Badge className="absolute top-3 right-3 bg-green-500 text-white">
              <Clock className="w-3 h-3 mr-1" />
              {language === "ar" ? "متاح الآن" : "Available Now"}
            </Badge>
          )}
          
          {doctor.onlineConsultation && (
            <Badge className="absolute top-3 left-3 bg-blue-500 text-white">
              <Video className="w-3 h-3 mr-1" />
              {language === "ar" ? "أونلاين" : "Online"}
            </Badge>
          )}
          
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link to={`/doctors/${doctor.slug}`}>
              <Button className="w-full bg-white/90 text-primary hover:bg-white shadow-lg">
                {language === "ar" ? "عرض الملف الشخصي" : "View Profile"}
              </Button>
            </Link>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {getText(doctor.name)}
              </h3>
              <Badge variant="secondary" className="text-xs">
                {getText(doctor.specialty)}
              </Badge>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {getText(doctor.description)}
          </p>
          
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1">
              {doctor.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {doctor.nextAvailable}
              </span>
              <Link to="/booking" state={{ selectedDoctor: getText(doctor.name) }}>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Calendar className="w-3 h-3 mr-1" />
                  {language === "ar" ? "احجز" : "Book"}
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Profile Preview */}
      <AnimatePresence>
        {hoveredDoctor === doctor.id && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 min-w-64 border"
          >
            <div className="flex items-center gap-3 mb-2">
              <Avatar className="w-12 h-12">
                <AvatarImage src={doctor.image} alt={getText(doctor.name)} />
                <AvatarFallback>{getText(doctor.name).charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-sm">{getText(doctor.name)}</h4>
                <p className="text-xs text-muted-foreground">{getText(doctor.specialty)}</p>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span>{doctor.rating}/5.0 • {getText(doctor.experience)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-green-500" />
                <span>{doctor.nextAvailable}</span>
              </div>
              {doctor.onlineConsultation && (
                <div className="flex items-center gap-2">
                  <Video className="w-3 h-3 text-blue-500" />
                  <span>{language === "ar" ? "استشارة أونلاين متاحة" : "Online consultation available"}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const DoctorSection = ({ 
    title, 
    doctors: sectionDoctors, 
    visible, 
    onLoadMore, 
    sectionKey 
  }: { 
    title: string, 
    doctors: any[], 
    visible: number, 
    onLoadMore: () => void,
    sectionKey: string 
  }) => (
    <motion.section 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-muted-foreground">
          {language === "ar" ? `${sectionDoctors.length} أطباء` : `${sectionDoctors.length} doctors`}
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sectionDoctors.slice(0, visible).map((doctor, index) => (
          <DoctorCard key={doctor.id} doctor={doctor} index={index} />
        ))}
      </div>
      
      {visible < sectionDoctors.length && (
        <div className="text-center">
          <Button 
            onClick={onLoadMore}
            variant="outline" 
            className="border-primary/20 hover:bg-primary/5"
          >
            {language === "ar" ? `عرض المزيد من ${title}` : `Show More ${title}`}
          </Button>
        </div>
      )}
    </motion.section>
  );

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {language === "ar" ? "تعرف على " : "Meet Our "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              {language === "ar" ? "أطبائنا الخبراء" : "Expert Doctors"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "ar" 
              ? "فريقنا من أخصائيي الصحة النفسية ذوي الخبرة مكرس لتقديم رعاية متفهمة وقائمة على الأدلة"
              : "Our team of experienced mental health professionals is dedicated to providing compassionate, evidence-based care"
            }
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder={language === "ar" ? "ابحث عن طبيب..." : "Search for a doctor..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Sticky Smart Filters */}
        <motion.div 
          className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 -mx-4 px-4 py-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {specialties.map((specialty) => (
              <motion.button
                key={specialty.key}
                onClick={() => setSelectedSpecialty(specialty.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSpecialty === specialty.key 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-muted hover:bg-muted/80 border border-border'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getText(specialty.name)} ({getFilterCount(specialty.key)})
              </motion.button>
            ))}
          </div>
          
          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <motion.button
                key={tag.key}
                onClick={() => toggleTag(tag.key)}
                className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                  selectedTags.includes(tag.key)
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-background border border-border hover:bg-muted'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                #{getText(tag.name)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Doctor Sections */}
        <DoctorSection
          title={language === "ar" ? "⭐ الأطباء الأعلى تقييماً" : "⭐ Top Rated Doctors"}
          doctors={topRatedDoctors}
          visible={visibleSections.topRated}
          onLoadMore={() => loadMore('topRated')}
          sectionKey="topRated"
        />
        
        <DoctorSection
          title={language === "ar" ? "🔄 متاحون الآن" : "🔄 Available Now"}
          doctors={availableNowDoctors}
          visible={visibleSections.availableNow}
          onLoadMore={() => loadMore('availableNow')}
          sectionKey="availableNow"
        />
        
        <DoctorSection
          title={language === "ar" ? "🧠 أطباء نفسيون" : "🧠 Psychiatrists"}
          doctors={psychiatrists}
          visible={visibleSections.psychiatrists}
          onLoadMore={() => loadMore('psychiatrists')}
          sectionKey="psychiatrists"
        />
        
        <DoctorSection
          title={language === "ar" ? "👩‍⚕️ أخصائيو علم النفس" : "👩‍⚕️ Psychologists"}
          doctors={psychologists}
          visible={visibleSections.psychologists}
          onLoadMore={() => loadMore('psychologists')}
          sectionKey="psychologists"
        />

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
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {language === "ar" ? "احصل على مطابقة مع طبيب" : "Get Matched with a Doctor"}
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    <Users className="w-4 h-4 mr-2" />
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
