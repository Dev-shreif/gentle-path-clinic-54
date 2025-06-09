import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Video, Calendar, Users, MapPin } from "lucide-react";
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
  return <motion.div layout initial={{
    opacity: 0,
    y: 50
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} whileHover={{
    scale: 1.02,
    rotateY: 2,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  }} className="relative group">
      <Card className={`${cardClass} overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500`}>
        {/* Doctor Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img src={doctor.image} alt={getText(doctor.name)} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Status Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {doctor.availableNow}
            
            {doctor.onlineConsultation}
          </div>
          
          {/* Gender Badge */}
          
          
          {/* Quick Action Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              <Link to={`/doctors/${doctor.slug}`} className="flex-1">
                <Button className="w-full bg-white/90 text-primary hover:bg-white shadow-lg text-sm">
                  {language === "ar" ? "عرض الملف" : "View Profile"}
                </Button>
              </Link>
              <Link to="/booking" state={{
              selectedDoctor: getText(doctor.name)
            }}>
                <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg">
                  <Calendar className="w-3 h-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <CardContent className="p-4 flex-1 flex flex-col py-0 px-[13px] my-0 mx-0">
          {/* Doctor Info */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                {getText(doctor.name)}
              </h3>
              <Badge variant="secondary" className="text-xs mb-2">
                {getText(doctor.specialty)}
              </Badge>
              
              {/* Languages */}
              {doctor.languages && <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {doctor.languages.join(', ')}
                </div>}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{doctor.rating}</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
            {getText(doctor.description)}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3 py-0 px-0 mx-0 my-0 rounded-none">
            {doctor.tags.slice(0, 3).map(tag => <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>)}
            {doctor.tags.length > 3 && <Badge variant="outline" className="text-xs">
                +{doctor.tags.length - 3}
              </Badge>}
          </div>
          
          {/* Footer */}
          <div className="flex items-center justify-between text-sm pt-2 border-t border-border/30">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span className="text-xs">{doctor.nextAvailable}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">
                {getText(doctor.experience)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>;
};
export default DoctorCard;