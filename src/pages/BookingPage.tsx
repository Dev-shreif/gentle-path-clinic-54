
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const BookingPage = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    doctor: location.state?.selectedDoctor || "",
    service: location.state?.selectedService || "",
    sessionType: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const doctors = [
    "Dr. Sarah Mitchell",
    "Dr. Michael Rodriguez", 
    "Dr. Emily Chen",
    "Dr. James Thompson",
    "Dr. Lisa Park",
    "Dr. David Wilson"
  ];

  const services = [
    "Individual Therapy",
    "Couples Therapy",
    "Group Therapy",
    "Psychiatric Evaluation",
    "Online Therapy",
    "Crisis Intervention"
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", bookingData);
    setCurrentStep(5); // Success step
  };

  const updateBookingData = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return bookingData.doctor && bookingData.service;
      case 2:
        return bookingData.sessionType;
      case 3:
        return bookingData.date && bookingData.time;
      case 4:
        return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone;
      default:
        return false;
    }
  };

  if (currentStep === 5) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <Card className="border-border/50 shadow-xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Booking Confirmed!</h2>
                <p className="text-muted-foreground">
                  Your appointment has been successfully scheduled. You'll receive a confirmation email shortly.
                </p>
              </div>
              
              <div className="space-y-3 text-left mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doctor:</span>
                  <span className="font-medium">{bookingData.doctor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service:</span>
                  <span className="font-medium">{bookingData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span className="font-medium">{bookingData.date} at {bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-medium">{bookingData.sessionType}</span>
                </div>
              </div>
              
              <Button className="w-full gradient-calm text-white hover:opacity-90">
                Add to Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Book Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Appointment
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Schedule your session in just a few simple steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentStep >= step 
                      ? "bg-primary text-white" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div 
                    className={`w-16 h-1 mx-2 transition-colors ${
                      currentStep > step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of 4
              </p>
            </div>
          </div>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">
              {currentStep === 1 && "Select Doctor & Service"}
              {currentStep === 2 && "Choose Session Type"}
              {currentStep === 3 && "Pick Date & Time"}
              {currentStep === 4 && "Your Information"}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            {/* Step 1: Doctor & Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <Label className="text-base font-medium mb-4 block">Select Doctor</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {doctors.map((doctor) => (
                      <Card 
                        key={doctor}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          bookingData.doctor === doctor 
                            ? "ring-2 ring-primary bg-primary/5" 
                            : "hover:bg-muted/20"
                        }`}
                        onClick={() => updateBookingData("doctor", doctor)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-primary" />
                            <span className="font-medium">{doctor}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium mb-4 block">Select Service</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card 
                        key={service}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          bookingData.service === service 
                            ? "ring-2 ring-primary bg-primary/5" 
                            : "hover:bg-muted/20"
                        }`}
                        onClick={() => updateBookingData("service", service)}
                      >
                        <CardContent className="p-4">
                          <span className="font-medium">{service}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Session Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      bookingData.sessionType === "In-Person" 
                        ? "ring-2 ring-primary bg-primary/5" 
                        : "hover:bg-muted/20"
                    }`}
                    onClick={() => updateBookingData("sessionType", "In-Person")}
                  >
                    <CardContent className="p-6 text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-medium mb-2">In-Person Session</h3>
                      <p className="text-sm text-muted-foreground">
                        Visit our comfortable clinic for face-to-face therapy
                      </p>
                      <Badge variant="secondary" className="mt-3">
                        Standard Rate
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card 
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      bookingData.sessionType === "Online" 
                        ? "ring-2 ring-primary bg-primary/5" 
                        : "hover:bg-muted/20"
                    }`}
                    onClick={() => updateBookingData("sessionType", "Online")}
                  >
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h3 className="font-medium mb-2">Online Session</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure video therapy from the comfort of your home
                      </p>
                      <Badge variant="secondary" className="mt-3">
                        Convenient
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="date" className="text-base font-medium mb-3 block">
                    Select Date
                  </Label>
                  <Input 
                    id="date"
                    type="date" 
                    value={bookingData.date}
                    onChange={(e) => updateBookingData("date", e.target.value)}
                    className="max-w-xs"
                  />
                </div>

                <div>
                  <Label className="text-base font-medium mb-3 block">
                    Available Time Slots
                  </Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={bookingData.time === time ? "default" : "outline"}
                        className={`${
                          bookingData.time === time 
                            ? "bg-primary text-white" 
                            : "border-primary/20 hover:bg-primary/5"
                        }`}
                        onClick={() => updateBookingData("time", time)}
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName"
                      value={bookingData.firstName}
                      onChange={(e) => updateBookingData("firstName", e.target.value)}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName"
                      value={bookingData.lastName}
                      onChange={(e) => updateBookingData("lastName", e.target.value)}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => updateBookingData("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => updateBookingData("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Message (Optional)</Label>
                  <Textarea 
                    id="message"
                    value={bookingData.message}
                    onChange={(e) => updateBookingData("message", e.target.value)}
                    placeholder="Let us know if you have any specific concerns or questions..."
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
              <Button 
                variant="outline" 
                onClick={handleBack}
                disabled={currentStep === 1}
                className="border-primary/20 hover:bg-primary/5"
              >
                Back
              </Button>
              
              {currentStep < 4 ? (
                <Button 
                  onClick={handleNext}
                  disabled={!isStepComplete(currentStep)}
                  className="gradient-calm text-white hover:opacity-90"
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={!isStepComplete(currentStep)}
                  className="gradient-calm text-white hover:opacity-90"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Contact Options */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Prefer to book over the phone or have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Phone className="h-4 w-4 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
