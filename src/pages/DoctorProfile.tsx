
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Clock, MapPin, Phone, Mail, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const DoctorProfile = () => {
  const { doctorSlug } = useParams();

  // Mock doctor data - in a real app, this would come from an API
  const doctorData: { [key: string]: any } = {
    "dr-abdel-rahman-mohsen": {
      name: { en: "Dr. Abdel Rahman Mohsen", ar: "د. عبد الرحمن محسن" },
      specialty: { en: "Psychiatrist", ar: "أخصائي الطب النفسي" },
      title: { en: "M.D., Licensed Psychiatrist", ar: "دكتور في الطب، طبيب نفسي مرخص" },
      image: "/lovable-uploads/56124021-c453-4af0-a73d-55eba7308a31.png",
      experience: { en: "10+ years", ar: "أكثر من 10 سنوات" },
      education: {
        en: [
          "M.D. in Psychiatry - Cairo University",
          "Residency in Psychiatry - Ain Shams University Hospital",
          "Fellowship in Clinical Psychology"
        ],
        ar: [
          "دكتوراه في الطب النفسي - جامعة القاهرة",
          "الإقامة في الطب النفسي - مستشفى جامعة عين شمس",
          "زمالة في علم النفس السريري"
        ]
      },
      licenses: {
        en: [
          "Licensed Psychiatrist - Egypt",
          "Board Certified in Psychiatry",
          "Certified Clinical Therapist"
        ],
        ar: [
          "طبيب نفسي مرخص - مصر",
          "معتمد من مجلس الطب النفسي",
          "معالج نفسي معتمد"
        ]
      },
      bio: {
        en: "Dr. Abdel Rahman Mohsen is an experienced psychiatrist dedicated to providing comprehensive mental health care. With over 10 years of experience, he specializes in treating various psychological conditions using evidence-based approaches and personalized treatment plans.",
        ar: "د. عبد الرحمن محسن طبيب نفسي ذو خبرة مكرس لتقديم رعاية شاملة للصحة النفسية. مع أكثر من 10 سنوات من الخبرة، يتخصص في علاج الحالات النفسية المختلفة باستخدام الأساليب القائمة على الأدلة وخطط العلاج الشخصية."
      },
      expertise: {
        en: ["Depression", "Anxiety Disorders", "Psychological Therapy", "Stress Management", "PTSD", "Bipolar Disorder", "Panic Disorders", "Family Counseling"],
        ar: ["الاكتئاب", "اضطرابات القلق", "العلاج النفسي", "إدارة التوتر", "اضطراب ما بعد الصدمة", "اضطراب ثنائي القطب", "اضطرابات الهلع", "الاستشارة الأسرية"]
      },
      conditions: {
        en: ["Major Depression", "Generalized Anxiety Disorder", "Post-Traumatic Stress Disorder", "Bipolar Disorder", "Panic Disorder", "Social Anxiety", "Adjustment Disorders", "Chronic Stress"],
        ar: ["الاكتئاب الشديد", "اضطراب القلق العام", "اضطراب ما بعد الصدمة", "اضطراب ثنائي القطب", "اضطراب الهلع", "القلق الاجتماعي", "اضطرابات التكيف", "التوتر المزمن"]
      },
      awards: {
        en: ["Excellence in Mental Health Care Award", "Best Psychiatrist Recognition", "Community Service Award", "Patient Care Excellence"],
        ar: ["جائزة التميز في الرعاية النفسية", "تقدير أفضل طبيب نفسي", "جائزة الخدمة المجتمعية", "التميز في رعاية المرضى"]
      },
      availability: {
        days: { en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], ar: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] },
        hours: { en: "9:00 AM - 7:00 PM", ar: "9:00 صباحاً - 7:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-maha-mohsen": {
      name: { en: "Dr. Maha Mohsen", ar: "د. مها محسن" },
      specialty: { en: "Psychiatrist & Addiction Treatment", ar: "أخصائي الطب النفسي وعلاج الإدمان" },
      title: { en: "M.D., Psychiatrist & Addiction Specialist", ar: "دكتورة في الطب، أخصائية الطب النفسي وعلاج الإدمان" },
      image: "/lovable-uploads/cede00fa-ffe6-4d0c-9026-3dbff006bbad.png",
      experience: { en: "12+ years", ar: "أكثر من 12 سنة" },
      education: {
        en: [
          "M.D. in Psychiatry - Alexandria University",
          "Fellowship in Addiction Medicine",
          "Certificate in Cognitive Behavioral Therapy"
        ],
        ar: [
          "دكتوراه في الطب النفسي - جامعة الإسكندرية",
          "زمالة في طب الإدمان",
          "شهادة في العلاج المعرفي السلوكي"
        ]
      },
      licenses: {
        en: [
          "Licensed Psychiatrist - Egypt",
          "Certified Addiction Specialist",
          "Board Certified in Psychiatry"
        ],
        ar: [
          "طبيبة نفسية مرخصة - مصر",
          "أخصائية إدمان معتمدة",
          "معتمدة من مجلس الطب النفسي"
        ]
      },
      bio: {
        en: "Dr. Maha Mohsen is a specialist in psychiatric medicine and addiction treatment with extensive experience in comprehensive mental health care. She focuses on evidence-based treatment approaches for both mental health disorders and substance abuse.",
        ar: "د. مها محسن أخصائية في الطب النفسي وعلاج الإدمان مع خبرة واسعة في الرعاية الشاملة للصحة النفسية. تركز على مناهج العلاج القائمة على الأدلة لكل من اضطرابات الصحة النفسية وتعاطي المواد المخدرة."
      },
      expertise: {
        en: ["Psychiatry", "Addiction Treatment", "Mental Health", "Substance Abuse", "Dual Diagnosis", "Relapse Prevention", "Family Therapy", "Group Therapy"],
        ar: ["الطب النفسي", "علاج الإدمان", "الصحة النفسية", "تعاطي المواد المخدرة", "التشخيص المزدوج", "منع الانتكاس", "العلاج الأسري", "العلاج الجماعي"]
      },
      conditions: {
        en: ["Depression with Substance Use", "Anxiety Disorders", "Alcohol Addiction", "Drug Addiction", "Bipolar Disorder", "PTSD with Addiction", "Dual Diagnosis", "Behavioral Addictions"],
        ar: ["الاكتئاب مع تعاطي المواد", "اضطرابات القلق", "إدمان الكحول", "إدمان المخدرات", "اضطراب ثنائي القطب", "اضطراب ما بعد الصدمة مع الإدمان", "التشخيص المزدوج", "الإدمان السلوكي"]
      },
      awards: {
        en: ["Excellence in Addiction Treatment", "Mental Health Innovation Award", "Community Service Recognition", "Best Practice in Dual Diagnosis"],
        ar: ["التميز في علاج الإدمان", "جائزة الابتكار في الصحة النفسية", "تقدير الخدمة المجتمعية", "أفضل ممارسة في التشخيص المزدوج"]
      },
      availability: {
        days: { en: ["Sunday", "Monday", "Wednesday", "Thursday"], ar: ["الأحد", "الاثنين", "الأربعاء", "الخميس"] },
        hours: { en: "10:00 AM - 6:00 PM", ar: "10:00 صباحاً - 6:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-heba-ahmed-alazab": {
      name: { en: "Dr. Heba Ahmed Al-Azab", ar: "د. هبة أحمد العزب" },
      specialty: { en: "Psychiatrist", ar: "طبيبة نفسية" },
      title: { en: "M.D., Licensed Psychiatrist", ar: "دكتورة في الطب، طبيبة نفسية مرخصة" },
      image: "/lovable-uploads/2f284f11-59ed-4850-9684-375341aae1ba.png",
      experience: { en: "8+ years", ar: "أكثر من 8 سنوات" },
      education: {
        en: [
          "M.D. in Psychiatry - Cairo University",
          "Residency in Psychiatry - Kasr Al-Ainy Hospital",
          "Training in Child and Adolescent Psychiatry"
        ],
        ar: [
          "دكتوراه في الطب النفسي - جامعة القاهرة",
          "الإقامة في الطب النفسي - مستشفى قصر العيني",
          "تدريب في طب نفس الأطفال والمراهقين"
        ]
      },
      licenses: {
        en: [
          "Licensed Psychiatrist - Egypt",
          "Certified in Child Psychiatry",
          "Board Certified in Psychiatry"
        ],
        ar: [
          "طبيبة نفسية مرخصة - مصر",
          "معتمدة في طب نفس الأطفال",
          "معتمدة من مجلس الطب النفسي"
        ]
      },
      bio: {
        en: "Dr. Heba Ahmed Al-Azab is a dedicated psychiatrist specializing in comprehensive mental health treatment and patient care. She has particular expertise in treating anxiety disorders, depression, and providing psychological support.",
        ar: "د. هبة أحمد العزب طبيبة نفسية مكرسة متخصصة في العلاج الشامل للصحة النفسية ورعاية المرضى. لديها خبرة خاصة في علاج اضطرابات القلق والاكتئاب وتقديم الدعم النفسي."
      },
      expertise: {
        en: ["Psychiatry", "Mental Health Treatment", "Patient Care", "Anxiety Disorders", "Depression", "Stress Management", "Psychological Support", "Mood Disorders"],
        ar: ["الطب النفسي", "علاج الصحة النفسية", "رعاية المرضى", "اضطرابات القلق", "الاكتئاب", "إدارة التوتر", "الدعم النفسي", "اضطرابات المزاج"]
      },
      conditions: {
        en: ["Generalized Anxiety Disorder", "Major Depression", "Panic Disorder", "Social Anxiety", "Mood Disorders", "Stress-related Disorders", "Adjustment Disorders", "Sleep Disorders"],
        ar: ["اضطراب القلق العام", "الاكتئاب الشديد", "اضطراب الهلع", "القلق الاجتماعي", "اضطرابات المزاج", "الاضطرابات المرتبطة بالتوتر", "اضطرابات التكيف", "اضطرابات النوم"]
      },
      awards: {
        en: ["Young Psychiatrist Award", "Excellence in Patient Care", "Mental Health Advocacy", "Community Health Service"],
        ar: ["جائزة الطبيب النفسي الشاب", "التميز في رعاية المرضى", "الدفاع عن الصحة النفسية", "خدمة الصحة المجتمعية"]
      },
      availability: {
        days: { en: ["Sunday", "Tuesday", "Wednesday", "Thursday"], ar: ["الأحد", "الثلاثاء", "الأربعاء", "الخميس"] },
        hours: { en: "9:00 AM - 5:00 PM", ar: "9:00 صباحاً - 5:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-nada-alawadi": {
      name: { en: "Dr. Nada Al-Awadi", ar: "د. ندى العوضي" },
      specialty: { en: "Psychiatrist & Psychological Treatment", ar: "طبيبة ومعالجة نفسية" },
      title: { en: "M.D., Psychiatrist & Psychological Therapist", ar: "دكتورة في الطب، طبيبة ومعالجة نفسية" },
      image: "/lovable-uploads/5a3488b9-e38f-44f4-90d7-8dce28f0003a.png",
      experience: { en: "9+ years", ar: "أكثر من 9 سنوات" },
      education: {
        en: [
          "M.D. in Psychiatry - Ain Shams University",
          "Diploma in Psychological Therapy",
          "Certificate in Family Therapy"
        ],
        ar: [
          "دكتوراه في الطب النفسي - جامعة عين شمس",
          "دبلوم في العلاج النفسي",
          "شهادة في العلاج الأسري"
        ]
      },
      licenses: {
        en: [
          "Licensed Psychiatrist - Egypt",
          "Certified Psychological Therapist",
          "Licensed Medical Practitioner"
        ],
        ar: [
          "طبيبة نفسية مرخصة - مصر",
          "معالجة نفسية معتمدة",
          "ممارس طبي مرخص"
        ]
      },
      bio: {
        en: "Dr. Nada Al-Awadi is an expert in psychiatric medicine and psychological treatment with a focus on holistic patient care. She combines medical expertise with therapeutic approaches to provide comprehensive mental health solutions.",
        ar: "د. ندى العوضي خبيرة في الطب النفسي والعلاج النفسي مع التركيز على الرعاية الشاملة للمرضى. تجمع بين الخبرة الطبية والمناهج العلاجية لتقديم حلول شاملة للصحة النفسية."
      },
      expertise: {
        en: ["Psychiatry", "Psychological Treatment", "Therapy", "Holistic Care", "Women's Mental Health", "Postpartum Depression", "Anxiety Management", "Family Counseling"],
        ar: ["الطب النفسي", "العلاج النفسي", "العلاج", "الرعاية الشاملة", "الصحة النفسية للمرأة", "اكتئاب ما بعد الولادة", "إدارة القلق", "الاستشارة الأسرية"]
      },
      conditions: {
        en: ["Women's Mental Health Issues", "Postpartum Depression", "Anxiety Disorders", "Depression", "Relationship Issues", "Family Conflicts", "Stress Management", "Mood Disorders"],
        ar: ["قضايا الصحة النفسية للمرأة", "اكتئاب ما بعد الولادة", "اضطرابات القلق", "الاكتئاب", "مشاكل العلاقات", "الصراعات الأسرية", "إدارة التوتر", "اضطرابات المزاج"]
      },
      awards: {
        en: ["Women's Health Champion", "Excellence in Psychological Care", "Family Therapy Recognition", "Mental Health Advocacy Award"],
        ar: ["بطلة صحة المرأة", "التميز في الرعاية النفسية", "تقدير العلاج الأسري", "جائزة الدفاع عن الصحة النفسية"]
      },
      availability: {
        days: { en: ["Sunday", "Monday", "Tuesday", "Thursday"], ar: ["الأحد", "الاثنين", "الثلاثاء", "الخميس"] },
        hours: { en: "10:00 AM - 7:00 PM", ar: "10:00 صباحاً - 7:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "prof-bahaa-mohammed-sharaf-eldin": {
      name: { en: "Prof. Bahaa Mohammed Sharaf El-Din", ar: "أ. بهاء محمد شرف الدين" },
      specialty: { en: "Clinical Psychologist", ar: "أخصائي نفسي إكلينيكي" },
      title: { en: "Ph.D., Professor of Clinical Psychology", ar: "دكتوراه، أستاذ علم النفس الإكلينيكي" },
      image: "/lovable-uploads/311b6663-caea-4df5-be65-6d3bbf5e434d.png",
      experience: { en: "15+ years", ar: "أكثر من 15 سنة" },
      education: {
        en: [
          "Ph.D. in Clinical Psychology - Cairo University",
          "Master's in Applied Psychology",
          "Certification in Cognitive Behavioral Therapy"
        ],
        ar: [
          "دكتوراه في علم النفس الإكلينيكي - جامعة القاهرة",
          "ماجستير في علم النفس التطبيقي",
          "شهادة في العلاج المعرفي السلوكي"
        ]
      },
      licenses: {
        en: [
          "Licensed Clinical Psychologist - Egypt",
          "University Professor",
          "Certified CBT Therapist"
        ],
        ar: [
          "أخصائي نفسي إكلينيكي مرخص - مصر",
          "أستاذ جامعي",
          "معالج معرفي سلوكي معتمد"
        ]
      },
      bio: {
        en: "Professor Bahaa Mohammed Sharaf El-Din is a distinguished clinical psychologist with extensive experience in psychological assessment and therapy. As an academic and practitioner, he brings both theoretical knowledge and practical expertise to patient care.",
        ar: "الأستاذ بهاء محمد شرف الدين أخصائي نفسي إكلينيكي متميز مع خبرة واسعة في التقييم النفسي والعلاج. كأكاديمي وممارس، يجلب المعرفة النظرية والخبرة العملية لرعاية المرضى."
      },
      expertise: {
        en: ["Clinical Psychology", "Psychological Assessment", "Therapy", "Research", "Academic Psychology", "Cognitive Behavioral Therapy", "Personality Disorders", "Psychological Testing"],
        ar: ["علم النفس الإكلينيكي", "التقييم النفسي", "العلاج", "البحث", "علم النفس الأكاديمي", "العلاج المعرفي السلوكي", "اضطرابات الشخصية", "الاختبارات النفسية"]
      },
      conditions: {
        en: ["Personality Disorders", "Anxiety Disorders", "Depression", "Psychological Trauma", "Behavioral Issues", "Learning Difficulties", "Psychological Assessment Needs", "Academic Stress"],
        ar: ["اضطرابات الشخصية", "اضطرابات القلق", "الاكتئاب", "الصدمة النفسية", "المشاكل السلوكية", "صعوبات التعلم", "احتياجات التقييم النفسي", "التوتر الأكاديمي"]
      },
      awards: {
        en: ["Academic Excellence Award", "Research in Clinical Psychology", "Outstanding Professor Award", "Psychological Assessment Innovation"],
        ar: ["جائزة التميز الأكاديمي", "البحث في علم النفس الإكلينيكي", "جائزة الأستاذ المتميز", "ابتكار التقييم النفسي"]
      },
      availability: {
        days: { en: ["Monday", "Tuesday", "Wednesday", "Thursday"], ar: ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] },
        hours: { en: "9:00 AM - 4:00 PM", ar: "9:00 صباحاً - 4:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-fatima-abdeldin": {
      name: { en: "Dr. Fatima Abdeldin", ar: "د. فاطمة عابدين" },
      specialty: { en: "Psychiatrist & Psychological Treatment", ar: "طبيبة ومعالجة نفسية" },
      title: { en: "M.D., Psychiatrist & Psychological Therapist", ar: "دكتورة في الطب، طبيبة ومعالجة نفسية" },
      image: "/lovable-uploads/c75597ef-239d-4c00-b646-6e4c3a125dd8.png",
      experience: { en: "11+ years", ar: "أكثر من 11 سنة" },
      education: {
        en: [
          "M.D. in Psychiatry - Al-Azhar University",
          "Fellowship in Psychological Therapy",
          "Certificate in Mindfulness-Based Therapy"
        ],
        ar: [
          "دكتوراه في الطب النفسي - جامعة الأزهر",
          "زمالة في العلاج النفسي",
          "شهادة في العلاج القائم على اليقظة"
        ]
      },
      licenses: {
        en: [
          "Licensed Psychiatrist - Egypt",
          "Certified Psychological Therapist",
          "Mindfulness Therapy Certified"
        ],
        ar: [
          "طبيبة نفسية مرخصة - مصر",
          "معالجة نفسية معتمدة",
          "معتمدة في علاج اليقظة"
        ]
      },
      bio: {
        en: "Dr. Fatima Abdeldin is a specialist in psychiatric medicine and psychological treatment with a compassionate approach to patient care. She integrates traditional psychiatric methods with modern therapeutic techniques for comprehensive treatment.",
        ar: "د. فاطمة عابدين متخصصة في الطب النفسي والعلاج النفسي مع نهج متفهم في رعاية المرضى. تدمج الطرق النفسية التقليدية مع التقنيات العلاجية الحديثة للعلاج الشامل."
      },
      expertise: {
        en: ["Psychiatry", "Psychological Treatment", "Mental Health", "Mindfulness Therapy", "Stress Management", "Depression Treatment", "Anxiety Management", "Holistic Therapy"],
        ar: ["الطب النفسي", "العلاج النفسي", "الصحة النفسية", "علاج اليقظة", "إدارة التوتر", "علاج الاكتئاب", "إدارة القلق", "العلاج الشامل"]
      },
      conditions: {
        en: ["Depression", "Anxiety Disorders", "Stress-related Disorders", "Panic Disorder", "Mood Disorders", "Sleep Disorders", "Chronic Stress", "Emotional Regulation Issues"],
        ar: ["الاكتئاب", "اضطرابات القلق", "الاضطرابات المرتبطة بالتوتر", "اضطراب الهلع", "اضطرابات المزاج", "اضطرابات النوم", "التوتر المزمن", "مشاكل تنظيم المشاعر"]
      },
      awards: {
        en: ["Compassionate Care Award", "Innovation in Mental Health", "Patient Satisfaction Excellence", "Mindfulness Therapy Recognition"],
        ar: ["جائزة الرعاية المتفهمة", "الابتكار في الصحة النفسية", "التميز في رضا المرضى", "تقدير علاج اليقظة"]
      },
      availability: {
        days: { en: ["Sunday", "Monday", "Wednesday", "Friday"], ar: ["الأحد", "الاثنين", "الأربعاء", "الجمعة"] },
        hours: { en: "10:00 AM - 6:00 PM", ar: "10:00 صباحاً - 6:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    }
  };

  const doctor = doctorData[doctorSlug || ""] || doctorData["dr-abdel-rahman-mohsen"];

  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? (localStorage.getItem("language") || "en") : "en";
  const isRTL = language === "ar";

  const getText = (textObj: any) => {
    return textObj[language] || textObj.en;
  };

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/doctors">
            <Button variant="ghost" className="group">
              <ArrowLeft className={`h-4 w-4 ${isRTL ? 'ml-2 group-hover:translate-x-1' : 'mr-2 group-hover:-translate-x-1'} transition-transform`} />
              {language === "ar" ? "العودة للأطباء" : "Back to Doctors"}
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Doctor Card */}
            <Card className="overflow-hidden border-border/50">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={getText(doctor.name)}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-2xl font-semibold text-white mb-1">
                    {getText(doctor.name)}
                  </h1>
                  <p className="text-white/90">{getText(doctor.title)}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Badge className="gradient-calm text-white">
                      {getText(doctor.specialty)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{getText(doctor.experience)} {language === "ar" ? "خبرة" : "Experience"}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{getText(doctor.availability.location)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">{language === "ar" ? "التوفر" : "Availability"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getText(doctor.availability.days).join(", ")}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {getText(doctor.availability.hours)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact & Booking */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">{language === "ar" ? "احجز موعد" : "Book an Appointment"}</h3>
                <div className="space-y-3">
                  <Link to="/booking" state={{ selectedDoctor: getText(doctor.name) }}>
                    <Button className="w-full gradient-calm text-white hover:opacity-90">
                      <Calendar className="h-4 w-4 mr-2" />
                      {language === "ar" ? "احجز عبر الإنترنت" : "Schedule Online"}
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    <Phone className="h-4 w-4 mr-2" />
                    {language === "ar" ? "اتصل للحجز" : "Call to Book"}
                  </Button>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    <Mail className="h-4 w-4 mr-2" />
                    {language === "ar" ? "أرسل رسالة" : "Send Message"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div>
              <h2 className="text-3xl font-light mb-6">
                {language === "ar" ? `عن ${getText(doctor.name).split(" ")[1]}` : `About Dr. ${getText(doctor.name).split(" ")[1]}`}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {getText(doctor.bio)}
                </p>
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="text-2xl font-light mb-6">{language === "ar" ? "مجالات الخبرة" : "Areas of Expertise"}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {getText(doctor.expertise).map((skill: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conditions Treated */}
            <div>
              <h3 className="text-2xl font-light mb-6">{language === "ar" ? "الحالات المعالجة" : "Conditions Treated"}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {getText(doctor.conditions).map((condition: string, index: number) => (
                  <Badge key={index} variant="outline" className="justify-start p-3 text-sm">
                    {condition}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education & Licenses */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">{language === "ar" ? "التعليم" : "Education"}</h3>
                <div className="space-y-3">
                  {getText(doctor.education).map((edu: string, index: number) => (
                    <div key={index} className="p-3 bg-card border border-border/50 rounded-lg">
                      <p className="text-sm text-foreground">{edu}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-4">{language === "ar" ? "التراخيص والشهادات" : "Licenses & Certifications"}</h3>
                <div className="space-y-3">
                  {getText(doctor.licenses).map((license: string, index: number) => (
                    <div key={index} className="p-3 bg-card border border-border/50 rounded-lg">
                      <p className="text-sm text-foreground">{license}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <h3 className="text-2xl font-light mb-6">{language === "ar" ? "الجوائز والتقدير" : "Awards & Recognition"}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {getText(doctor.awards).map((award: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                    <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-light mb-4">
                {language === "ar" ? "مستعد لبدء رحلتك؟" : "Ready to start your journey?"}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === "ar" 
                  ? `اتخذ الخطوة الأولى نحو صحة نفسية أفضل مع ${getText(doctor.name).split(" ")[1]}.`
                  : `Take the first step towards better mental health with Dr. ${getText(doctor.name).split(" ")[1]}.`
                }
              </p>
              <Link to="/booking" state={{ selectedDoctor: getText(doctor.name) }}>
                <Button size="lg" className="gradient-calm text-white hover:opacity-90">
                  <Calendar className="h-5 w-5 mr-2" />
                  {language === "ar" ? "احجز جلستك اليوم" : "Book Your Session Today"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
