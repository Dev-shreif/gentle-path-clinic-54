import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoPlayer from "@/components/activities/VideoPlayer";
import PhotoGallery from "@/components/activities/PhotoGallery";
import EventCalendar from "@/components/activities/EventCalendar";

const ActivitiesPage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const videos = [
    {
      id: "1",
      title: language === "en" ? "Anxiety Disorders Awareness Session" : "جلسة توعية حول اضطرابات القلق",
      doctor: "مها محسن",
      date: "2024-03-15",
      description: language === "en" ? "Educational session about understanding and managing anxiety disorders" : "جلسة تعليمية حول فهم وإدارة اضطرابات القلق",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/1165705737447771",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "2", 
      title: language === "en" ? "Teen Mental Health Workshop" : "ورشة الصحة النفسية للمراهقين",
      doctor: "داليا الليثي",
      date: "2024-02-28",
      description: language === "en" ? "Interactive workshop focusing on teen mental health challenges and coping strategies" : "ورشة تفاعلية تركز على تحديات الصحة النفسية للمراهقين واستراتيجيات التأقلم",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/2769849259816826",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: language === "en" ? "Family Therapy Awareness Session" : "جلسة توعية حول العلاج الأسري",
      doctor: "ندى العوضي",
      date: "2024-01-20",
      description: language === "en" ? "Understanding the importance of family therapy in mental health recovery" : "فهم أهمية العلاج الأسري في التعافي من مشاكل الصحة النفسية",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/433151679718075",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "4",
      title: language === "en" ? "Journey Mental Health Session" : "جلسة Journey للصحة النفسية",
      doctor: "فريق Journey",
      date: "2024-04-10",
      description: language === "en" ? "Special session covering various mental health topics and support strategies" : "جلسة خاصة تغطي مواضيع الصحة النفسية المختلفة واستراتيجيات الدعم",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/433151679718075",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "5",
      title: language === "en" ? "Depression Support Group Session" : "جلسة مجموعة دعم الاكتئاب",
      doctor: "هبة أحمد العزب",
      date: "2024-05-12",
      description: language === "en" ? "Support group session for individuals dealing with depression and mood disorders" : "جلسة مجموعة دعم للأفراد الذين يتعاملون مع الاكتئاب واضطرابات المزاج",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/1165705737447771",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "6",
      title: language === "en" ? "Stress Management Workshop" : "ورشة إدارة الضغوط",
      doctor: "مها محسن",
      date: "2024-05-25",
      description: language === "en" ? "Practical techniques for managing stress and building resilience" : "تقنيات عملية لإدارة الضغوط وبناء المرونة النفسية",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/2769849259816826",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "7",
      title: language === "en" ? "Mindfulness and Meditation Session" : "جلسة اليقظة الذهنية والتأمل",
      doctor: "ندى العوضي",
      date: "2024-06-08",
      description: language === "en" ? "Introduction to mindfulness practices for mental wellness" : "مقدمة في ممارسات اليقظة الذهنية للعافية النفسية",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/433151679718075",
      thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "8",
      title: language === "en" ? "Art Therapy Workshop for Children" : "ورشة العلاج بالفن للأطفال",
      doctor: "داليا الليثي",
      date: "2024-06-20",
      description: language === "en" ? "Creative therapy session designed specifically for children and adolescents" : "جلسة علاج إبداعي مصممة خصيصاً للأطفال والمراهقين",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/1165705737447771",
      thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Teen Support Group Workshop" : "ورشة مجموعة دعم المراهقين",
      date: "2024-03-15",
      event: language === "en" ? "Mental Health Awareness Week" : "أسبوع التوعية بالصحة النفسية"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Family Therapy Session" : "جلسة العلاج الأسري",
      date: "2024-02-20",
      event: language === "en" ? "Family Healing Program" : "برنامج الشفاء الأسري"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Mental Health Awareness Event" : "فعالية التوعية بالصحة النفسية",
      date: "2024-01-10",
      event: language === "en" ? "Community Outreach" : "التواصل المجتمعي"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Art Therapy Workshop" : "ورشة العلاج بالفن",
      date: "2024-03-25",
      event: language === "en" ? "Creative Healing Sessions" : "جلسات الشفاء الإبداعي"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Mindfulness and Meditation Session" : "جلسة اليقظة الذهنية والتأمل",
      date: "2024-02-14",
      event: language === "en" ? "Stress Management Workshop" : "ورشة إدارة الضغوط"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Nature Therapy Session" : "جلسة العلاج بالطبيعة",
      date: "2024-04-05",
      event: language === "en" ? "Outdoor Healing Program" : "برنامج الشفاء في الطبيعة"
    }
  ];

  const events = [
    {
      id: 1,
      title: language === "en" ? "Mental Health First Aid Workshop" : "ورشة الإسعافات الأولية للصحة النفسية",
      description: language === "en" ? "Learn essential skills to help someone experiencing a mental health crisis" : "تعلم المهارات الأساسية لمساعدة شخص يواجه أزمة صحة نفسية",
      date: "2024-12-25",
      time: "10:00 AM",
      location: language === "en" ? "Journey Clinic - Main Hall" : "عيادة Journey - القاعة الرئيسية",
      doctor: "مها محسن",
      type: language === "en" ? "Workshop" : "ورشة عمل",
      status: "upcoming" as const
    },
    {
      id: 2,
      title: language === "en" ? "Family Support Group Session" : "جلسة مجموعة دعم الأسر",
      description: language === "en" ? "Support group for families dealing with mental health challenges" : "مجموعة دعم للأسر التي تواجه تحديات الصحة النفسية",
      date: "2024-12-30",
      time: "6:00 PM",
      location: language === "en" ? "Journey Clinic - Group Room" : "عيادة Journey - غرفة المجموعات",
      doctor: "ندى العوضي",
      type: language === "en" ? "Support Group" : "مجموعة دعم",
      status: "upcoming" as const
    },
    {
      id: 3,
      title: language === "en" ? "Teen Anxiety Management Workshop" : "ورشة إدارة القلق للمراهقين",
      description: language === "en" ? "Practical techniques for managing anxiety in teenagers" : "تقنيات عملية لإدارة القلق عند المراهقين",
      date: "2025-01-15",
      time: "4:00 PM",
      location: language === "en" ? "Journey Clinic - Youth Space" : "عيادة Journey - مساحة الشباب",
      doctor: "داليا الليثي",
      type: language === "en" ? "Workshop" : "ورشة عمل",
      status: "upcoming" as const
    },
    {
      id: 4,
      title: language === "en" ? "Art Therapy Session" : "جلسة العلاج بالفن",
      description: language === "en" ? "Healing through creative expression and art therapy" : "الشفاء من خلال التعبير الإبداعي والعلاج بالفن",
      date: "2024-11-15",
      time: "4:00 PM",
      location: language === "en" ? "Journey Clinic - Art Studio" : "عيادة Journey - استوديو الفن",
      doctor: "هبة أحمد العزب",
      type: language === "en" ? "Therapy Session" : "جلسة علاجية",
      status: "past" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/20 via-background to-lavender/20">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')"
          }} 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            {language === "en" ? "Journey Activities" : "أنشطة Journey"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {language === "en" 
              ? "Explore our community events, workshops, and activities that bring healing and support to individuals and families on their mental health journey." 
              : "استكشف فعاليات مجتمعنا وورش العمل والأنشطة التي تجلب الشفاء والدعم للأفراد والعائلات في رحلتهم للصحة النفسية."
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="videos" className="transition-all duration-200">
              {language === "en" ? "Videos" : "الفيديوهات"}
            </TabsTrigger>
            <TabsTrigger value="photos" className="transition-all duration-200">
              {language === "en" ? "Photos" : "الصور"}
            </TabsTrigger>
            <TabsTrigger value="events" className="transition-all duration-200">
              {language === "en" ? "Events" : "الفعاليات"}
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(video => (
                <VideoPlayer 
                  key={video.id} 
                  {...video} 
                  language={language}
                />
              ))}
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-6 animate-fade-in">
            <PhotoGallery photos={photos} language={language} />
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6 animate-fade-in">
            <EventCalendar events={events} language={language} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ActivitiesPage;
