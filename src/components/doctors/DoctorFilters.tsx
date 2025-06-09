
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Filter, Users, Globe, Video, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  onlineOnly: boolean;
  setOnlineOnly: (online: boolean) => void;
  language: string;
  doctors: any[];
}

const DoctorFilters = ({
  searchQuery,
  setSearchQuery,
  selectedSpecialty,
  setSelectedSpecialty,
  selectedGender,
  setSelectedGender,
  selectedLanguage,
  setSelectedLanguage,
  selectedTags,
  setSelectedTags,
  onlineOnly,
  setOnlineOnly,
  language,
  doctors
}: FilterProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const specialties = [
    { key: "all", name: { en: "All Specialties", ar: "جميع التخصصات" } },
    { key: "psychiatrist", name: { en: "Psychiatry", ar: "طب نفسي" } },
    { key: "psychologist", name: { en: "Psychology", ar: "علم النفس" } },
    { key: "addiction", name: { en: "Addiction Treatment", ar: "علاج الإدمان" } },
  ];

  const genders = [
    { key: "all", name: { en: "All Genders", ar: "الجميع" } },
    { key: "male", name: { en: "Male", ar: "ذكر" } },
    { key: "female", name: { en: "Female", ar: "أنثى" } },
  ];

  const languages = [
    { key: "all", name: { en: "All Languages", ar: "جميع اللغات" } },
    { key: "arabic", name: { en: "Arabic", ar: "العربية" } },
    { key: "english", name: { en: "English", ar: "الإنجليزية" } },
    { key: "french", name: { en: "French", ar: "الفرنسية" } },
  ];

  const availableTags = [
    { key: "anxiety", name: { en: "Anxiety", ar: "القلق" } },
    { key: "depression", name: { en: "Depression", ar: "الاكتئاب" } },
    { key: "couples", name: { en: "Couples", ar: "الأزواج" } },
    { key: "teens", name: { en: "Teens", ar: "المراهقين" } },
    { key: "addiction", name: { en: "Addiction", ar: "الإدمان" } },
    { key: "therapy", name: { en: "Therapy", ar: "العلاج" } }
  ];

  const getText = (textObj: any) => textObj[language] || textObj.en;

  const getFilterCount = (filterType: string, value: string) => {
    return doctors.filter(doctor => {
      switch (filterType) {
        case 'specialty':
          return value === 'all' || doctor.category === value;
        case 'gender':
          return value === 'all' || doctor.gender === value;
        case 'language':
          return value === 'all' || doctor.languages?.includes(value);
        case 'online':
          return doctor.onlineConsultation;
        default:
          return true;
      }
    }).length;
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const removeFilter = (filterType: string) => {
    switch (filterType) {
      case 'specialty':
        setSelectedSpecialty('all');
        break;
      case 'gender':
        setSelectedGender('all');
        break;
      case 'language':
        setSelectedLanguage('all');
        break;
      case 'online':
        setOnlineOnly(false);
        break;
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedSpecialty('all');
    setSelectedGender('all');
    setSelectedLanguage('all');
    setSelectedTags([]);
    setOnlineOnly(false);
  };

  const activeFiltersCount = [
    selectedSpecialty !== 'all',
    selectedGender !== 'all',
    selectedLanguage !== 'all',
    selectedTags.length > 0,
    onlineOnly,
    searchQuery !== ''
  ].filter(Boolean).length;

  return (
    <motion.div 
      className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 -mx-4 px-4 py-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder={language === "ar" ? "ابحث عن طبيب..." : "Search for a doctor..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Filter Toggle Button */}
      <div className="flex justify-center mb-4">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="relative"
        >
          <Filter className="w-4 h-4 mr-2" />
          {language === "ar" ? "الفلاتر" : "Filters"}
          {activeFiltersCount > 0 && (
            <Badge className="ml-2 bg-primary text-primary-foreground">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Active Filters Tags */}
      <AnimatePresence>
        {activeFiltersCount > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2 justify-center mb-4"
          >
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Search className="w-3 h-3" />
                {searchQuery}
                <button onClick={() => setSearchQuery('')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            
            {selectedSpecialty !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {getText(specialties.find(s => s.key === selectedSpecialty)?.name)}
                <button onClick={() => removeFilter('specialty')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            
            {selectedGender !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {getText(genders.find(g => g.key === selectedGender)?.name)}
                <button onClick={() => removeFilter('gender')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            
            {selectedLanguage !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {getText(languages.find(l => l.key === selectedLanguage)?.name)}
                <button onClick={() => removeFilter('language')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            
            {onlineOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                <Video className="w-3 h-3" />
                {language === "ar" ? "أونلاين فقط" : "Online Only"}
                <button onClick={() => removeFilter('online')}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            
            {selectedTags.map(tag => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                #{getText(availableTags.find(t => t.key === tag)?.name)}
                <button onClick={() => toggleTag(tag)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              {language === "ar" ? "مسح الكل" : "Clear All"}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Specialty Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ar" ? "التخصص" : "Specialty"}
                </label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map(specialty => (
                      <SelectItem key={specialty.key} value={specialty.key}>
                        {getText(specialty.name)} ({getFilterCount('specialty', specialty.key)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ar" ? "الجنس" : "Gender"}
                </label>
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map(gender => (
                      <SelectItem key={gender.key} value={gender.key}>
                        {getText(gender.name)} ({getFilterCount('gender', gender.key)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Language Filter */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ar" ? "اللغة" : "Language"}
                </label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map(lang => (
                      <SelectItem key={lang.key} value={lang.key}>
                        {getText(lang.name)} ({getFilterCount('language', lang.key)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Online Only Toggle */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  {language === "ar" ? "الاستشارة الأونلاين" : "Online Consultation"}
                </label>
                <Button
                  variant={onlineOnly ? "default" : "outline"}
                  onClick={() => setOnlineOnly(!onlineOnly)}
                  className="w-full"
                >
                  <Video className="w-4 h-4 mr-2" />
                  {language === "ar" ? "أونلاين فقط" : "Online Only"} 
                  ({getFilterCount('online', 'true')})
                </Button>
              </div>
            </div>

            {/* Tags Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">
                {language === "ar" ? "التخصصات الفرعية" : "Specialization Tags"}
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <motion.button
                    key={tag.key}
                    onClick={() => toggleTag(tag.key)}
                    className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${
                      selectedTags.includes(tag.key)
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'bg-background border border-border hover:bg-muted'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{getText(tag.name)}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DoctorFilters;
