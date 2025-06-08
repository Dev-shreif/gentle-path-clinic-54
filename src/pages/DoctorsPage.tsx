
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
      name: { en: "Dr. Sarah Mitchell", ar: "د. سارة ميتشل" },
      slug: "dr-sarah-mitchell",
      specialty: { en: "Clinical Psychology", ar: "علم النفس السريري" },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Specializing in anxiety disorders and cognitive behavioral therapy with over 15 years of experience.",
        ar: "متخصصة في اضطرابات القلق والعلاج المعرفي السلوكي مع أكثر من 15 سنة من الخبرة."
      },
      expertise: {
        en: ["Anxiety Disorders", "CBT", "Trauma Therapy"],
        ar: ["اضطرابات القلق", "العلاج المعرفي السلوكي", "علاج الصدمات"]
      },
      experience: { en: "15+ years", ar: "أكثر من 15 سنة" }
    },
    {
      id: 2,
      name: { en: "Dr. Michael Rodriguez", ar: "د. مايكل رودريجيز" },
      slug: "dr-michael-rodriguez",
      specialty: { en: "Psychiatrist", ar: "طبيب نفسي" },
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Expert in mood disorders and medication management, helping patients achieve optimal mental health.",
        ar: "خبير في اضطرابات المزاج وإدارة الأدوية، يساعد المرضى على تحقيق الصحة النفسية المثلى."
      },
      expertise: {
        en: ["Depression", "Bipolar Disorder", "Medication Management"],
        ar: ["الاكتئاب", "اضطراب ثنائي القطب", "إدارة الأدوية"]
      },
      experience: { en: "12+ years", ar: "أكثر من 12 سنة" }
    },
    {
      id: 3,
      name: { en: "Dr. Emily Chen", ar: "د. إيميلي تشين" },
      slug: "dr-emily-chen",
      specialty: { en: "Child Psychology", ar: "علم نفس الأطفال" },
      image: "https://images.unsplash.com/photo-1594824709602-7b0c7b2e0c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Dedicated to helping children and adolescents navigate emotional and behavioral challenges.",
        ar: "مكرسة لمساعدة الأطفال والمراهقين على التنقل في التحديات العاطفية والسلوكية."
      },
      expertise: {
        en: ["Child Psychology", "ADHD", "Family Therapy"],
        ar: ["علم نفس الأطفال", "اضطراب نقص الانتباه", "العلاج الأسري"]
      },
      experience: { en: "10+ years", ar: "أكثر من 10 سنوات" }
    },
    {
      id: 4,
      name: { en: "Dr. James Thompson", ar: "د. جيمس طومسون" },
      slug: "dr-james-thompson",
      specialty: { en: "Trauma Specialist", ar: "أخصائي الصدمات" },
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Specialized in PTSD treatment and trauma recovery using evidence-based therapeutic approaches.",
        ar: "متخصص في علاج اضطراب ما بعد الصدمة وتعافي الصدمات باستخدام المناهج العلاجية القائمة على الأدلة."
      },
      expertise: {
        en: ["PTSD", "Trauma Recovery", "EMDR"],
        ar: ["اضطراب ما بعد الصدمة", "تعافي الصدمات", "EMDR"]
      },
      experience: { en: "18+ years", ar: "أكثر من 18 سنة" }
    },
    {
      id: 5,
      name: { en: "Dr. Lisa Park", ar: "د. ليزا بارك" },
      slug: "dr-lisa-park",
      specialty: { en: "Addiction Counselor", ar: "مستشار الإدمان" },
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Compassionate care for addiction recovery and substance abuse treatment programs.",
        ar: "رعاية متفهمة لتعافي الإدمان وبرامج علاج تعاطي المواد المخدرة."
      },
      expertise: {
        en: ["Addiction Recovery", "Substance Abuse", "Group Therapy"],
        ar: ["تعافي الإدمان", "تعاطي المواد المخدرة", "العلاج الجماعي"]
      },
      experience: { en: "14+ years", ar: "أكثر من 14 سنة" }
    },
    {
      id: 6,
      name: { en: "Dr. David Wilson", ar: "د. ديفيد ويلسون" },
      slug: "dr-david-wilson",
      specialty: { en: "Couples Therapy", ar: "علاج الأزواج" },
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: { 
        en: "Helping couples strengthen relationships and improve communication through therapeutic intervention.",
        ar: "مساعدة الأزواج على تقوية العلاقات وتحسين التواصل من خلال التدخل العلاجي."
      },
      expertise: {
        en: ["Couples Therapy", "Marriage Counseling", "Communication"],
        ar: ["علاج الأزواج", "استشارات الزواج", "التواصل"]
      },
      experience: { en: "16+ years", ar: "أكثر من 16 سنة" }
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
