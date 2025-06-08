import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {
    theme,
    setTheme
  } = useTheme();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Doctors",
    href: "/doctors"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full breathe"></div>
            <span className="text-xl font-semibold text-foreground">Journey </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${isActive(item.href) ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Link to="/booking">
              <Button className="gradient-calm text-white hover:opacity-90 transition-opacity">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
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
                <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="p-2">
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="ml-2">
                    {theme === "light" ? "Dark" : "Light"} Mode
                  </span>
                </Button>
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="gradient-calm text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book
                  </Button>
                </Link>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;