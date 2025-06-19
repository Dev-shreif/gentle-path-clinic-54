
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative overflow-hidden rounded-lg p-1 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300">
                <img 
                  src="/lovable-uploads/e412ac9b-1331-4455-b7ba-751776a83649.png" 
                  alt="Journey Logo" 
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-primary/80 to-secondary/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  {language === "en" ? "Journey" : "رحلة"}
                </span>
                <span className="text-xs text-muted-foreground italic opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                  {language === "en" ? "Your Way for Healing" : "طريقك للشفاء"}
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              {language === "en" 
                ? "Professional mental health care in a calming environment. We provide comprehensive psychological support to help you on your journey to wellness and healing."
                : "رعاية صحة نفسية محترفة في بيئة هادئة. نحن نقدم الدعم النفسي الشامل لمساعدتك في رحلتك نحو العافية والشفاء."
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">015 51521419</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@journeyclinic.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  {language === "en" ? "Cairo, Egypt" : "القاهرة، مصر"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              {language === "en" ? "Quick Links" : "روابط سريعة"}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              {language === "en" ? "Connect With Us" : "تواصل معنا"}
            </h3>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-200" />
                  </a>
                );
              })}
            </div>

            {/* Book Appointment CTA */}
            <Link to="/booking">
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                <Calendar className="h-4 w-4 mr-2" />
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
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {language === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                {language === "en" ? "Terms of Service" : "شروط الخدمة"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
