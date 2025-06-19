
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Heart, Star, ArrowRight, Play } from "lucide-react";
import VideoPlayer from "@/components/activities/VideoPlayer";

const StoriesPage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const stories = [
    {
      id: 1,
      name: language === "en" ? "M.S, 17 years old" : "م.س، 17 سنة",
      story: language === "en" 
        ? "I thought what happened to me could never be overcome... but the program helped me believe in myself again."
        : "كنت فاكرة إن اللي حصلي ميتمشيش تجاوزه... لكن البرنامج ساعدني أصدق نفسي تاني.",
      program: language === "en" ? "Teen Trauma Support" : "دعم الصدمات للمراهقين",
      rating: 5
    },
    {
      id: 2,
      name: language === "en" ? "A.M, Mother of 3" : "أ.م، أم لثلاثة أطفال",
      story: language === "en"
        ? "The mothers' support program gave me the tools I needed to be the parent I wanted to be. I learned that taking care of myself is taking care of my family."
        : "برنامج دعم الأمهات أداني الأدوات اللي كنت محتاجاها عشان أبقى الأم اللي عايزة أكونها. اتعلمت إن الاهتمام بنفسي ده اهتمام بأسرتي.",
      program: language === "en" ? "Mothers' Support Program" : "برنامج دعم الأمهات",
      rating: 5
    },
    {
      id: 3,
      name: language === "en" ? "K.H, 15 years old" : "ك.ه، 15 سنة",
      story: language === "en"
        ? "Group therapy taught me that I'm not alone. Meeting others who understood my struggles made all the difference."
        : "العلاج الجماعي علمني إني مش لوحدي. إن ألاقي ناس تفهم معاناتي ده غير حياتي كلها.",
      program: language === "en" ? "Teen Support Group" : "مجموعة دعم المراهقين",
      rating: 5
    },
    {
      id: 4,
      name: language === "en" ? "Family R." : "عائلة ر.",
      story: language === "en"
        ? "Family therapy helped us communicate better and understand each other. We're closer now than we've ever been."
        : "العلاج الأسري ساعدنا نتواصل أحسن ونفهم بعض. دلوقتي إحنا أقرب لبعض أكتر من أي وقت فات.",
      program: language === "en" ? "Family Group Therapy" : "العلاج الأسري الجماعي",
      rating: 5
    }
  ];

  const videos = [
    {
      id: "1",
      title: language === "en" ? "Family Therapy Awareness Session" : "جلسة توعية حول العلاج الأسري",
      doctor: "ندى العوضي",
      date: "2024-01-20",
      description: language === "en" ? "Understanding the importance of family therapy in mental health recovery" : "فهم أهمية العلاج الأسري في التعافي من مشاكل الصحة النفسية",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/433151679718075",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "2",
      title: language === "en" ? "Patient Recovery Story - M.A" : "قصة تعافي المريض - م.أ",
      doctor: "مها محسن",
      date: "2024-03-10",
      description: language === "en" ? "A patient shares their journey of overcoming anxiety and finding hope" : "مريض يشارك رحلته في التغلب على القلق وإيجاد الأمل",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/1165705737447771",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "3",
      title: language === "en" ? "Group Therapy Success Story" : "قصة نجاح العلاج الجماعي",
      doctor: "داليا الليثي",
      date: "2024-04-15",
      description: language === "en" ? "How group therapy transformed lives and built lasting connections" : "كيف غير العلاج الجماعي الحياة وبنى علاقات دائمة",
      facebookUrl: "https://www.facebook.com/100086556327224/videos/2769849259816826",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      title: language === "en" ? "Recovery Journey - Anonymous Patient" : "رحلة التعافي - مريض مجهول",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "2:30",
      description: language === "en" ? "A heartfelt testimonial about overcoming depression" : "شهادة صادقة حول التغلب على الاكتئاب"
    },
    {
      id: 2,
      title: language === "en" ? "Family Healing Story" : "قصة شفاء أسري",
      thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "3:15",
      description: language === "en" ? "How family therapy brought a family closer together" : "كيف جمع العلاج الأسري العائلة مع بعضها البعض"
    },
    {
      id: 3,
      title: language === "en" ? "Teen Success Story" : "قصة نجاح مراهق",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "1:45",
      description: language === "en" ? "A teenager's journey to self-confidence and mental wellness" : "رحلة مراهق نحو الثقة بالنفس والعافية النفسية"
    },
    {
      id: 4,  
      title: language === "en" ? "Mother's Journey - Finding Balance" : "رحلة أم - إيجاد التوازن",
      thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      duration: "2:50",
      description: language === "en" ? "A mother's story of balancing family life and mental health" : "قصة أم عن توازن الحياة الأسرية والصحة النفسية"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage/20 via-background to-lavender/20">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Stories from the Heart of the Journey" : "قصص من قلب الرحلة"}
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-6">
            {language === "en" ? "Voices from Journey" : "أصوات من Journey"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Real stories of healing, growth, and hope from individuals and families who have walked the path of recovery with us."
              : "قصص حقيقية للشفاء والنمو والأمل من الأفراد والعائلات الذين سلكوا طريق التعافي معنا."
            }
          </p>
        </div>
      </div>

      {/* Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stories.map((story) => (
            <Card key={story.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg font-semibold text-primary">
                    {story.name}
                  </CardTitle>
                  <div className="flex space-x-1">
                    {renderStars(story.rating)}
                  </div>
                </div>
                <CardDescription className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">
                  {story.program}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6 text-lg">
                    "{story.story}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Journey Videos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {language === "en" ? "Journey Videos" : "فيديوهات Journey"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map(video => (
              <VideoPlayer 
                key={video.id} 
                {...video} 
                language={language}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {language === "en" ? "Video Testimonials" : "شهادات مصورة"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                    <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {language === "en" ? "Ready to Start Your Journey?" : "مستعد لبدء رحلتك؟"}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Every journey begins with a single step. Let us walk alongside you as you discover your path to healing and growth."
              : "كل رحلة تبدأ بخطوة واحدة. دعنا نسير معك وأنت تكتشف طريقك للشفاء والنمو."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-calm text-white hover:opacity-90 transition-opacity">
              {language === "en" ? "Start Your Journey" : "ابدأ رحلتك"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {language === "en" ? "View Programs" : "شاهد البرامج"}
            </Button>
          </div>
        </div>

        {/* Share Your Story Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {language === "en" ? "Share Your Story" : "شاركنا قصتك"}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Your story could inspire others on their healing journey. Share your experience anonymously and help others find hope."
              : "قصتك ممكن تلهم الآخرين في رحلة الشفاء. شاركنا تجربتك بشكل مجهول وساعد الآخرين يلاقوا الأمل."
            }
          </p>
          <Button variant="outline" size="lg">
            {language === "en" ? "Share Your Story" : "شارك قصتك"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
