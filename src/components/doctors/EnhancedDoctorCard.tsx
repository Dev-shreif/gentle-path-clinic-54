
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Calendar, Phone, MapPin, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface DoctorCardProps {
  doctor: any;
  index: number;
  language: string;
}

const EnhancedDoctorCard: React.FC<DoctorCardProps> = ({ doctor, index, language }) => {
  const getText = (textObj: any) => textObj[language] || textObj.en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card/80 to-background/80 backdrop-blur-sm rounded-2xl">
        {/* Doctor Image with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={doctor.image} 
            alt={getText(doctor.name)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-green-500 text-white border-0 shadow-lg">
              <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse" />
              {language === "en" ? "Available" : "متاح"}
            </Badge>
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="ml-1 text-sm font-semibold text-gray-800">4.9</span>
          </div>

          {/* Specialties Icons */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center space-x-2 text-white/90 text-sm">
              <Award className="h-4 w-4" />
              <span className="font-medium">{getText(doctor.specialty)}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Doctor Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {getText(doctor.name)}
              </h3>
              <p className="text-sm text-muted-foreground font-medium">
                {getText(doctor.specialty)}
              </p>
            </div>

            {/* Specialties Tags */}
            <div className="flex flex-wrap gap-2">
              {doctor.tags.slice(0, 3).map((tag: string) => (
                <Badge key={tag} variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {getText(doctor.description)}
            </p>

            {/* Experience & Languages */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>{getText(doctor.experience)}</span>
              </div>
              {doctor.languages && (
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-xs">{doctor.languages.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <Link to={`/doctors/${doctor.slug}`} className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary/5 hover:border-primary transition-all duration-300"
                >
                  {language === "en" ? "View Profile" : "عرض الملف"}
                </Button>
              </Link>
              <Link 
                to="/booking" 
                state={{ selectedDoctor: getText(doctor.name) }}
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  {language === "en" ? "Book Now" : "احجز الآن"}
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EnhancedDoctorCard;
