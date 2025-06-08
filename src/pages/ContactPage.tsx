import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };
  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/01551521419', '_blank');
  };
  const handleCallClick = () => {
    window.open('tel:01551521419', '_self');
  };
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/rp6jy8uvB5iHt5vb7', '_blank');
  };
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We're here to answer your questions and help you take the first step 
            toward better mental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Our Clinic
رقم ٤٠٥ - عماره ٨ - عمارات حدائق رامو - طريق النصر- مدينه نصر, </h3>
                    <p className="text-muted-foreground">
                      Mental Health Clinic<br />
                      New Cairo, Egypt<br />
                    </p>
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" onClick={handleLocationClick}>
                      View on Map →
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      <button onClick={handleCallClick} className="hover:text-primary transition-colors">
                        015 51521419
                      </button>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@serenityclinic.com<br />
                      appointments@serenityclinic.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Office Hours


Here for you every day, 10 AM – 10 PM</h3>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Contact</h3>
              <div className="grid gap-4">
                <Button className="gradient-calm text-white hover:opacity-90 justify-start" onClick={handleWhatsAppClick}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: 015 51521419
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5 justify-start" onClick={handleCallClick}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 015 51521419
                </Button>
              </div>
            </div>

            {/* Interactive Map */}
            <div>
              <h3 className="text-lg font-medium mb-4">Find Us</h3>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg h-64 flex items-center justify-center border border-border/50 cursor-pointer hover:from-primary/10 hover:to-secondary/10 transition-all duration-300" onClick={handleLocationClick}>
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">Our Location</p>
                  <p className="text-sm text-muted-foreground mb-4">New Cairo, Egypt</p>
                  <Button variant="outline" className="border-primary/20">
                    Open in Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border/50 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-light">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={formData.name} onChange={e => updateForm("name", e.target.value)} placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" value={formData.email} onChange={e => updateForm("email", e.target.value)} placeholder="your.email@example.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={e => updateForm("phone", e.target.value)} placeholder="015 12345678" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" value={formData.subject} onChange={e => updateForm("subject", e.target.value)} placeholder="How can we help you?" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" value={formData.message} onChange={e => updateForm("message", e.target.value)} placeholder="Tell us about your needs or questions..." rows={6} required />
                  </div>

                  <Button type="submit" className="w-full gradient-calm text-white hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16">
          <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                Mental Health Emergency?
              </h3>
              <p className="text-red-700 dark:text-red-300 mb-4">
                If you're experiencing a mental health crisis, please don't wait. 
                Get immediate help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="destructive" onClick={handleCallClick}>
                  Call Now: 015 51521419
                </Button>
                <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50" onClick={handleWhatsAppClick}>
                  WhatsApp Emergency
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default ContactPage;