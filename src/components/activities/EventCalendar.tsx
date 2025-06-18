
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  doctor: string;
  type: string;
  status: "upcoming" | "past";
}

interface EventCalendarProps {
  events: Event[];
  language: string;
}

const EventCalendar = ({ events, language }: EventCalendarProps) => {
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  const pastEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  });

  const renderEventCard = (event: Event, isPast: boolean = false) => (
    <Card key={event.id} className={`hover:shadow-lg transition-shadow duration-300 ${isPast ? 'opacity-75' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl line-clamp-2">{event.title}</CardTitle>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            isPast 
              ? 'bg-gray-100 text-gray-600' 
              : 'bg-green-100 text-green-800'
          }`}>
            {isPast 
              ? (language === "en" ? "Completed" : "مكتمل")
              : (language === "en" ? "Upcoming" : "قادم")
            }
          </span>
        </div>
        <CardDescription className="text-primary font-medium">
          {event.type}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
        
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
        
        <div className="flex items-center text-muted-foreground">
          <User className="h-4 w-4 mr-2" />
          <span>{language === "en" ? "Dr." : "د."} {event.doctor}</span>
        </div>
        
        {!isPast && (
          <Button className="w-full mt-4">
            {language === "en" ? "Register Now" : "سجل الآن"}
          </Button>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-primary">
          {language === "en" ? "Upcoming Events" : "الفعاليات القادمة"}
        </h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map(event => renderEventCard(event, false))}
          </div>
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              {language === "en" 
                ? "No upcoming events at the moment. Please check back soon!" 
                : "لا توجد فعاليات قادمة في الوقت الحالي. يرجى المتابعة قريباً!"
              }
            </p>
          </Card>
        )}
      </div>

      {/* Past Events */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-muted-foreground">
          {language === "en" ? "Past Events" : "الفعاليات السابقة"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map(event => renderEventCard(event, true))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
