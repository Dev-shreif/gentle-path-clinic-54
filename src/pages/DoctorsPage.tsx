
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import DoctorFilters from "@/components/doctors/DoctorFilters";
import DoctorCard from "@/components/doctors/DoctorCard";

const DoctorsPage = () => {
  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? (localStorage.getItem("language") || "en") : "en";
  const isRTL = language === "ar";
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [onlineOnly, setOnlineOnly] = useState(false);
  
  // Pagination states
  const [visibleSections, setVisibleSections] = useState({
    male: 6,
    female: 6,
    topRated: 4,
    availableNow: 4
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
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["anxiety", "depression", "therapy"],
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
      gender: "female",
      languages: ["Arabic", "English"],
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
      gender: "female",
      languages: ["Arabic"],
      tags: ["teens", "anxiety", "therapy"],
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
      gender: "female",
      languages: ["Arabic", "English"],
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
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["teens", "therapy"],
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
      gender: "female",
      languages: ["Arabic", "English", "French"],
      tags: ["couples", "depression"],
      nextAvailable: "Today 6:00 PM",
      onlineConsultation: true
    }
  ];

  const getText = (textObj: any) => textObj[language] || textObj.en;

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSpecialty = selectedSpecialty === "all" || doctor.category === selectedSpecialty;
      const matchesGender = selectedGender === "all" || doctor.gender === selectedGender;
      const matchesLanguage = selectedLanguage === "all" || doctor.languages?.includes(selectedLanguage);
      const matchesOnline = !onlineOnly || doctor.onlineConsultation;
      
      const matchesSearch = searchQuery === "" || 
        getText(doctor.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
        getText(doctor.specialty).toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => doctor.tags.includes(tag));
      
      return matchesSpecialty && matchesGender && matchesLanguage && matchesOnline && matchesSearch && matchesTags;
    });
  }, [selectedSpecialty, selectedGender, selectedLanguage, onlineOnly, searchQuery, selectedTags, language]);

  // Group doctors by gender
  const maleDoctors = filteredDoctors.filter(d => d.gender === "male");
  const femaleDoctors = filteredDoctors.filter(d => d.gender === "female");
  const topRatedDoctors = filteredDoctors.filter(d => d.rating >= 4.8).sort((a, b) => b.rating - a.rating);
  const availableNowDoctors = filteredDoctors.filter(d => d.availableNow);

  const loadMore = (section: keyof typeof visibleSections) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: prev[section] + 6
    }));
  };

  const DoctorSection = ({ 
    title, 
    doctors: sectionDoctors, 
    visible, 
    onLoadMore, 
    sectionKey,
    useGrid = true 
  }: { 
    title: string, 
    doctors: any[], 
    visible: number, 
    onLoadMore: () => void,
    sectionKey: string,
    useGrid?: boolean
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
      
      <div className={`${useGrid 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr" 
        : "flex overflow-x-auto gap-6 pb-4"
      } mb-8`}>
        {sectionDoctors.slice(0, visible).map((doctor, index) => (
          <div key={doctor.id} className={useGrid ? "" : "flex-shrink-0 w-80"}>
            <DoctorCard 
              doctor={doctor} 
              index={index} 
              language={language}
              size={index === 0 && sectionKey === 'topRated' ? 'large' : 'medium'}
            />
          </div>
        ))}
      </div>
      
      {visible < sectionDoctors.length && (
        <div className="text-center">
          <Button 
            onClick={onLoadMore}
            variant="outline" 
            className="border-primary/20 hover:bg-primary/5"
          >
            {language === "ar" ? `عرض المزيد` : `Show More`} 
            ({sectionDoctors.length - visible} {language === "ar" ? "متبقي" : "remaining"})
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

        {/* Smart Filters */}
        <DoctorFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onlineOnly={onlineOnly}
          setOnlineOnly={setOnlineOnly}
          language={language}
          doctors={doctors}
        />

        {/* Results Count */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-muted-foreground">
            {language === "ar" 
              ? `تم العثور على ${filteredDoctors.length} طبيب`
              : `Found ${filteredDoctors.length} doctors`
            }
          </p>
        </motion.div>

        {/* Doctor Sections */}
        {filteredDoctors.length > 0 ? (
          <>
            {/* Top Rated Section */}
            {topRatedDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "⭐ الأطباء الأعلى تقييماً" : "⭐ Top Rated Doctors"}
                doctors={topRatedDoctors}
                visible={visibleSections.topRated}
                onLoadMore={() => loadMore('topRated')}
                sectionKey="topRated"
              />
            )}
            
            {/* Available Now Section */}
            {availableNowDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "🔄 متاحون الآن" : "🔄 Available Now"}
                doctors={availableNowDoctors}
                visible={visibleSections.availableNow}
                onLoadMore={() => loadMore('availableNow')}
                sectionKey="availableNow"
              />
            )}
            
            {/* Male Doctors Section */}
            {maleDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "👨‍⚕️ الأطباء الذكور" : "👨‍⚕️ Male Doctors"}
                doctors={maleDoctors}
                visible={visibleSections.male}
                onLoadMore={() => loadMore('male')}
                sectionKey="male"
              />
            )}
            
            {/* Female Doctors Section */}
            {femaleDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "👩‍⚕️ الطبيبات" : "👩‍⚕️ Female Doctors"}
                doctors={femaleDoctors}
                visible={visibleSections.female}
                onLoadMore={() => loadMore('female')}
                sectionKey="female"
              />
            )}
          </>
        ) : (
          /* No Results */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-4">
              {language === "ar" ? "لم يتم العثور على أطباء" : "No doctors found"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "ar" 
                ? "حاول تغيير الفلاتر أو البحث عن شيء آخر"
                : "Try changing your filters or search for something else"
              }
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
                setSelectedGender('all');
                setSelectedLanguage('all');
                setSelectedTags([]);
                setOnlineOnly(false);
              }}
              className="bg-primary hover:bg-primary/90"
            >
              {language === "ar" ? "مسح جميع الفلاتر" : "Clear All Filters"}
            </Button>
          </motion.div>
        )}

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
