import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const ContactPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "",
    urgency: ""
  });
  const [fieldValidation, setFieldValidation] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false
  });
  const totalSteps = 3;
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

    // Validate field
    if (value.trim() !== "") {
      setFieldValidation(prev => ({
        ...prev,
        [field]: true
      }));
    }
  };
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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
  const stepVariants = {
    hidden: {
      opacity: 0,
      x: 50
    },
    visible: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: -50
    }
  };
  return <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              <div className="space-y-6">
                {[{
                icon: MapPin,
                title: "Visit Our Clinic",
                content: "رقم ٤٠٥ - عماره ٨ - عمارات حدائق رامو - طريق النصر- مدينه نصر",
                subtitle: "Mental Health Clinic\nNew Cairo, Egypt",
                action: handleLocationClick,
                buttonText: "View on Map →"
              }, {
                icon: Phone,
                title: "Call Us",
                content: "015 51521419",
                action: handleCallClick
              }, {
                icon: Mail,
                title: "Email Us",
                content: "info@serenityclinic.com\nappointments@serenityclinic.com"
              }, {
                icon: Clock,
                title: "Office Hours",
                content: "Here for you every day, 10 AM – 10 PM"
              }].map((item, index) => <motion.div key={index} className="flex items-start space-x-4 group" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.4 + index * 0.1
              }} whileHover={{
                x: 5
              }}>
                    <motion.div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors" whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}>
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>
                      {item.subtitle && <p className="text-muted-foreground text-sm whitespace-pre-line">
                          {item.subtitle}
                        </p>}
                      {item.action && <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" onClick={item.action}>
                          {item.buttonText}
                        </Button>}
                    </div>
                  </motion.div>)}
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }}>
              <h3 className="text-lg font-medium mb-4">Quick Contact</h3>
              <div className="grid gap-4">
                <motion.div whileHover={{
                scale: 1.02,
                y: -2
              }} whileTap={{
                scale: 0.98
              }}>
                  <Button onClick={handleWhatsAppClick} className="gradient-calm hover:opacity-90 justify-start w-full text-gray-900">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp: 015 51521419
                  </Button>
                </motion.div>
                <motion.div whileHover={{
                scale: 1.02,
                y: -2
              }} whileTap={{
                scale: 0.98
              }}>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5 justify-start w-full" onClick={handleCallClick}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 015 51521419
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 1
          }}>
              <h3 className="text-lg font-medium mb-4">Find Us</h3>
              <motion.div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg h-64 flex items-center justify-center border border-border/50 cursor-pointer transition-all duration-300" onClick={handleLocationClick} whileHover={{
              scale: 1.02,
              background: "linear-gradient(135deg, hsl(var(--primary))/10%, hsl(var(--secondary))/10%)"
            }} whileTap={{
              scale: 0.98
            }}>
                <div className="text-center">
                  <motion.div animate={{
                  y: [0, -5, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  </motion.div>
                  <p className="text-lg font-medium text-foreground mb-2">Our Location</p>
                  <p className="text-sm text-muted-foreground mb-4">New Cairo, Egypt</p>
                  <Button variant="outline" className="border-primary/20">
                    Open in Maps
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Multi-step Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <Card className="border-border/50 shadow-xl bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-light flex items-center">
                  Send Us a Message
                  <motion.div className="ml-2" animate={{
                  rotate: [0, 10, 0]
                }} transition={{
                  duration: 2,
                  repeat: Infinity
                }}>
                    ✨
                  </motion.div>
                </CardTitle>
                
                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Step {currentStep} of {totalSteps}</span>
                    <span>{Math.round(currentStep / totalSteps * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" initial={{
                    width: 0
                  }} animate={{
                    width: `${currentStep / totalSteps * 100}%`
                  }} transition={{
                    duration: 0.5
                  }} />
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{
                    duration: 0.3
                  }} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="relative">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={formData.name} onChange={e => updateForm("name", e.target.value)} placeholder="Enter your full name" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                            {fieldValidation.name && <motion.div initial={{
                          scale: 0,
                          opacity: 0
                        }} animate={{
                          scale: 1,
                          opacity: 1
                        }} className="absolute right-2 top-8 text-green-500">
                                <Sparkles className="h-4 w-4" />
                              </motion.div>}
                          </div>
                          <div className="relative">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" value={formData.email} onChange={e => updateForm("email", e.target.value)} placeholder="your.email@example.com" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                            {fieldValidation.email && <motion.div initial={{
                          scale: 0,
                          opacity: 0
                        }} animate={{
                          scale: 1,
                          opacity: 1
                        }} className="absolute right-2 top-8 text-green-500">
                                <Sparkles className="h-4 w-4" />
                              </motion.div>}
                          </div>
                        </div>
                        <div className="relative">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" value={formData.phone} onChange={e => updateForm("phone", e.target.value)} placeholder="015 12345678" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                          {fieldValidation.phone && <motion.div initial={{
                        scale: 0,
                        opacity: 0
                      }} animate={{
                        scale: 1,
                        opacity: 1
                      }} className="absolute right-2 top-8 text-green-500">
                              <Sparkles className="h-4 w-4" />
                            </motion.div>}
                        </div>
                      </motion.div>}

                    {/* Step 2: Subject & Preferences */}
                    {currentStep === 2 && <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{
                    duration: 0.3
                  }} className="space-y-4">
                        <div className="relative">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" value={formData.subject} onChange={e => updateForm("subject", e.target.value)} placeholder="How can we help you?" required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                          {fieldValidation.subject && <motion.div initial={{
                        scale: 0,
                        opacity: 0
                      }} animate={{
                        scale: 1,
                        opacity: 1
                      }} className="absolute right-2 top-8 text-green-500">
                              <Sparkles className="h-4 w-4" />
                            </motion.div>}
                        </div>
                        
                        <div>
                          <Label>Preferred Contact Method</Label>
                          <div className="grid grid-cols-3 gap-3 mt-2">
                            {["Email", "Phone", "WhatsApp"].map(method => <motion.button key={method} type="button" onClick={() => updateForm("preferredContact", method)} className={`p-3 rounded-lg border transition-all duration-300 ${formData.preferredContact === method ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'}`} whileHover={{
                          scale: 1.02
                        }} whileTap={{
                          scale: 0.98
                        }}>
                                {method}
                              </motion.button>)}
                          </div>
                        </div>

                        <div>
                          <Label>Urgency Level</Label>
                          <div className="grid grid-cols-3 gap-3 mt-2">
                            {["Low", "Medium", "High"].map(level => <motion.button key={level} type="button" onClick={() => updateForm("urgency", level)} className={`p-3 rounded-lg border transition-all duration-300 ${formData.urgency === level ? 'border-primary bg-primary/10 text-primary' : 'border-border hover:border-primary/50'}`} whileHover={{
                          scale: 1.02
                        }} whileTap={{
                          scale: 0.98
                        }}>
                                {level}
                              </motion.button>)}
                          </div>
                        </div>
                      </motion.div>}

                    {/* Step 3: Message */}
                    {currentStep === 3 && <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{
                    duration: 0.3
                  }} className="space-y-4">
                        <div className="relative">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" value={formData.message} onChange={e => updateForm("message", e.target.value)} placeholder="Tell us about your needs or questions..." rows={6} required className="transition-all duration-300 focus:ring-2 focus:ring-primary/20" />
                          {fieldValidation.message && <motion.div initial={{
                        scale: 0,
                        opacity: 0
                      }} animate={{
                        scale: 1,
                        opacity: 1
                      }} className="absolute right-2 top-8 text-green-500">
                              <Sparkles className="h-4 w-4" />
                            </motion.div>}
                        </div>
                        
                        {/* Summary */}
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            Summary
                            <CheckCircle className="h-4 w-4 ml-2 text-green-500" />
                          </h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p><strong>Name:</strong> {formData.name}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Subject:</strong> {formData.subject}</p>
                            <p><strong>Preferred Contact:</strong> {formData.preferredContact}</p>
                          </div>
                        </div>
                      </motion.div>}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                      <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1} className="border-primary/20">
                        Previous
                      </Button>
                    </motion.div>
                    
                    {currentStep < totalSteps ? <motion.div whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        <Button type="button" onClick={nextStep} className="gradient-calm text-gray-900">
                          Next Step
                        </Button>
                      </motion.div> : <motion.div whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }} whileTap={{
                    scale: 0.95
                  }}>
                        <Button type="submit" className="gradient-calm text-white relative overflow-hidden">
                          <motion.div className="absolute inset-0 bg-white/20" initial={{
                        x: "-100%"
                      }} animate={{
                        x: "100%"
                      }} transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2
                      }} />
                          Send Message
                          <Sparkles className="h-4 w-4 ml-2" />
                        </Button>
                      </motion.div>}
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Emergency Notice */}
        <motion.div className="mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <motion.div animate={{
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                  Mental Health Emergency?
                </h3>
              </motion.div>
              <p className="text-red-700 dark:text-red-300 mb-4">
                If you're experiencing a mental health crisis, please don't wait. 
                Get immediate help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button variant="destructive" onClick={handleCallClick}>
                    Call Now: 015 51521419
                  </Button>
                </motion.div>
                <motion.div whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }}>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50" onClick={handleWhatsAppClick}>
                    WhatsApp Emergency
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>;
};
export default ContactPage;