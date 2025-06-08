import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, Calendar, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const {
    theme,
    setTheme
  } = useTheme();

  // Load language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
    document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLanguage;
  }, []);
  const navigation = [{
    name: language === "en" ? "Home" : "الرئيسية",
    href: "/"
  }, {
    name: language === "en" ? "Doctors" : "الأطباء",
    href: "/doctors"
  }, {
    name: language === "en" ? "Services" : "الخدمات",
    href: "/services"
  }, {
    name: language === "en" ? "Blog" : "المقالات",
    href: "/blog"
  }, {
    name: language === "en" ? "About" : "من نحن",
    href: "/about"
  }, {
    name: language === "en" ? "Contact" : "اتصل بنا",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // Trigger a page refresh to update all content
    window.location.reload();
  };
  return <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full breathe object-scale-down"></div>
            <span className="text-xl font-semibold text-foreground">
              {language === "en" ? "Journey" : "رحلة"}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Globe className="h-4 w-4" />
                  <span className="ml-1 text-xs">
                    {language === "en" ? "EN" : "عر"}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")} className={language === "en" ? "bg-primary/10" : ""}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ar")} className={language === "ar" ? "bg-primary/10" : ""}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Switcher */}
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Book Appointment Button */}
            <Link to="/booking">
              <Button className="gradient-calm hover:opacity-90 transition-opacity text-violet-600">
                <Calendar className="h-4 w-4 mr-2" />
                {language === "en" ? "Book Appointment" : "احجز موعد"}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-lg rounded-lg mt-2 border border-border/50">
              {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${isActive(item.href) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              
              <div className="pt-4 flex items-center justify-between">
                {/* Mobile Language Switcher */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Globe className="h-4 w-4" />
                      <span className="ml-2">
                        {language === "en" ? "English" : "العربية"}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleLanguageChange("en")} className={language === "en" ? "bg-primary/10" : ""}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange("ar")} className={language === "ar" ? "bg-primary/10" : ""}>
                      العربية
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Mobile Theme Switcher */}
                <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2">
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="ml-2">
                    {theme === "light" ? language === "en" ? "Dark" : "داكن" : language === "en" ? "Light" : "فاتح"} Mode
                  </span>
                </Button>
              </div>

              <div className="pt-2">
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gradient-calm text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    {language === "en" ? "Book Appointment" : "احجز موعد"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;