import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Brain, Shield, Calendar, Phone } from "lucide-react";

const ProgramsPage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const handleContactClick = () => {
    window.location.href = 'tel:+201234567890';
  };

  const programs = [
    {
      id: 1,
      icon: Users,
      title: language === "en" ? "Teen Girls Emotional Safety Workshop" : "ورشة الأمان العاطفي للفتيات المراهقات",
      ageGroup: language === "en" ? "13-18 years" : "من 13-18 سنة",
      description: language === "en" 
        ? "A completed workshop focusing on emotional safety, self-confidence, and healthy relationships for teenage girls."
        : "ورشة مكتملة تركز على الأمان العاطفي، الثقة بالنفس، والعلاقات الصحية للفتيات المراهقات.",
      supervisor: language === "en" ? "Dr. Maha Mohsen" : "د. مها محسن",
      color: "bg-blue-500",
      status: "completed",
      date: "March 2024",
      category: language === "en" ? "Workshop" : "ورشة عمل"
    },
    {
      id: 2,
      icon: Heart,
      title: language === "en" ? "Support Group for Burnout Recovery" : "مجموعة دعم للتعافي من الإنهاك",
      ageGroup: language === "en" ? "Adult professionals" : "المهنيين البالغين",
      description: language === "en"
        ? "A therapeutic journey helping professionals recover from workplace burnout through group support and mindfulness techniques."
        : "رحلة علاجية لمساعدة المهنيين على التعافي من إنهاك العمل من خلال الدعم الجماعي وتقنيات اليقظة الذهنية.",
      supervisor: language === "en" ? "Dr. Dalia El-Leithy" : "د. داليا الليثي",
      color: "bg-pink-500",
      status: "completed",
      date: "February 2024",
      category: language === "en" ? "Support Group" : "مجموعة دعم"
    },
    {
      id: 3,
      icon: Brain,
      title: language === "en" ? "CBT Program for Anxiety – Summer Session" : "برنامج العلاج المعرفي السلوكي للقلق - جلسة الصيف",
      ageGroup: language === "en" ? "Adults 18+" : "البالغين 18+",
      description: language === "en"
        ? "An intensive 8-week Cognitive Behavioral Therapy program specifically designed to help participants manage anxiety disorders."
        : "برنامج مكثف لمدة 8 أسابيع للعلاج المعرفي السلوكي مصمم خصيصاً لمساعدة المشاركين على إدارة اضطرابات القلق.",
      supervisor: language === "en" ? "Dr. Heba Ahmed El-Azab" : "د. هبة أحمد العزب",
      color: "bg-purple-500",
      status: "completed",
      date: "August 2024",
      category: language === "en" ? "Therapeutic Journey" : "رحلة علاجية"
    },
    {
      id: 4,
      icon: Shield,
      title: language === "en" ? "Parents & Adolescents Dialogue Circle" : "دائرة الحوار بين الآباء والمراهقين",
      ageGroup: language === "en" ? "Families" : "العائلات",
      description: language === "en"
        ? "A family-focused program bringing parents and teenagers together to improve communication and strengthen family bonds."
        : "برنامج يركز على الأسرة يجمع الآباء والمراهقين معاً لتحسين التواصل وتقوية الروابط الأسرية.",
      supervisor: language === "en" ? "Dr. Maha Mohsen" : "د. مها محسن",
      color: "bg-green-500",
      status: "completed",
      date: "January 2024",
      category: language === "en" ? "Family Program" : "برنامج أسري"
    },
    {
      id: 5,
      icon: Users,
      title: language === "en" ? "Mindfulness & Stress Management Workshop" : "ورشة اليقظة الذهنية وإدارة الضغوط",
      ageGroup: language === "en" ? "All ages" : "جميع الأعمار",
      description: language === "en"
        ? "A transformative workshop introducing mindfulness practices and stress management techniques for daily life challenges."
        : "ورشة تحويلية تقدم ممارسات اليقظة الذهنية وتقنيات إدارة الضغوط لتحديات الحياة اليومية.",
      supervisor: language === "en" ? "Dr. Nada El-Awady" : "د. ندى العوضي",
      color: "bg-orange-500",
      status: "completed",
      date: "December 2023",
      category: language === "en" ? "Workshop" : "ورشة عمل"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/20 via-background to-lavender/20">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Workshops & Therapeutic Journeys Archive" : "أرشيف الورش والرحلات العلاجية"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {language === "en" 
              ? "Explore some of the impactful programs and therapeutic journeys we've hosted recently at Journey Clinic."
              : "استكشف بعض البرامج المؤثرة والرحلات العلاجية التي استضفناها مؤخراً في عيادة Journey."
            }
          </p>
          <p className="text-md text-muted-foreground">
            {language === "en" 
              ? "These programs have already been completed and showcase our commitment to mental health support."
              : "هذه البرامج تم إنجازها بالفعل وتعرض التزامنا بدعم الصحة النفسية."
            }
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg group relative overflow-hidden">
                {/* Hover Overlay - Fixed positioning issue */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-6">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-white text-black hover:bg-gray-100 transition-colors duration-200"
                  >
                    {language === "en" ? "Learn More" : "اعرف المزيد"}
                  </Button>
                </div>

                <CardHeader className="text-center pb-4 relative z-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${program.color}`}>
                      {program.category}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">
                      {program.date}
                    </span>
                  </div>
                  <div className={`w-16 h-16 rounded-full ${program.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {program.ageGroup}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full relative z-0">
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {language === "en" ? "Program Supervisor:" : "مشرف البرنامج:"}
                      </p>
                      <p className="font-semibold text-primary">{program.supervisor}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">
                        {language === "en" ? "✓ Completed" : "✓ مكتمل"}
                      </span>
                      <span className="text-muted-foreground">
                        {program.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === "en" ? "Interested in Our Future Programs?" : "مهتم ببرامجنا المستقبلية؟"}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Stay connected with us to be notified about upcoming workshops, support groups, and therapeutic programs."
              : "ابق على تواصل معنا ليتم إشعارك بالورش القادمة، مجموعات الدعم، والبرامج العلاجية."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleContactClick}
              className="gradient-calm text-white hover:opacity-90 transition-opacity"
            >
              <Phone className="h-4 w-4 mr-2" />
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleContactClick}
            >
              {language === "en" ? "Schedule Consultation" : "احجز استشارة"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
