
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  status: 'active' | 'inactive';
  phone: string;
  email: string;
  experience: string;
}

const AdminDoctors = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);
  
  // Mock data - replace with real API calls later
  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: '1',
      name: 'د. مها محسن',
      specialty: 'العلاج النفسي للأطفال والمراهقين',
      bio: 'طبيبة نفسية متخصصة في علاج الأطفال والمراهقين',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      status: 'active',
      phone: '+966501234567',
      email: 'maha.mohsen@gentlepath.com',
      experience: '10 سنوات'
    },
    {
      id: '2',
      name: 'د. داليا الليثي',
      specialty: 'العلاج المعرفي السلوكي',
      bio: 'متخصصة في العلاج المعرفي السلوكي واضطرابات القلق',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      status: 'active',
      phone: '+966501234568',
      email: 'dalia.laithi@gentlepath.com',
      experience: '8 سنوات'
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    bio: '',
    image: '',
    phone: '',
    email: '',
    experience: '',
    status: 'active' as 'active' | 'inactive'
  });

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDoctor = () => {
    const newDoctor: Doctor = {
      id: Date.now().toString(),
      ...formData
    };
    
    setDoctors([...doctors, newDoctor]);
    setFormData({
      name: '',
      specialty: '',
      bio: '',
      image: '',
      phone: '',
      email: '',
      experience: '',
      status: 'active'
    });
    setIsAddDialogOpen(false);
    
    toast({
      title: "تم إضافة الطبيب",
      description: "تم إضافة الطبيب الجديد بنجاح",
    });
  };

  const handleEditDoctor = (doctor: Doctor) => {
    setEditingDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      bio: doctor.bio,
      image: doctor.image,
      phone: doctor.phone,
      email: doctor.email,
      experience: doctor.experience,
      status: doctor.status
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateDoctor = () => {
    if (!editingDoctor) return;
    
    setDoctors(doctors.map(doctor =>
      doctor.id === editingDoctor.id
        ? { ...editingDoctor, ...formData }
        : doctor
    ));
    
    setIsEditDialogOpen(false);
    setEditingDoctor(null);
    setFormData({
      name: '',
      specialty: '',
      bio: '',
      image: '',
      phone: '',
      email: '',
      experience: '',
      status: 'active'
    });
    
    toast({
      title: "تم تحديث الطبيب",
      description: "تم تحديث بيانات الطبيب بنجاح",
    });
  };

  const handleDeleteDoctor = (doctorId: string) => {
    setDoctors(doctors.filter(doctor => doctor.id !== doctorId));
    toast({
      title: "تم حذف الطبيب",
      description: "تم حذف الطبيب بنجاح",
    });
  };

  const DoctorForm = () => (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          الاسم
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="col-span-3"
          placeholder="د. أحمد محمد"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="specialty" className="text-right">
          التخصص
        </Label>
        <Input
          id="specialty"
          value={formData.specialty}
          onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
          className="col-span-3"
          placeholder="العلاج النفسي"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="email" className="text-right">
          البريد الإلكتروني
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="col-span-3"
          placeholder="doctor@gentlepath.com"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="phone" className="text-right">
          رقم الهاتف
        </Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="col-span-3"
          placeholder="+966501234567"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="experience" className="text-right">
          الخبرة
        </Label>
        <Input
          id="experience"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          className="col-span-3"
          placeholder="10 سنوات"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="image" className="text-right">
          رابط الصورة
        </Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="col-span-3"
          placeholder="https://example.com/image.jpg"
        />
      </div>
      <div className="grid grid-cols-4 items-start gap-4">
        <Label htmlFor="bio" className="text-right">
          النبذة
        </Label>
        <Textarea
          id="bio"
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          className="col-span-3"
          placeholder="نبذة عن الطبيب..."
          rows={3}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">إدارة الأطباء</h1>
          <p className="text-muted-foreground">
            إدارة بيانات الأطباء في العيادة
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 ml-2" />
              إضافة طبيب جديد
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>إضافة طبيب جديد</DialogTitle>
              <DialogDescription>
                أدخل بيانات الطبيب الجديد
              </DialogDescription>
            </DialogHeader>
            <DoctorForm />
            <DialogFooter>
              <Button onClick={handleAddDoctor}>حفظ</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الأطباء</CardTitle>
          <CardDescription>
            إدارة جميع الأطباء المسجلين في النظام
          </CardDescription>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="البحث عن طبيب..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>الصورة</TableHead>
                <TableHead>الاسم</TableHead>
                <TableHead>التخصص</TableHead>
                <TableHead>الخبرة</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{doctor.name}</TableCell>
                  <TableCell>{doctor.specialty}</TableCell>
                  <TableCell>{doctor.experience}</TableCell>
                  <TableCell>
                    <Badge variant={doctor.status === 'active' ? 'default' : 'secondary'}>
                      {doctor.status === 'active' ? 'نشط' : 'غير نشط'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditDoctor(doctor)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                            <AlertDialogDescription>
                              هل أنت متأكد من حذف الطبيب {doctor.name}؟ هذا الإجراء لا يمكن التراجع عنه.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>إلغاء</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDeleteDoctor(doctor.id)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              حذف
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Doctor Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>تعديل بيانات الطبيب</DialogTitle>
            <DialogDescription>
              تعديل بيانات {editingDoctor?.name}
            </DialogDescription>
          </DialogHeader>
          <DoctorForm />
          <DialogFooter>
            <Button onClick={handleUpdateDoctor}>حفظ التغييرات</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDoctors;
