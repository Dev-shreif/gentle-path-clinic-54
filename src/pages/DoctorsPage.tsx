
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

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
      experience: { en: "10+ years", ar: "أكثر من 10 سنوات" }
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
      experience: { en: "12+ years", ar: "أكثر من 12 سنة" }
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

  const getText = (textObj: any) => {
    return textObj[language] || textObj.en;
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
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
                  alt={getText(doctor.name)}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Link to={`/doctors/${doctor.slug}`}>
                    <Button className="w-full bg-white/90 text-primary hover:bg-white">
                      {language === "ar" ? "عرض الملف الشخصي" : "View Profile"}
                    </Button>
                  </Link>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {getText(doctor.name)}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {getText(doctor.specialty)}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                      {getText(doctor.expertise).length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{getText(doctor.expertise).length - 2} {language === "ar" ? "أكثر" : "more"}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      {getText(doctor.experience)}
                    </span>
                    <Link to="/booking" state={{ selectedDoctor: getText(doctor.name) }}>
                      <Button size="sm" variant="outline" className="border-primary/20 hover:bg-primary/5">
                        <Calendar className="h-4 w-4 mr-2" />
                        {language === "ar" ? "احجز" : "Book"}
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
                <Button className="gradient-calm text-white hover:opacity-90">
                  {language === "ar" ? "احصل على مطابقة مع طبيب" : "Get Matched with a Doctor"}
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  {language === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}
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
