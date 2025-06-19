import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Video, Calendar, Users, MapPin, Heart, Brain, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
interface DoctorCardProps {
  doctor: any;
  index: number;
  language: string;
  size?: 'small' | 'medium' | 'large';
}
const DoctorCard = ({
  doctor,
  index,
  language,
  size = 'medium'
}: DoctorCardProps) => {
  const getText = (textObj: any) => textObj[language] || textObj.en;
  const sizeClasses = {
    small: 'h-80',
    medium: 'h-96',
    large: 'h-[450px]'
  };
  const cardClass = sizeClasses[size] || sizeClasses.medium;

  // Icon mapping for specialties
  const getSpecialtyIcon = (specialty: string) => {
    const specialtyLower = specialty.toLowerCase();
    if (specialtyLower.includes('mental') || specialtyLower.includes('نفس')) return Brain;
    if (specialtyLower.includes('family') || specialtyLower.includes('عائل')) return Users;
    if (specialtyLower.includes('therapy') || specialtyLower.includes('علاج')) return MessageCircle;
    return Heart;
  };
  const SpecialtyIcon = getSpecialtyIcon(getText(doctor.specialty));
  return <motion.div layout initial={{
    opacity: 0,
    y: 50,
    scale: 0.95
  }} animate={{
    opacity: 1,
    y: 0,
    scale: 1
  }} transition={{
    duration: 0.6,
    delay: index * 0.1,
    type: "spring",
    stiffness: 100
  }} whileHover={{
    scale: 1.03,
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200
    }
  }} className="relative group">
      <Card className={`${cardClass} overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl group-hover:border-primary/20 border-2 border-transparent`}>
        {/* Doctor Image Section */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <img src={doctor.image} alt={getText(doctor.name)} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            {doctor.availableNow}
            {doctor.onlineConsultation}
          </div>
          
          {/* Quick Action Overlay */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-20">
            <div className="flex gap-2">
              <Link to={`/doctors/${doctor.slug}`} className="flex-1">
                <Button className="w-full bg-white/95 text-primary hover:bg-white hover:scale-105 shadow-lg text-sm font-medium backdrop-blur-sm transition-all duration-300">
                  {language === "ar" ? "عرض الملف" : "View Profile"}
                </Button>
              </Link>
              <Link to="/booking" state={{
              selectedDoctor: getText(doctor.name)
            }}>
                <Button className="bg-primary/95 hover:bg-primary text-white shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Calendar className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <CardContent className="p-6 flex-1 flex flex-col">
          {/* Doctor Info Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1 text-foreground">
                {getText(doctor.name)}
              </h3>
              
              {/* Specialty with Icon */}
              <div className="flex items-center gap-2 mb-3">
                
                <Badge variant="secondary" className="text-xs font-medium bg-secondary/20 hover:bg-secondary/30 transition-colors">
                  {getText(doctor.specialty)}
                </Badge>
              </div>
              
              {/* Languages */}
              {doctor.languages && <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                  <MapPin className="w-3 h-3 text-primary/60" />
                  <span className="font-medium">{doctor.languages.join(', ')}</span>
                </div>}
            </div>
            
            {/* Rating */}
            
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1 leading-relaxed">
            {getText(doctor.description)}
          </p>
          
          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {doctor.tags.slice(0, 3).map((tag: string) => <Badge key={tag} variant="outline" className="text-xs px-2 py-1 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 cursor-default">
                #{tag}
              </Badge>)}
            {doctor.tags.length > 3 && <Badge variant="outline" className="text-xs px-2 py-1 bg-muted/50 border-muted-foreground/20 cursor-default">
                +{doctor.tags.length - 3}
              </Badge>}
          </div>
          
          {/* Enhanced Footer */}
          <div className="flex items-center justify-between text-sm pt-3 border-t border-border/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3 text-primary/60" />
                <span className="text-xs font-medium">{doctor.nextAvailable}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-secondary/60" />
              <span className="text-xs text-muted-foreground font-medium">
                {getText(doctor.experience)}
              </span>
            </div>
          </div>

          {/* Interactive CTA Section */}
          <div className="mt-4 pt-3 border-t border-border/20">
            <div className="flex gap-2">
              <Link to={`/doctors/${doctor.slug}`} className="flex-1">
                <Button variant="outline" className="w-full text-xs hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300 rounded-lg">
                  {language === "ar" ? "المزيد" : "Learn More"}
                </Button>
              </Link>
              <Link to="/booking" state={{
              selectedDoctor: getText(doctor.name)
            }}>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 text-xs px-4 py-2 rounded-lg">
                  <Calendar className="w-3 h-3 mr-1" />
                  {language === "ar" ? "حجز" : "Book"}
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
export default DoctorCard;