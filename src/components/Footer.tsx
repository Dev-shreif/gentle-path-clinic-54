
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const quickLinks = [
    { name: language === "en" ? "About" : "من نحن", href: "/about" },
    { name: language === "en" ? "Doctors" : "الأطباء", href: "/doctors" },
    { name: language === "en" ? "Services" : "الخدمات", href: "/services" },
    { name: language === "en" ? "Contact" : "اتصل بنا", href: "/contact" },
    { name: language === "en" ? "Blog" : "المدونة", href: "/blog" },
    { name: language === "en" ? "Book Appointment" : "احجز موعد", href: "/booking" }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=100086556327224", 
      label: "Facebook",
      color: "hover:text-blue-500"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    { 
      icon: Twitter, 
      href: "#", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center space-x-3 mb-6 group">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img 
                    src="/lovable-uploads/e412ac9b-1331-4455-b7ba-751776a83649.png" 
                    alt="Journey Logo" 
                    className="w-14 h-14 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {language === "en" ? "Journey" : "رحلة"}
                  </span>
                  <span className="text-sm text-muted-foreground italic">
                    {language === "en" ? "Your Way for Healing" : "طريقك للشفاء"}
                  </span>
                </div>
              </Link>
            </motion.div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              {language === "en" 
                ? "Professional mental health care in a calming environment. We provide comprehensive psychological support to help you on your journey to wellness and healing."
                : "رعاية صحة نفسية محترفة في بيئة هادئة. نحن نقدم الدعم النفسي الشامل لمساعدتك في رحلتك نحو العافية والشفاء."
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm group cursor-pointer"
              >
                <Phone className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">015 51521419</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm group cursor-pointer"
              >
                <Mail className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">info@journeyclinic.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-sm group cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-primary group-hover:text-secondary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {language === "en" ? "Cairo, Egypt" : "القاهرة، مصر"}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm relative group"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              {language === "en" ? "Connect With Us" : "تواصل معنا"}
            </h3>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Book Appointment CTA */}
            <Link to="/booking">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group">
                <Calendar className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                {language === "en" ? "Book Now" : "احجز الآن"}
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {language === "en" ? "Journey Clinic. All rights reserved." : "عيادة Journey. جميع الحقوق محفوظة."}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                <span>{language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group">
                <span>{language === "en" ? "Terms of Service" : "شروط الخدمة"}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
