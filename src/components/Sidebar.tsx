
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Heart, 
  Calendar, 
  BookOpen, 
  MessageCircle, 
  Phone,
  Activity,
  Award,
  FileText
} from 'lucide-react';

interface SidebarProps {
  language: string;
}

const Sidebar: React.FC<SidebarProps> = ({ language }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: language === "en" ? "Home" : "الرئيسية",
      href: "/",
      icon: Home
    },
    {
      name: language === "en" ? "Doctors" : "الأطباء",
      href: "/doctors",
      icon: Users
    },
    {
      name: language === "en" ? "Services" : "الخدمات",
      href: "/services",
      icon: Heart
    },
    {
      name: language === "en" ? "Book Appointment" : "احجز موعد",
      href: "/booking",
      icon: Calendar
    },
    {
      name: language === "en" ? "Activities" : "الأنشطة",
      href: "/activities",
      icon: Activity
    },
    {
      name: language === "en" ? "Programs" : "البرامج",
      href: "/programs",
      icon: Award
    },
    {
      name: language === "en" ? "Stories" : "القصص",
      href: "/stories",
      icon: FileText
    },
    {
      name: language === "en" ? "Blog" : "المدونة",
      href: "/blog",
      icon: BookOpen
    },
    {
      name: language === "en" ? "About" : "من نحن",
      href: "/about",
      icon: MessageCircle
    },
    {
      name: language === "en" ? "Contact" : "تواصل معنا",
      href: "/contact",
      icon: Phone
    }
  ];

  return (
    <motion.div 
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-64 bg-gradient-to-b from-background/95 to-card/95 backdrop-blur-md border-l border-border/20 shadow-xl z-40 overflow-y-auto"
    >
      <div className="p-6">
        <div className="space-y-2">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <motion.div
                key={item.name}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-l-4 border-primary shadow-md' 
                      : 'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary hover:translate-x-2'
                    }
                  `}
                >
                  <IconComponent 
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive ? 'text-primary scale-110' : 'text-muted-foreground group-hover:text-primary group-hover:scale-110'
                    }`} 
                  />
                  <span className={`font-medium transition-all duration-300 ${
                    isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-2 h-2 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
