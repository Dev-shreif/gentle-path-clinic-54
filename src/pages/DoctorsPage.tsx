import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import DoctorFilters from "@/components/doctors/DoctorFilters";
import DoctorCard from "@/components/doctors/DoctorCard";

const DoctorsPage = () => {
  // Get language from localStorage or default to English
  const language = typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en";
  const isRTL = language === "ar";

  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [onlineOnly, setOnlineOnly] = useState(false);

  // Pagination states
  const [visibleSections, setVisibleSections] = useState({
    founders: 4,
    male: 6,
    female: 6,
    topRated: 4,
    availableNow: 4
  });

  // Doctors data with founders first
  const doctors = [
    // المؤسسون - في المقدمة
    {
      id: 1,
      name: {
        en: "Dr. Abdel Rahman Mohsen",
        ar: "د. عبد الرحمن محسن"
      },
      slug: "dr-abdel-rahman-mohsen",
      specialty: {
        en: "Psychiatrist & Founder",
        ar: "أخصائي الطب النفسي والمؤسس"
      },
      image: "/lovable-uploads/56124021-c453-4af0-a73d-55eba7308a31.png",
      description: {
        en: "Founder and experienced psychiatrist specializing in mental health treatment and psychological therapy with a focus on comprehensive patient care.",
        ar: "مؤسس وطبيب نفسي ذو خبرة متخصص في علاج الصحة النفسية والعلاج النفسي مع التركيز على الرعاية الشاملة للمرضى."
      },
      expertise: {
        en: ["Depression", "Anxiety Disorders", "Psychological Therapy"],
        ar: ["الاكتئاب", "اضطرابات القلق", "العلاج النفسي"]
      },
      experience: {
        en: "15+ years",
        ar: "أكثر من 15 سنة"
      },
      rating: 4.9,
      availableNow: true,
      category: "psychiatrist",
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["anxiety", "depression", "therapy", "founder"],
      nextAvailable: "Today 2:00 PM",
      onlineConsultation: true,
      size: "large",
      isFounder: true
    },
    {
      id: 2,
      name: {
        en: "Dr. Maha Mohsen",
        ar: "د. مها محسن"
      },
      slug: "dr-maha-mohsen",
      specialty: {
        en: "Psychiatrist & Addiction Treatment - Co-Founder",
        ar: "أخصائية الطب النفسي وعلاج الإدمان - عضو مؤسس"
      },
      image: "/lovable-uploads/cede00fa-ffe6-4d0c-9026-3dbff006bbad.png",
      description: {
        en: "Co-founder with expertise in psychiatry and addiction treatment for adolescents and young women. Former director of adolescent unit at Helwan Mental Health Hospital.",
        ar: "عضو مؤسس مع خبرة في الطب النفسي وعلاج الإدمان للمراهقين والفتيات. مديرة سابقة لوحدة المراهقين بمستشفى حلوان للصحة النفسية."
      },
      expertise: {
        en: ["Adolescent Psychiatry", "Addiction Treatment", "CBT", "DBT", "Group Therapy"],
        ar: ["طب نفس المراهقين", "علاج الإدمان", "العلاج المعرفي السلوكي", "العلاج الجدلي السلوكي", "العلاج الجماعي"]
      },
      experience: {
        en: "14+ years",
        ar: "أكثر من 14 سنة"
      },
      rating: 4.8,
      availableNow: false,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["addiction", "teens", "therapy", "founder"],
      nextAvailable: "Tomorrow 10:00 AM",
      onlineConsultation: true,
      size: "large",
      isFounder: true
    },
    {
      id: 4,
      name: {
        en: "Dr. Nada Al-Awadi",
        ar: "د. ندى العوضي"
      },
      slug: "dr-nada-alawadi",
      specialty: {
        en: "Psychiatrist & Psychological Treatment - Co-Founder",
        ar: "أخصائي الطب النفسي ومعالجة نفسية - عضو مؤسس"
      },
      image: "/lovable-uploads/5a3488b9-e38f-44f4-90d7-8dce28f0003a.png",
      description: {
        en: "Co-founder with Egyptian Fellowship in Psychiatry and Addiction. Specialized in trauma therapy with EMDR, Psychodrama, and IFS training. Mental health consultant for UNHCR refugees.",
        ar: "عضو مؤسس حاصل على الزمالة المصرية في الطب النفسي وعلاج الإدمان. متخصص في علاج الصدمات بـ EMDR والسيكودراما و IFS. مستشار الصحة النفسية للاجئين مع المفوضية السامية."
      },
      expertise: {
        en: ["EMDR Trauma Therapy", "Psychodrama", "IFS", "Refugee Mental Health", "Dynamic Therapy"],
        ar: ["علاج الصدمات بـ EMDR", "السيكودراما", "نظام الأجزاء الداخلية", "الصحة النفسية للاجئين", "العلاج الديناميكي"]
      },
      experience: {
        en: "12+ years",
        ar: "أكثر من 12 سنة"
      },
      rating: 4.9,
      availableNow: true,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["trauma", "refugees", "therapy", "founder"],
      nextAvailable: "Today 1:00 PM",
      onlineConsultation: true,
      size: "large",
      isFounder: true
    },
    {
      id: 3,
      name: {
        en: "Dr. Heba Ahmed Al-Azab",
        ar: "د. هبة أحمد العزب"
      },
      slug: "dr-heba-ahmed-alazab",
      specialty: {
        en: "Child & Adolescent Psychiatrist - Co-Founder",
        ar: "طبيبة نفسية للأطفال والمراهقين - عضو مؤسس"
      },
      image: "/lovable-uploads/2f284f11-59ed-4850-9684-375341aae1ba.png",
      description: {
        en: "Co-founder and child psychiatrist with over 6 years managing pediatric units at Helwan Hospital. Developer of 'Heroes Camp' program implemented nationwide. Specialized in EMDR and family therapy.",
        ar: "عضو مؤسس وطبيبة نفسية للأطفال مع أكثر من 6 سنوات في إدارة وحدة الأطفال بمستشفى حلوان. مطورة برنامج 'مخيم الأبطال' المنفذ على مستوى الجمهورية. متخصصة في EMDR والعلاج الأسري."
      },
      expertise: {
        en: ["Child & Adolescent Psychiatry", "EMDR", "Family Therapy", "ADHD", "Animal-Assisted Therapy"],
        ar: ["طب نفس الأطفال والمراهقين", "علاج الصدمات EMDR", "العلاج الأسري", "فرط الحركة وتشتت الانتباه", "العلاج بمساعدة الحيوانات"]
      },
      experience: {
        en: "10+ years",
        ar: "أكثر من 10 سنوات"
      },
      rating: 4.7,
      availableNow: true,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic"],
      tags: ["children", "teens", "therapy", "founder"],
      nextAvailable: "Today 4:30 PM",
      onlineConsultation: false,
      size: "large",
      isFounder: true
    },
    
    // باقي الأطباء
    {
      id: 5,
      name: {
        en: "Prof. Bahaa Mohammed Sharaf El-Din",
        ar: "أ. بهاء محمد شرف الدين"
      },
      slug: "prof-bahaa-mohammed-sharaf-eldin",
      specialty: {
        en: "Clinical Psychology & Psychotherapy",
        ar: "أخصائي علم النفس الإكلينيكي ومعالج نفسي"
      },
      image: "/lovable-uploads/311b6663-caea-4df5-be65-6d3bbf5e434d.png",
      description: {
        en: "Clinical psychologist and director of psychological services at Helwan Hospital. Specialized in trauma therapy, addiction treatment, and child protection. Author of 'Why Me' book on child sexual abuse protection.",
        ar: "أخصائي علم النفس الإكلينيكي ومدير قسم الخدمة النفسية بمستشفى حلوان. متخصص في علاج الصدمات والإدمان وحماية الأطفال. مؤلف كتاب 'اشمعني أنا' لحماية الأطفال من الإساءة الجنسية."
      },
      expertise: {
        en: ["Trauma Therapy", "Addiction Treatment", "Child Protection", "Art Therapy", "CBT", "DBT", "Psychodrama"],
        ar: ["علاج الصدمات", "علاج الإدمان", "حماية الأطفال", "العلاج بالفن", "العلاج المعرفي السلوكي", "العلاج الجدلي السلوكي", "السيكودراما"]
      },
      experience: {
        en: "20+ years",
        ar: "أكثر من 20 سنة"
      },
      rating: 5.0,
      availableNow: false,
      category: "psychologist",
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["trauma", "addiction", "children"],
      nextAvailable: "Monday 9:00 AM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 8,
      name: {
        en: "Dr. Esraa Abdul Latif",
        ar: "د. إسراء عبد اللطيف"
      },
      slug: "dr-esraa-abdul-latif",
      specialty: {
        en: "Psychiatrist & Addiction Treatment",
        ar: "طبيب نفسي وعلاج الإدمان بالزمالة المصرية"
      },
      image: "/lovable-uploads/afbd437d-18ad-4d76-b691-8064750c08e9.png",
      description: {
        en: "Psychiatrist certified by Egyptian Fellowship working since 2017 at El-Khanka Mental Health Hospital. Specialized in trauma therapy, addiction recovery, and group therapy with extensive training in DBT, ACT, EMDR, and IFS.",
        ar: "طبيبة نفسية حاصلة على الزمالة المصرية تعمل منذ 2017 بمستشفى الخانكة للصحة النفسية. متخصصة في علاج الصدمات والتعافي من الإدمان والعلاج الجماعي مع تدريبات موسعة في DBT و ACT و EMDR و IFS."
      },
      expertise: {
        en: ["Trauma Therapy", "Addiction Recovery", "Group Therapy", "Personality Disorders", "DBT", "ACT", "EMDR", "IFS"],
        ar: ["علاج الصدمات", "التعافي من الإدمان", "العلاج الجماعي", "اضطرابات الشخصية", "العلاج الجدلي السلوكي", "علاج القبول والالتزام", "EMDR", "نظام العائلة الداخلية"]
      },
      experience: {
        en: "9+ years",
        ar: "أكثر من 9 سنوات"
      },
      rating: 4.7,
      availableNow: false,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["addiction", "trauma", "therapy"],
      nextAvailable: "Tomorrow 11:00 AM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 9,
      name: {
        en: "Dr. Nabil Ali Nasr",
        ar: "د. نبيل علي نصر"
      },
      slug: "dr-nabil-ali-nasr",
      specialty: {
        en: "Group Psychotherapy & Psychodrama",
        ar: "أخصائي العلاج النفسي الجماعي والسيكودراما"
      },
      image: "/lovable-uploads/018e99c6-68ad-48b7-9937-83e492f96b14.png",
      description: {
        en: "Founder & Director of 'Kayan' Clinic in Alexandria. Experienced group psychotherapist and psychodrama practitioner since 2012. Former psychotherapist at AUC Student Support Center with extensive work with Syrian refugees.",
        ar: "مؤسس ومدير عيادة 'كيان' في الإسكندرية. معالج نفسي جماعي وممارس سيكودراما ذو خبرة منذ 2012. معالج نفسي سابق بمركز دعم الطلاب بالجامعة الأمريكية مع عمل موسع مع اللاجئين السوريين."
      },
      expertise: {
        en: ["Group Psychotherapy", "Psychodrama", "Adolescent Mental Health", "PTSD & Trauma Recovery", "Art Therapy", "IFS"],
        ar: ["العلاج النفسي الجماعي", "السيكودراما", "الصحة النفسية للمراهقين", "علاج الصدمات واضطراب ما بعد الصدمة", "العلاج بالفن", "نظام العائلة الداخلية"]
      },
      experience: {
        en: "12+ years",
        ar: "أكثر من 12 سنة"
      },
      rating: 4.8,
      availableNow: true,
      category: "psychiatrist",
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["teens", "trauma", "therapy"],
      nextAvailable: "Today 5:00 PM",
      onlineConsultation: false,
      isFounder: false
    },
    {
      id: 10,
      name: {
        en: "Dr. Peter Nabil",
        ar: "د. بيتر نبيل"
      },
      slug: "dr-peter-nabil",
      specialty: {
        en: "Psychiatric Consultant & Addiction Treatment",
        ar: "استشاري الطب النفسي وعلاج الإدمان"
      },
      image: "/lovable-uploads/eb6484dd-175a-40d4-a7a2-670eb167cab4.png",
      description: {
        en: "Consultant psychiatrist with extensive experience since 2012. Former Deputy Director of Helwan Addiction Center and Women's Unit at Abbasiya Mental Hospital. Specialized in adolescent psychiatry with international certifications.",
        ar: "استشاري طب نفسي مع خبرة واسعة منذ 2012. نائب مدير سابق لمركز حلوان للإدمان ووحدة النساء بمستشفى العباسية. متخصص في طب نفس المراهقين مع شهادات دولية."
      },
      expertise: {
        en: ["Addiction Treatment", "Adolescent Psychiatry", "Trauma & PTSD", "DBT & EMDR Therapy", "Women's Mental Health"],
        ar: ["علاج الإدمان", "طب نفس المراهقين", "الصدمات واضطراب ما بعد الصدمة", "العلاج الجدلي السلوكي و EMDR", "الصحة النفسية للمرأة"]
      },
      experience: {
        en: "16+ years",
        ar: "أكثر من 16 سنة"
      },
      rating: 4.9,
      availableNow: false,
      category: "psychiatrist",
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["addiction", "teens", "therapy"],
      nextAvailable: "Monday 2:00 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 11,
      name: {
        en: "Dr. Amira Ayed Hashem",
        ar: "د. أميرة عياد هاشم"
      },
      slug: "dr-amira-ayed-hashem",
      specialty: {
        en: "Speech Therapy Specialist",
        ar: "أخصائية أمراض التخاطب"
      },
      image: "/lovable-uploads/b1aa3700-f12e-4ad8-807e-9c0024774168.png",
      description: {
        en: "Speech therapy specialist with clinical experience since 2015 at Ain Shams University hospitals. Specialized in speech delay treatment for children with autism and ADHD, voice disorders, and post-stroke rehabilitation.",
        ar: "أخصائية أمراض التخاطب مع خبرة سريرية منذ 2015 بمستشفيات جامعة عين شمس. متخصصة في علاج تأخر الكلام للأطفال المصابين بالتوحد وفرط الحركة واضطرابات الصوت وتأهيل ما بعد الجلطات."
      },
      expertise: {
        en: ["Speech Delay Treatment", "Autism & ADHD", "Voice Disorders", "Stuttering Treatment", "Post-Stroke Rehabilitation", "Cochlear Implant Training"],
        ar: ["علاج تأخر الكلام", "التوحد وفرط الحركة", "اضطرابات الصوت", "علاج التلعثم", "تأهيل ما بعد الجلطات", "تدريب زارعي القوقعة"]
      },
      experience: {
        en: "9+ years",
        ar: "أكثر من 9 سنوات"
      },
      rating: 4.5,
      availableNow: true,
      category: "speech_therapist",
      gender: "female",
      languages: ["Arabic"],
      tags: ["children", "autism", "speech"],
      nextAvailable: "Today 4:00 PM",
      onlineConsultation: false,
      isFounder: false
    },
    {
      id: 12,
      name: {
        en: "Dr. Menna Raafat",
        ar: "د. منة رأفت"
      },
      slug: "dr-menna-raafat",
      specialty: {
        en: "Physician & Psychological Treatment",
        ar: "طبيبة ومعالجة نفسية"
      },
      image: "/lovable-uploads/1a654861-711e-493c-98eb-ad59c14480ea.png",
      description: {
        en: "Physician and psychotherapist specializing in adolescent psychiatry (12-18 years). Resident at Abbasiya Mental Health Hospital since 2020, training in Egyptian Fellowship. Experienced in family, group, and cognitive behavioral therapy.",
        ar: "طبيبة ومعالجة نفسية متخصصة في الطب النفسي للمراهقين (12-18 سنة). طبيب مقيم بمستشفى العباسية للصحة النفسية منذ 2020، في تدريب الزمالة المصرية. خبرة في العلاج الأسري والجماعي والمعرفي السلوكي."
      },
      expertise: {
        en: ["Adolescent Psychiatry", "Schizophrenia", "Bipolar Disorder", "Depression", "Family Therapy", "Group Therapy", "CBT", "DBT Training"],
        ar: ["طب نفس المراهقين", "الفصام", "ثنائي القطب", "الاكتئاب", "العلاج الأسري", "العلاج الجماعي", "العلاج المعرفي السلوكي", "تدريب العلاج الجدلي السلوكي"]
      },
      experience: {
        en: "5+ years",
        ar: "أكثر من 5 سنوات"
      },
      rating: 4.4,
      availableNow: false,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["teens", "depression"],
      nextAvailable: "Tomorrow 3:00 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 13,
      name: {
        en: "Dr. Asmaa Saeed",
        ar: "د. أسماء سعيد"
      },
      slug: "dr-asmaa-saeed",
      specialty: {
        en: "Psychiatrist & Addiction Treatment",
        ar: "أخصائية الطب النفسي وعلاج الإدمان"
      },
      image: "/lovable-uploads/220aca75-8577-44e0-bcca-ea15e8b64b21.png",
      description: {
        en: "Psychiatrist with Egyptian Fellowship and former director of child psychiatry unit at Helwan Hospital. Provided psychological support during COVID-19 via hotline. Specialized in integrating pharmacological and psychological treatment.",
        ar: "أخصائية طب نفسي حاصلة على الزمالة المصرية ومديرة سابقة لوحدة طب نفس الأطفال بمستشفى حلوان. قدمت دعماً نفسياً خلال كوفيد-19 عبر الخط الساخن. متخصصة في التكامل بين العلاج الدوائي والنفسي."
      },
      expertise: {
        en: ["Child Psychiatry", "CBT & DBT", "Family Support", "Adolescent Therapy", "Sexual Medicine", "Nonviolent Communication"],
        ar: ["طب نفس الأطفال", "العلاج المعرفي والجدلي السلوكي", "تدعيم الأسرة", "العلاج النفسي للمراهقين", "الطب الجنسي", "التواصل اللاعنفي"]
      },
      experience: {
        en: "8+ years",
        ar: "أكثر من 8 سنوات"
      },
      rating: 4.6,
      availableNow: true,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic"],
      tags: ["children", "therapy"],
      nextAvailable: "Today 2:30 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 14,
      name: {
        en: "Dr. Dalia Al-Laithi",
        ar: "د. داليا حسين الليثي"
      },
      slug: "dr-dalia-allaithi",
      specialty: {
        en: "Child, Adolescent & Adult Psychiatrist",
        ar: "أخصائي الطب النفسي للأطفال والمراهقين والبالغين"
      },
      image: "/lovable-uploads/228fee0a-017e-489c-8d64-3965417d0d9b.png",
      description: {
        en: "Psychiatrist with extensive experience at Helwan Mental Health Hospital (2014-2021). Currently working at Wahah Clinic specializing in trauma therapy for children and adolescents. Former chief of psychiatry at Manshiet El-Bakri Hospital.",
        ar: "طبيبة نفسية مع خبرة واسعة في مستشفى حلوان للصحة النفسية (2014-2021). تعمل حالياً في عيادة واحة متخصصة في علاج الصدمات للأطفال والمراهقين. رئيس سابق لقسم الطب النفسي بمستشفى منشية البكري."
      },
      expertise: {
        en: ["Child & Adolescent Psychiatry", "Trauma Therapy", "Family Therapy", "CBT", "OCD", "Anxiety", "Depression"],
        ar: ["طب نفس الأطفال والمراهقين", "علاج الصدمات", "العلاج الأسري", "العلاج المعرفي السلوكي", "الوسواس القهري", "القلق", "الاكتئاب"]
      },
      experience: {
        en: "10+ years",
        ar: "أكثر من 10 سنوات"
      },
      rating: 4.5,
      availableNow: false,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["children", "teens", "therapy"],
      nextAvailable: "Tomorrow 1:00 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 6,
      name: {
        en: "Dr. Fatima Abdeldin",
        ar: "د. فاطمة عابدين"
      },
      slug: "dr-fatima-abdeldin",
      specialty: {
        en: "Physician & Psychological Treatment",
        ar: "طبيبة ومعالجة نفسية"
      },
      image: "/lovable-uploads/c75597ef-239d-4c00-b646-6e4c3a125dd8.png",
      description: {
        en: "Physician and psychotherapist with experience at Helwan Hospital, Doctors Without Borders, Caritas, and Doctors of the World. Specialized in treating depression, anxiety, OCD, schizophrenia, and trauma with training in multiple therapeutic approaches.",
        ar: "طبيبة ومعالجة نفسية مع خبرة في مستشفى حلوان وأطباء بلا حدود وكاريتاس وأطباء العالم. متخصصة في علاج الاكتئاب والقلق والوسواس والفصام والصدمات مع تدريبات في عدة مناهج علاجية."
      },
      expertise: {
        en: ["Dynamic Therapy", "CBT & DBT", "Internal Family Systems", "Depression", "Anxiety", "OCD", "Schizophrenia", "Trauma", "Refugee Support"],
        ar: ["العلاج الديناميكي", "العلاج المعرفي والجدلي السلوكي", "نظام العائلة الداخلية", "الاكتئاب", "القلق", "الوسواس القهري", "الفصام", "الصدمات", "دعم اللاجئين"]
      },
      experience: {
        en: "11+ years",
        ar: "أكثر من 11 سنة"
      },
      rating: 4.8,
      availableNow: true,
      category: "psychologist",
      gender: "female",
      languages: ["Arabic", "English", "French"],
      tags: ["depression", "trauma", "refugees"],
      nextAvailable: "Today 6:00 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 7,
      name: {
        en: "Dr. Heba Mohamed",
        ar: "د. هبة الله محمد أحمد علي"
      },
      slug: "dr-heba-mohamed",
      specialty: {
        en: "Psychiatrist",
        ar: "أخصائي الطب النفسي"
      },
      image: "/lovable-uploads/c2e8c79b-fd10-4434-a3eb-19f4871f2a77.png",
      description: {
        en: "Psychiatrist practicing since 2011 with experience at Helwan Mental Health Hospital and Shubra General Hospital. Supervisor at Wahah Clinic for adult trauma therapy and mental health hotline. Specialized in EMDR and trauma treatment.",
        ar: "طبيبة نفسية تمارس منذ 2011 مع خبرة في مستشفى حلوان للصحة النفسية ومستشفى شبرا العام. مشرفة بعيادة واحة لعلاج صدمات البالغين والخط الساخن للصحة النفسية. متخصصة في EMDR وعلاج الصدمات."
      },
      expertise: {
        en: ["CBT", "DBT", "EMDR Trauma Therapy", "Abuse Treatment", "Art Therapy", "Adult Psychiatry"],
        ar: ["العلاج المعرفي السلوكي", "العلاج الجدلي السلوكي", "علاج الصدمات EMDR", "علاج الإساءات", "العلاج بالفن", "الطب النفسي للبالغين"]
      },
      experience: {
        en: "13+ years",
        ar: "أكثر من 13 سنة"
      },
      rating: 4.6,
      availableNow: true,
      category: "psychiatrist",
      gender: "female",
      languages: ["Arabic", "English"],
      tags: ["trauma", "therapy"],
      nextAvailable: "Today 3:00 PM",
      onlineConsultation: true,
      isFounder: false
    },
    {
      id: 15,
      name: {
        en: "Dr. Ahmed Hesham",
        ar: "د. أحمد هشام"
      },
      slug: "dr-ahmed-hesham",
      specialty: {
        en: "Psychiatrist & Addiction Treatment",
        ar: "طبيب نفسي وعلاج الإدمان"
      },
      image: "/lovable-uploads/018e99c6-68ad-48b7-9937-83e492f96b14.png",
      description: {
        en: "Psychiatrist with honors degree (2019) enrolled in Egyptian Fellowship since 2021. Worked at major institutions including Helwan Hospital, Al-Mashfa, Wahah Clinic, and Maki Center. Participated in WHO national research (2023).",
        ar: "طبيب نفسي حاصل على درجة امتياز مع مرتبة الشرف (2019) والتحق بالزمالة المصرية منذ 2021. عمل في مؤسسات كبرى منها مستشفى حلوان والمشفى وعيادة واحة ومركز مكي. شارك في البحث القومي مع منظمة الصحة العالمية (2023)."
      },
      expertise: {
        en: ["CBT", "Suicide & Delusion Treatment", "Group & DBT", "Trauma-Focused Therapy", "Pregnancy & Elderly Support"],
        ar: ["العلاج المعرفي السلوكي", "علاج الأفكار الانتحارية والضلالات", "العلاج الجماعي والجدلي السلوكي", "العلاج المرتكز على الصدمات", "دعم مرضى الحمل وكبار السن"]
      },
      experience: {
        en: "5+ years",
        ar: "أكثر من 5 سنوات"
      },
      rating: 4.4,
      availableNow: true,
      category: "psychiatrist",
      gender: "male",
      languages: ["Arabic", "English"],
      tags: ["addiction", "trauma", "therapy"],
      nextAvailable: "Today 11:00 AM",
      onlineConsultation: true,
      isFounder: false
    }
  ];

  const getText = (textObj: any) => textObj[language] || textObj.en;

  const filteredDoctors = useMemo(() => {
    return doctors.filter(doctor => {
      const matchesSpecialty = selectedSpecialty === "all" || doctor.category === selectedSpecialty;
      const matchesGender = selectedGender === "all" || doctor.gender === selectedGender;
      const matchesLanguage = selectedLanguage === "all" || doctor.languages?.includes(selectedLanguage);
      const matchesOnline = !onlineOnly || doctor.onlineConsultation;
      const matchesSearch = searchQuery === "" || 
        getText(doctor.name).toLowerCase().includes(searchQuery.toLowerCase()) || 
        getText(doctor.specialty).toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => doctor.tags.includes(tag));

      return matchesSpecialty && matchesGender && matchesLanguage && matchesOnline && matchesSearch && matchesTags;
    });
  }, [selectedSpecialty, selectedGender, selectedLanguage, onlineOnly, searchQuery, selectedTags, language]);

  // Group doctors with founders first
  const founderDoctors = filteredDoctors.filter(d => d.isFounder);
  const maleDoctors = filteredDoctors.filter(d => d.gender === "male" && !d.isFounder);
  const femaleDoctors = filteredDoctors.filter(d => d.gender === "female" && !d.isFounder);
  const topRatedDoctors = filteredDoctors.filter(d => d.rating >= 4.8 && !d.isFounder).sort((a, b) => b.rating - a.rating);
  const availableNowDoctors = filteredDoctors.filter(d => d.availableNow && !d.isFounder);

  const loadMore = (section: keyof typeof visibleSections) => {
    setVisibleSections(prev => ({
      ...prev,
      [section]: prev[section] + 6
    }));
  };

  const DoctorSection = ({
    title,
    doctors: sectionDoctors,
    visible,
    onLoadMore,
    sectionKey,
    useGrid = true
  }: {
    title: string;
    doctors: any[];
    visible: number;
    onLoadMore: () => void;
    sectionKey: string;
    useGrid?: boolean;
  }) => (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-muted-foreground">
          {language === "ar" ? `${sectionDoctors.length} أطباء` : `${sectionDoctors.length} doctors`}
        </span>
      </div>
      
      <div className={`${useGrid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr" : "flex overflow-x-auto gap-6 pb-4"} mb-8`}>
        {sectionDoctors.slice(0, visible).map((doctor, index) => (
          <div key={doctor.id} className={useGrid ? "" : "flex-shrink-0 w-80"}>
            <DoctorCard 
              doctor={doctor} 
              index={index} 
              language={language} 
              size={doctor.isFounder ? 'large' : 'medium'} 
            />
          </div>
        ))}
      </div>
      
      {visible < sectionDoctors.length && (
        <div className="text-center">
          <Button 
            onClick={onLoadMore} 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/5"
          >
            {language === "ar" ? `عرض المزيد` : `Show More`} 
            ({sectionDoctors.length - visible} {language === "ar" ? "متبقي" : "remaining"})
          </Button>
        </div>
      )}
    </motion.section>
  );

  return (
    <div className={`min-h-screen pt-24 pb-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            {language === "ar" ? "تعرف على " : "Meet Our "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              {language === "ar" ? "أطبائنا الخبراء" : "Expert Doctors"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "ar" 
              ? "فريقنا من أخصائيي الصحة النفسية ذوي الخبرة مكرس لتقديم رعاية متفهمة وقائمة على الأدلة" 
              : "Our team of experienced mental health professionals is dedicated to providing compassionate, evidence-based care"
            }
          </p>
        </motion.div>

        {/* Smart Filters */}
        <DoctorFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          onlineOnly={onlineOnly}
          setOnlineOnly={setOnlineOnly}
          language={language}
          doctors={doctors}
        />

        {/* Results Count */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-muted-foreground">
            {language === "ar" 
              ? `تم العثور على ${filteredDoctors.length} طبيب` 
              : `Found ${filteredDoctors.length} doctors`
            }
          </p>
        </motion.div>

        {/* Doctor Sections */}
        {filteredDoctors.length > 0 ? (
          <>
            {/* Founders Section - الأولوية للمؤسسين */}
            {founderDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "🏆 المؤسسون" : "🏆 Our Founders"}
                doctors={founderDoctors}
                visible={visibleSections.founders}
                onLoadMore={() => loadMore('founders')}
                sectionKey="founders"
              />
            )}
            
            {/* Top Rated Section */}
            {topRatedDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "⭐ الأطباء الأعلى تقييماً" : "⭐ Top Rated Doctors"}
                doctors={topRatedDoctors}
                visible={visibleSections.topRated}
                onLoadMore={() => loadMore('topRated')}
                sectionKey="topRated"
              />
            )}
            
            {/* Available Now Section */}
            {availableNowDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "🔄 متاحون الآن" : "🔄 Available Now"}
                doctors={availableNowDoctors}
                visible={visibleSections.availableNow}
                onLoadMore={() => loadMore('availableNow')}
                sectionKey="availableNow"
              />
            )}
            
            {/* Male Doctors Section */}
            {maleDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "👨‍⚕️ الأطباء الذكور" : "👨‍⚕️ Male Doctors"}
                doctors={maleDoctors}
                visible={visibleSections.male}
                onLoadMore={() => loadMore('male')}
                sectionKey="male"
              />
            )}
            
            {/* Female Doctors Section */}
            {femaleDoctors.length > 0 && (
              <DoctorSection
                title={language === "ar" ? "👩‍⚕️ الطبيبات" : "👩‍⚕️ Female Doctors"}
                doctors={femaleDoctors}
                visible={visibleSections.female}
                onLoadMore={() => loadMore('female')}
                sectionKey="female"
              />
            )}
          </>
        ) : (
          /* No Results */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-4">
              {language === "ar" ? "لم يتم العثور على أطباء" : "No doctors found"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === "ar" 
                ? "حاول تغيير الفلاتر أو البحث عن شيء آخر" 
                : "Try changing your filters or search for something else"
              }
            </p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
                setSelectedGender('all');
                setSelectedLanguage('all');
                setSelectedTags([]);
                setOnlineOnly(false);
              }}
              className="bg-primary hover:bg-primary/90"
            >
              {language === "ar" ? "مسح جميع الفلاتر" : "Clear All Filters"}
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              {language === "ar" 
                ? "لست متأكداً من الطبيب المناسب لك؟" 
                : "Not sure which doctor is right for you?"
              }
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === "ar" 
                ? "يمكن لفريقنا مساعدتك في العثور على أخصائي الصحة النفسية المثالي بناءً على احتياجاتك وتفضيلاتك المحددة." 
                : "Our team can help match you with the perfect mental health professional based on your specific needs and preferences."
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="gradient-calm hover:opacity-90 text-slate-800">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {language === "ar" ? "احصل على مطابقة مع طبيب" : "Get Matched with a Doctor"}
                  </Button>
                </motion.div>
              </Link>
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                    <Users className="w-4 h-4 mr-2" />
                    {language === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsPage;
