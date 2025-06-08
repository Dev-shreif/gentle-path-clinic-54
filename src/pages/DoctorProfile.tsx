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
    "dr-sarah-mitchell": {
      name: { en: "Dr. Sarah Mitchell", ar: "د. سارة ميتشل" },
      specialty: { en: "Clinical Psychology", ar: "علم النفس السريري" },
      title: { en: "Ph.D., Licensed Clinical Psychologist", ar: "دكتوراه، أخصائي نفسي سريري مرخص" },
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "15+ years", ar: "أكثر من 15 سنة" },
      education: {
        en: [
          "Ph.D. in Clinical Psychology - Stanford University",
          "M.A. in Psychology - University of California, Berkeley",
          "B.A. in Psychology - Harvard University"
        ],
        ar: [
          "دكتوراه في علم النفس السريري - جامعة ستانفورد",
          "ماجستير في علم النفس - جامعة كاليفورنيا، بيركلي",
          "بكالوريوس في علم النفس - جامعة هارفارد"
        ]
      },
      licenses: {
        en: [
          "Licensed Clinical Psychologist - California",
          "Certified CBT Therapist",
          "EMDR Certified Therapist"
        ],
        ar: [
          "أخصائي نفسي سريري مرخص - كاليفورنيا",
          "معالج معرفي سلوكي معتمد",
          "معالج EMDR معتمد"
        ]
      },
      bio: {
        en: "Dr. Sarah Mitchell is a compassionate clinical psychologist with over 15 years of experience helping individuals overcome anxiety, depression, and trauma. She specializes in cognitive-behavioral therapy and has helped hundreds of patients develop healthy coping mechanisms and achieve lasting mental wellness.",
        ar: "د. سارة ميتشل هي أخصائية نفسية سريرية متفهمة مع أكثر من 15 عامًا من الخبرة في مساعدة الأفراد على التغلب على القلق والاكتئاب والصدمات. تتخصص في العلاج المعرفي السلوكي وساعدت المئات من المرضى على تطوير آليات التأقلم الصحية وتحقيق العافية النفسية الدائمة."
      },
      expertise: {
        en: ["Anxiety Disorders", "Cognitive Behavioral Therapy (CBT)", "Trauma Therapy", "Depression", "PTSD", "Panic Disorders", "Stress Management", "Mindfulness-Based Therapy"],
        ar: ["اضطرابات القلق", "العلاج المعرفي السلوكي", "علاج الصدمات", "الاكتئاب", "اضطراب ما بعد الصدمة", "اضطرابات الهلع", "إدارة التوتر", "العلاج القائم على اليقظة"]
      },
      conditions: {
        en: ["Generalized Anxiety Disorder", "Social Anxiety", "Depression", "Post-Traumatic Stress Disorder", "Panic Disorder", "Obsessive-Compulsive Disorder", "Adjustment Disorders", "Chronic Stress"],
        ar: ["اضطراب القلق العام", "القلق الاجتماعي", "الاكتئاب", "اضطراب ما بعد الصدمة", "اضطراب الهلع", "اضطراب الوسواس القهري", "اضطرابات التكيف", "التوتر المزمن"]
      },
      awards: {
        en: ["Excellence in Mental Health Care Award 2023", "Top Psychologist - Bay Area Mental Health Association", "Distinguished Service Award - California Psychological Association", "Research Excellence Award - Stanford University"],
        ar: ["جائزة التميز في الرعاية النفسية 2023", "أفضل أخصائي نفسي - جمعية الصحة النفسية في منطقة الخليج", "جائزة الخدمة المتميزة - جمعية علم النفس في كاليفورنيا", "جائزة التميز البحثي - جامعة ستانفورد"]
      },
      availability: {
        days: { en: ["Monday", "Tuesday", "Wednesday", "Friday"], ar: ["الاثنين", "الثلاثاء", "الأربعاء", "الجمعة"] },
        hours: { en: "9:00 AM - 6:00 PM", ar: "9:00 صباحاً - 6:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-michael-rodriguez": {
      name: { en: "Dr. Michael Rodriguez", ar: "د. مايكل رودريجيز" },
      specialty: { en: "Psychiatrist", ar: "طبيب نفسي" },
      title: { en: "M.D., Board Certified Psychiatrist", ar: "دكتور في الطب، طبيب نفسي معتمد" },
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "12+ years", ar: "أكثر من 12 سنة" },
      education: {
        en: [
          "M.D. - Johns Hopkins School of Medicine",
          "Psychiatry Residency - Mayo Clinic",
          "B.S. in Neuroscience - UCLA"
        ],
        ar: [
          "دكتوراه في الطب - كلية الطب بجامعة جونز هوبكنز",
          "الإقامة النفسية - Mayo كلينيك",
          "بكالوريوس علوم في علم الأعصاب - جامعة كاليفورنيا"
        ]
      },
      licenses: {
        en: [
          "Board Certified Psychiatrist",
          "Licensed Medical Doctor - California",
          "Certified in Addiction Medicine"
        ],
        ar: [
          "طبيب نفسي معتمد",
          "طبيب مرخص - كاليفورنيا",
          "معتمد في طب الإدمان"
        ]
      },
      bio: {
        en: "Dr. Michael Rodriguez is an expert in mood disorders and medication management, helping patients achieve optimal mental health through comprehensive treatment approaches.",
        ar: "د. مايكل رودريجيز خبير في اضطرابات المزاج وإدارة الأدوية، يساعد المرضى على تحقيق الصحة النفسية المثلى من خلال مناهج العلاج الشاملة."
      },
      expertise: {
        en: ["Depression", "Bipolar Disorder", "Medication Management", "Anxiety Disorders", "Schizophrenia", "ADHD", "Substance Abuse", "Mood Disorders"],
        ar: ["الاكتئاب", "اضطراب ثنائي القطب", "إدارة الأدوية", "اضطرابات القلق", "الفصام", "اضطراب نقص الانتباه", "تعاطي المواد المخدرة", "اضطرابات المزاج"]
      },
      conditions: {
        en: ["Major Depression", "Bipolar I & II", "Generalized Anxiety", "Panic Disorder", "ADHD", "Schizophrenia", "Substance Use Disorders", "Personality Disorders"],
        ar: ["الاكتئاب الشديد", "ثنائي القطب الأول والثاني", "القلق العام", "اضطراب الهلع", "نقص الانتباه", "الفصام", "اضطرابات تعاطي المواد", "اضطرابات الشخصية"]
      },
      awards: {
        en: ["Outstanding Psychiatrist Award 2022", "Excellence in Patient Care", "Research Publication Award", "Community Mental Health Recognition"],
        ar: ["جائزة الطبيب النفسي المتميز 2022", "التميز في رعاية المرضى", "جائزة النشر البحثي", "تقدير الصحة النفسية المجتمعية"]
      },
      availability: {
        days: { en: ["Monday", "Tuesday", "Thursday", "Friday"], ar: ["الاثنين", "الثلاثاء", "الخميس", "الجمعة"] },
        hours: { en: "8:00 AM - 5:00 PM", ar: "8:00 صباحاً - 5:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-emily-chen": {
      name: { en: "Dr. Emily Chen", ar: "د. إيميلي تشين" },
      specialty: { en: "Child Psychology", ar: "علم نفس الأطفال" },
      title: { en: "Ph.D., Child & Adolescent Psychologist", ar: "دكتوراه، أخصائي نفسي للأطفال والمراهقين" },
      image: "https://images.unsplash.com/photo-1594824709602-7b0c7b2e0c2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "10+ years", ar: "أكثر من 10 سنوات" },
      education: {
        en: [
          "Ph.D. in Child Psychology - University of Michigan",
          "M.A. in Developmental Psychology - Northwestern University",
          "B.A. in Psychology - University of Chicago"
        ],
        ar: [
          "دكتوراه في علم نفس الأطفال - جامعة ميشيغان",
          "ماجستير في علم النفس التنموي - جامعة نورث وسترن",
          "بكالوريوس في علم النفس - جامعة شيكاغو"
        ]
      },
      licenses: {
        en: [
          "Licensed Child Psychologist",
          "Certified Play Therapist",
          "ADHD Specialist Certification"
        ],
        ar: [
          "أخصائي نفسي للأطفال مرخص",
          "معالج باللعب معتمد",
          "شهادة أخصائي اضطراب نقص الانتباه"
        ]
      },
      bio: {
        en: "Dr. Emily Chen is dedicated to helping children and adolescents navigate emotional and behavioral challenges through evidence-based therapeutic approaches tailored for young minds.",
        ar: "د. إيميلي تشين مكرسة لمساعدة الأطفال والمراهقين على التنقل في التحديات العاطفية والسلوكية من خلال المناهج العلاجية القائمة على الأدلة المصممة للعقول الشابة."
      },
      expertise: {
        en: ["Child Psychology", "ADHD", "Family Therapy", "Play Therapy", "Autism Spectrum", "Learning Disabilities", "Behavioral Issues", "Teen Counseling"],
        ar: ["علم نفس الأطفال", "اضطراب نقص الانتباه", "العلاج الأسري", "العلاج باللعب", "طيف التوحد", "صعوبات التعلم", "المشاكل السلوكية", "استشارات المراهقين"]
      },
      conditions: {
        en: ["ADHD", "Autism Spectrum Disorder", "Learning Disabilities", "Behavioral Disorders", "Anxiety in Children", "Depression in Teens", "Family Conflicts", "School-related Issues"],
        ar: ["اضطراب نقص الانتباه", "اضطراب طيف التوحد", "صعوبات التعلم", "الاضطرابات السلوكية", "القلق عند الأطفال", "الاكتئاب عند المراهقين", "الصراعات الأسرية", "المشاكل المدرسية"]
      },
      awards: {
        en: ["Child Advocate Award 2023", "Excellence in Child Mental Health", "Family Therapy Recognition", "Youth Development Award"],
        ar: ["جائزة مدافع عن الأطفال 2023", "التميز في الصحة النفسية للأطفال", "تقدير العلاج الأسري", "جائزة تنمية الشباب"]
      },
      availability: {
        days: { en: ["Monday", "Wednesday", "Thursday", "Saturday"], ar: ["الاثنين", "الأربعاء", "الخميس", "السبت"] },
        hours: { en: "10:00 AM - 7:00 PM", ar: "10:00 صباحاً - 7:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-james-thompson": {
      name: { en: "Dr. James Thompson", ar: "د. جيمس طومسون" },
      specialty: { en: "Trauma Specialist", ar: "أخصائي الصدمات" },
      title: { en: "Ph.D., Trauma & PTSD Specialist", ar: "دكتوراه، أخصائي الصدمات واضطراب ما بعد الصدمة" },
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "18+ years", ar: "أكثر من 18 سنة" },
      education: {
        en: [
          "Ph.D. in Clinical Psychology - University of Pennsylvania",
          "Trauma Therapy Specialization - Harvard Medical School",
          "B.A. in Psychology - Yale University"
        ],
        ar: [
          "دكتوراه في علم النفس السريري - جامعة بنسلفانيا",
          "تخصص علاج الصدمات - كلية الطب بجامعة هارفارد",
          "بكالوريوس في علم النفس - جامعة ييل"
        ]
      },
      licenses: {
        en: [
          "Licensed Clinical Psychologist",
          "EMDR Certified Therapist",
          "Trauma-Informed Care Specialist"
        ],
        ar: [
          "أخصائي نفسي سريري مرخص",
          "معالج EMDR معتمد",
          "أخصائي الرعاية الواعية بالصدمات"
        ]
      },
      bio: {
        en: "Dr. James Thompson specializes in PTSD treatment and trauma recovery using evidence-based therapeutic approaches, helping individuals heal from their most difficult experiences.",
        ar: "د. جيمس طومسون يتخصص في علاج اضطراب ما بعد الصدمة وتعافي الصدمات باستخدام المناهج العلاجية القائمة على الأدلة، مساعدة الأفراد على التعافي من أصعب تجاربهم."
      },
      expertise: {
        en: ["PTSD", "Trauma Recovery", "EMDR", "Combat Trauma", "Sexual Trauma", "Childhood Trauma", "Complex PTSD", "Crisis Intervention"],
        ar: ["اضطراب ما بعد الصدمة", "تعافي الصدمات", "EMDR", "صدمة القتال", "الصدمة الجنسية", "صدمة الطفولة", "اضطراب ما بعد الصدمة المعقد", "التدخل في الأزمات"]
      },
      conditions: {
        en: ["PTSD", "Complex Trauma", "Acute Stress Disorder", "Dissociative Disorders", "Combat-related PTSD", "Sexual Assault Recovery", "Childhood Abuse Recovery", "Survivor Guilt"],
        ar: ["اضطراب ما بعد الصدمة", "الصدمة المعقدة", "اضطراب الإجهاد الحاد", "الاضطرابات التفككية", "اضطراب ما بعد الصدمة المرتبط بالقتال", "تعافي الاعتداء الجنسي", "تعافي إساءة معاملة الأطفال", "ذنب الناجي"]
      },
      awards: {
        en: ["Trauma Treatment Excellence Award", "PTSD Research Recognition", "Military Service Appreciation", "Community Crisis Response Award"],
        ar: ["جائزة التميز في علاج الصدمات", "تقدير بحوث اضطراب ما بعد الصدمة", "تقدير الخدمة العسكرية", "جائزة الاستجابة للأزمات المجتمعية"]
      },
      availability: {
        days: { en: ["Tuesday", "Wednesday", "Thursday", "Friday"], ar: ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة"] },
        hours: { en: "9:00 AM - 6:00 PM", ar: "9:00 صباحاً - 6:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-lisa-park": {
      name: { en: "Dr. Lisa Park", ar: "د. ليزا بارك" },
      specialty: { en: "Addiction Counselor", ar: "مستشار الإدمان" },
      title: { en: "Ph.D., Addiction & Recovery Specialist", ar: "دكتوراه، أخصائي الإدمان والتعافي" },
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "14+ years", ar: "أكثر من 14 سنة" },
      education: {
        en: [
          "Ph.D. in Addiction Psychology - University of Washington",
          "M.A. in Counseling Psychology - Seattle University",
          "B.A. in Social Work - University of Oregon"
        ],
        ar: [
          "دكتوراه في علم نفس الإدمان - جامعة واشنطن",
          "ماجستير في علم النفس الإرشادي - جامعة سياتل",
          "بكالوريوس في العمل الاجتماعي - جامعة أوريغون"
        ]
      },
      licenses: {
        en: [
          "Licensed Addiction Counselor",
          "Certified Substance Abuse Counselor",
          "Group Therapy Specialist"
        ],
        ar: [
          "مستشار إدمان مرخص",
          "مستشار تعاطي المواد المخدرة معتمد",
          "أخصائي العلاج الجماعي"
        ]
      },
      bio: {
        en: "Dr. Lisa Park provides compassionate care for addiction recovery and substance abuse treatment programs, helping individuals reclaim their lives through evidence-based recovery approaches.",
        ar: "د. ليزا بارك تقدم رعاية متفهمة لتعافي الإدمان وبرامج علاج تعاطي المواد المخدرة، مساعدة الأفراد على استعادة حياتهم من خلال مناهج التعافي القائمة على الأدلة."
      },
      expertise: {
        en: ["Addiction Recovery", "Substance Abuse", "Group Therapy", "12-Step Programs", "Relapse Prevention", "Dual Diagnosis", "Family Addiction Counseling", "Motivational Interviewing"],
        ar: ["تعافي الإدمان", "تعاطي المواد المخدرة", "العلاج الجماعي", "برامج الخطوات الاثني عشر", "منع الانتكاس", "التشخيص المزدوج", "استشارات إدمان الأسرة", "المقابلة التحفيزية"]
      },
      conditions: {
        en: ["Alcohol Addiction", "Drug Addiction", "Gambling Addiction", "Behavioral Addictions", "Co-occurring Disorders", "Prescription Drug Abuse", "Nicotine Addiction", "Internet Addiction"],
        ar: ["إدمان الكحول", "إدمان المخدرات", "إدمان القمار", "الإدمان السلوكي", "الاضطرابات المتزامنة", "إساءة استخدام الأدوية الموصوفة", "إدمان النيكوتين", "إدمان الإنترنت"]
      },
      awards: {
        en: ["Addiction Recovery Excellence Award", "Community Service Recognition", "Research in Addiction Treatment", "Family Support Program Award"],
        ar: ["جائزة التميز في تعافي الإدمان", "تقدير الخدمة المجتمعية", "البحث في علاج الإدمان", "جائزة برنامج دعم الأسرة"]
      },
      availability: {
        days: { en: ["Monday", "Tuesday", "Wednesday", "Thursday"], ar: ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس"] },
        hours: { en: "8:00 AM - 7:00 PM", ar: "8:00 صباحاً - 7:00 مساءً" },
        location: { en: "In-person and Online", ar: "حضوري وعبر الإنترنت" }
      }
    },
    "dr-david-wilson": {
      name: { en: "Dr. David Wilson", ar: "د. ديفيد ويلسون" },
      specialty: { en: "Couples Therapy", ar: "علاج الأزواج" },
      title: { en: "Ph.D., Marriage & Family Therapist", ar: "دكتوراه، معالج الزواج والأسرة" },
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      experience: { en: "16+ years", ar: "أكثر من 16 سنة" },
      education: {
        en: [
          "Ph.D. in Marriage & Family Therapy - University of Southern California",
          "M.A. in Counseling Psychology - Pepperdine University",
          "B.A. in Psychology - UCLA"
        ],
        ar: [
          "دكتوراه في علاج الزواج والأسرة - جامعة جنوب كاليفورنيا",
          "ماجستير في علم النفس الإرشادي - جامعة بيبردين",
          "بكالوريوس في علم النفس - جامعة كاليفورنيا"
        ]
      },
      licenses: {
        en: [
          "Licensed Marriage & Family Therapist",
          "Certified Gottman Couples Therapist",
          "Emotionally Focused Therapy (EFT) Certified"
        ],
        ar: [
          "معالج زواج وأسرة مرخص",
          "معالج أزواج جوتمان معتمد",
          "معتمد في العلاج المركز على المشاعر"
        ]
      },
      bio: {
        en: "Dr. David Wilson helps couples strengthen relationships and improve communication through therapeutic intervention, specializing in evidence-based approaches to relationship healing and growth.",
        ar: "د. ديفيد ويلسون يساعد الأزواج على تقوية العلاقات وتحسين التواصل من خلال التدخل العلاجي، متخصص في المناهج القائمة على الأدلة لشفاء ونمو العلاقات."
      },
      expertise: {
        en: ["Couples Therapy", "Marriage Counseling", "Communication", "Relationship Building", "Conflict Resolution", "Intimacy Issues", "Pre-marital Counseling", "Divorce Mediation"],
        ar: ["علاج الأزواج", "استشارات الزواج", "التواصل", "بناء العلاقات", "حل النزاعات", "مشاكل الحميمية", "الاستشارة قبل الزواج", "وساطة الطلاق"]
      },
      conditions: {
        en: ["Relationship Conflicts", "Communication Problems", "Trust Issues", "Infidelity Recovery", "Sexual Intimacy Issues", "Parenting Conflicts", "Blended Family Issues", "Separation/Divorce"],
        ar: ["صراعات العلاقات", "مشاكل التواصل", "قضايا الثقة", "تعافي الخيانة", "مشاكل الحميمية الجنسية", "صراعات الأبوة والأمومة", "مشاكل الأسرة المختلطة", "الانفصال/الطلاق"]
      },
      awards: {
        en: ["Excellence in Couples Therapy", "Relationship Counseling Recognition", "Family Therapy Innovation Award", "Community Marriage Support Award"],
        ar: ["التميز في علاج الأزواج", "تقدير استشارات العلاقات", "جائزة الابتكار في العلاج الأسري", "جائزة دعم الزواج المجتمعي"]
      },
      availability: {
        days: { en: ["Monday", "Wednesday", "Friday", "Saturday"], ar: ["الاثنين", "الأربعاء", "الجمعة", "السبت"] },
        hours: { en: "10:00 AM - 8:00 PM", ar: "10:00 صباحاً - 8:00 مساءً" },
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
