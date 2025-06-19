
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, Star, BookOpen, CalendarCheck } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: "الأطباء",
      value: "12",
      description: "أطباء نشطين",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "المقالات",
      value: "45",
      description: "مقالة منشورة",
      icon: FileText,
      color: "text-green-600",
    },
    {
      title: "الفعاليات",
      value: "8",
      description: "فعاليات قادمة",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "الشهادات",
      value: "156",
      description: "شهادة عملاء",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "البرامج",
      value: "6",
      description: "برامج متاحة",
      icon: BookOpen,
      color: "text-indigo-600",
    },
    {
      title: "الحجوزات",
      value: "89",
      description: "حجز هذا الشهر",
      icon: CalendarCheck,
      color: "text-red-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">لوحة التحكم</h1>
        <p className="text-muted-foreground">
          مرحباً بك في لوحة إدارة Gentle Path Clinic
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>الحجوزات الأخيرة</CardTitle>
            <CardDescription>
              آخر 5 حجوزات تم استلامها
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">{i}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">مريض تجريبي {i}</p>
                    <p className="text-xs text-muted-foreground">
                      حجز مع د. أحمد محمد - {new Date().toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الفعاليات القادمة</CardTitle>
            <CardDescription>
              الفعاليات المجدولة للأسبوع القادم
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "ورشة الصحة النفسية للمراهقين",
                "جلسة دعم الأسر",
                "محاضرة عن القلق والتوتر",
                "ورشة العلاج بالفن",
                "جلسة التأمل الجماعية"
              ].map((event, i) => (
                <div key={i} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('ar-EG')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
