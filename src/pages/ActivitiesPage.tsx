
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Play, ExternalLink } from "lucide-react";

const ActivitiesPage = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Teen Support Group Workshop" : "ورشة دعم المراهقين",
      date: "2024-01-15"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Family Therapy Session" : "جلسة علاج أسري",
      date: "2024-02-20"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Mental Health Awareness Event" : "فعالية التوعية بالصحة النفسية",
      date: "2024-03-10"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: language === "en" ? "Art Therapy Workshop" : "ورشة العلاج بالفن",
      date: "2024-03-25"
    }
  ];

  const videos = [
    {
      id: 1,
      title: language === "en" ? "Journey Clinic Introduction" : "مقدمة عن عيادة Journey",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45"
    },
    {
      id: 2,
      title: language === "en" ? "Teen Support Program Highlights" : "أبرز برنامج دعم المراهقين",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:20"
    }
  ];

  const events = [
    {
      id: 1,
      title: language === "en" ? "Mental Health Awareness Workshop" : "ورشة التوعية بالصحة النفسية",
      date: "2024-12-25",
      time: "10:00 AM",
      location: language === "en" ? "Journey Clinic" : "عيادة Journey",
      type: language === "en" ? "Workshop" : "ورشة عمل",
      status: "upcoming"
    },
    {
      id: 2,
      title: language === "en" ? "Family Support Group" : "مجموعة دعم الأسر",
      date: "2024-12-30",
      time: "6:00 PM",
      location: language === "en" ? "Journey Clinic" : "عيادة Journey",
      type: language === "en" ? "Support Group" : "مجموعة دعم",
      status: "upcoming"
    },
    {
      id: 3,
      title: language === "en" ? "Teen Art Therapy Session" : "جلسة العلاج بالفن للمراهقين",
      date: "2024-11-15",
      time: "4:00 PM",
      location: language === "en" ? "Journey Clinic" : "عيادة Journey",
      type: language === "en" ? "Therapy Session" : "جلسة علاجية",
      status: "past"
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {language === "en" ? "Journey Activities" : "أنشطة Journey"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Explore our community events, workshops, and activities that bring healing and support to individuals and families on their mental health journey."
              : "استكشف فعاليات مجتمعنا وورش العمل والأنشطة التي تجلب الشفاء والدعم للأفراد والعائلات في رحلتهم للصحة النفسية."
            }
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs defaultValue="photos" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="photos">
              {language === "en" ? "Photos" : "الصور"}
            </TabsTrigger>
            <TabsTrigger value="videos">
              {language === "en" ? "Videos" : "الفيديوهات"}
            </TabsTrigger>
            <TabsTrigger value="calendar">
              {language === "en" ? "Events" : "الفعاليات"}
            </TabsTrigger>
          </TabsList>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card key={photo.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{photo.caption}</h3>
                    <p className="text-sm text-muted-foreground">{photo.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
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
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Calendar Tab */}
          <TabsContent value="calendar" className="space-y-6">
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {language === "en" ? "Upcoming Events" : "الفعاليات القادمة"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.filter(event => event.status === "upcoming").map((event) => (
                    <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {language === "en" ? "Upcoming" : "قادم"}
                          </span>
                        </div>
                        <CardDescription className="text-primary font-medium">
                          {event.type}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <Button className="w-full mt-4 gradient-calm text-white">
                          {language === "en" ? "Book Now" : "احجز الآن"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Past Events */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-muted-foreground">
                  {language === "en" ? "Past Events" : "الفعاليات السابقة"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {events.filter(event => event.status === "past").map((event) => (
                    <Card key={event.id} className="opacity-75">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            {language === "en" ? "Completed" : "مكتمل"}
                          </span>
                        </div>
                        <CardDescription>{event.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ActivitiesPage;
