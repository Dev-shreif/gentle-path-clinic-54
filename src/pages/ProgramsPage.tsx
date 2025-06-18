import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Brain, Shield, Calendar } from "lucide-react";

const ProgramsPage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const programs = [
    {
      id: 1,
      icon: Users,
      title: language === "en" ? "Teen Support Program" : "برنامج دعم المراهقين",
      ageGroup: language === "en" ? "13-18 years" : "من 13-18 سنة",
      description: language === "en" 
        ? "Group sessions to support mental health, build confidence, and help teens cope with anxiety and anger management."
        : "جلسات جماعية لدعم الصحة النفسية، تعزيز الثقة، التعامل مع القلق والغضب.",
      supervisor: language === "en" ? "Dr. Maha Mohsen" : "د. مها محسن",
      color: "bg-blue-500"
    },
    {
      id: 2,
      icon: Heart,
      title: language === "en" ? "Children's Trauma Therapy" : "برنامج علاج الصدمات للأطفال",
      ageGroup: language === "en" ? "6-12 years" : "من 6-12 سنة",
      description: language === "en"
        ? "Specialized therapy using play, art, and EMDR techniques to help children process and heal from traumatic experiences."
        : "يستخدم اللعب، الفن، وتقنيات EMDR لمساعدة الأطفال على التعافي من الصدمات.",
      supervisor: language === "en" ? "Dr. Dalia El-Leithy" : "د. داليا الليثي",
      color: "bg-pink-500"
    },
    {
      id: 3,
      icon: Brain,
      title: language === "en" ? "Mothers' Support Program" : "برنامج دعم الأمهات",
      ageGroup: language === "en" ? "Adult women" : "السيدات البالغات",
      description: language === "en"
        ? "Designed for mothers facing parenting challenges, including group support sessions, psychological tools, and coping exercises."
        : "موجه للأمهات اللي بيواجهوا ضغوطات في التربية. يشمل: جلسات دعم جماعي، أدوات نفسية، تمارين.",
      supervisor: language === "en" ? "Dr. Heba Ahmed El-Azab" : "د. هبة أحمد العزب",
      color: "bg-purple-500"
    },
    {
      id: 4,
      icon: Shield,
      title: language === "en" ? "Teen Addiction Recovery" : "برنامج علاج الإدمان للمراهقين",
      ageGroup: language === "en" ? "13-18 years" : "من 13-18 سنة",
      description: language === "en"
        ? "Individual and group therapy sessions with family intervention to support teens in overcoming addiction and building healthy coping mechanisms."
        : "جلسات فردية وجماعية، مع تدخل أسري لمساعدة المراهقين على التعافي من الإدمان.",
      supervisor: language === "en" ? "Dr. Maha Mohsen" : "د. مها محسن",
      color: "bg-green-500"
    },
    {
      id: 5,
      icon: Users,
      title: language === "en" ? "Family Group Therapy" : "برنامج العلاج الأسري الجماعي",
      ageGroup: language === "en" ? "All family members" : "جميع أفراد الأسرة",
      description: language === "en"
        ? "Treating family tensions and recurring traumas using DBT and IFS therapeutic approaches to restore healthy family dynamics."
        : "لعلاج التوترات العائلية والصدمات المتكررة باستخدام DBT + IFS لاستعادة التوازن الأسري.",
      supervisor: language === "en" ? "Dr. Nada El-Awady" : "د. ندى العوضي",
      color: "bg-orange-500"
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
            {language === "en" ? "Journey Therapeutic Programs" : "البرامج العلاجية والداعمة في Journey"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Comprehensive therapeutic programs designed to support individuals and families at every stage of their mental health journey."
              : "برامج علاجية شاملة مصممة لدعم الأفراد والعائلات في كل مرحلة من رحلتهم للصحة النفسية."
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
              <Card key={program.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-full ${program.color} mx-auto mb-4 flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {program.ageGroup}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
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
                    
                    <Button className="w-full gradient-calm text-white hover:opacity-90 transition-opacity">
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === "en" ? "Join Program" : "انضم للبرنامج"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === "en" ? "Ready to Start Your Journey?" : "مستعد لبدء رحلتك؟"}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Our experienced team is here to guide you through your healing process. Contact us to learn more about our programs and find the right fit for your needs."
              : "فريقنا المتخصص هنا لمرافقتك في رحلة الشفاء. تواصل معنا لمعرفة المزيد عن برامجنا واختيار المناسب لاحتياجاتك."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-calm text-white hover:opacity-90 transition-opacity">
              {language === "en" ? "Book Consultation" : "احجز استشارة"}
            </Button>
            <Button size="lg" variant="outline">
              {language === "en" ? "Contact Us" : "تواصل معنا"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
