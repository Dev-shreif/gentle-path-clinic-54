import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Calendar, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLanguage;
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: language === "en" ? "Home" : "الرئيسية", href: "/" },
    { name: language === "en" ? "Doctors" : "الأطباء", href: "/doctors" },
    { name: language === "en" ? "Services" : "الخدمات", href: "/services" },
    { name: language === "en" ? "About" : "من نحن", href: "/about" },
    { name: language === "en" ? "Contact" : "اتصل بنا", href: "/contact" }
  ];

  const contentPages = [
    { name: language === "en" ? "Blog" : "المقالات", href: "/blog" },
    { name: language === "en" ? "Activities" : "الأنشطة", href: "/activities" },
    { name: language === "en" ? "Journey Programs" : "برامج Journey", href: "/programs" },
    { name: language === "en" ? "Stories & Experiences" : "القصص والتجارب", href: "/stories" }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    window.location.reload();
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-primary/10 to-secondary/10 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-6 text-muted-foreground">
              <span>{language === "en" ? "Professional Mental Health Care" : "رعاية صحة نفسية محترفة"}</span>
              <span>•</span>
              <span>{language === "en" ? "24/7 Support Available" : "دعم متاح 24/7"}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-primary font-medium">015 51521419</span>
              <div className="h-4 w-px bg-border"></div>
              <Link to="/blog" className="hover:text-primary transition-colors">
                {language === "en" ? "BLOG" : "المدونة"}
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                {language === "en" ? "FOR PROVIDERS" : "للمقدمين"}
              </Link>
              <Link to="/booking" className="hover:text-primary transition-colors">
                {language === "en" ? "BOOKSTORE" : "المتجر"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 lg:top-[44px] w-full z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/e412ac9b-1331-4455-b7ba-751776a83649.png" 
                  alt="Journey Logo" 
                  className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {language === "en" ? "Journey" : "رحلة"}
                </span>
                <span className="text-xs text-muted-foreground italic">
                  {language === "en" ? "Your Way for Healing" : "طريقك للشفاء"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}></div>
                </Link>
              ))}
              
              {/* Content Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-4 py-2">
                    {language === "en" ? "More" : "المزيد"}
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl">
                  {contentPages.map(page => (
                    <DropdownMenuItem key={page.name} asChild>
                      <Link
                        to={page.href}
                        className={`cursor-pointer rounded-lg transition-colors ${
                          isActive(page.href) ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                        }`}
                      >
                        {page.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 rounded-lg hover:bg-primary/5">
                    <Globe className="h-4 w-4" />
                    <span className="ml-1 text-xs font-medium">
                      {language === "en" ? "EN" : "عر"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl">
                  <DropdownMenuItem
                    onClick={() => handleLanguageChange("en")}
                    className={`rounded-lg ${language === "en" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"}`}
                  >
                    English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleLanguageChange("ar")}
                    className={`rounded-lg ${language === "ar" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"}`}
                  >
                    العربية
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Switcher */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg hover:bg-primary/5"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              {/* Book Appointment Button */}
              <Link to="/booking">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-6 py-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {language === "en" ? "Book Now" : "احجز الآن"}
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-border/30">
              <div className="px-2 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-xl">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 border-l-4 border-primary"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Content Pages */}
                <div className="border-t border-border/30 pt-4 mt-4">
                  <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {language === "en" ? "More Pages" : "صفحات إضافية"}
                  </div>
                  {contentPages.map(page => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                        isActive(page.href)
                          ? "text-primary bg-primary/10 border-l-4 border-primary"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
                
                {/* Mobile Actions */}
                <div className="border-t border-border/30 pt-4 mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Mobile Language Switcher */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-lg">
                          <Globe className="h-4 w-4" />
                          <span className="ml-2">
                            {language === "en" ? "English" : "العربية"}
                          </span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl">
                        <DropdownMenuItem
                          onClick={() => handleLanguageChange("en")}
                          className={`rounded-lg ${language === "en" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"}`}
                        >
                          English
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleLanguageChange("ar")}
                          className={`rounded-lg ${language === "ar" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"}`}
                        >
                          العربية
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Mobile Theme Switcher */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="rounded-lg"
                    >
                      {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                      <span className="ml-2">
                        {theme === "light" ? (language === "en" ? "Dark" : "داكن") : (language === "en" ? "Light" : "فاتح")}
                      </span>
                    </Button>
                  </div>

                  <Link to="/booking" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg py-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === "en" ? "Book Appointment" : "احجز موعد"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for navigation */}
      <div className="h-16 lg:h-[124px]"></div>
    </>
  );
};

export default Navigation;
