
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-balance mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
              Policy
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Your privacy and confidentiality are our top priorities. Learn how we protect your personal information.
          </p>
        </div>

        <Card className="border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-light">
              Serenity Psychiatric Clinic Privacy Policy
            </CardTitle>
            <p className="text-muted-foreground">
              Last updated: March 1, 2024
            </p>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Serenity Psychiatric Clinic, we are committed to protecting your privacy and maintaining the 
                confidentiality of your personal health information. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information in accordance with HIPAA (Health Insurance Portability 
                and Accountability Act) and other applicable privacy laws.
              </p>
            </div>

            <Separator />

            {/* Information We Collect */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name, contact information, and demographic details</li>
                    <li>Insurance information and payment details</li>
                    <li>Emergency contact information</li>
                    <li>Medical history and current medications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Health Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Mental health assessments and diagnoses</li>
                    <li>Treatment plans and therapy notes</li>
                    <li>Medication prescriptions and monitoring</li>
                    <li>Progress reports and outcome measures</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Website usage data and cookies</li>
                    <li>Device information and IP addresses</li>
                    <li>Appointment scheduling and communication logs</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Treatment Purposes</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Providing psychiatric and psychological services</li>
                    <li>Coordinating care with other healthcare providers</li>
                    <li>Monitoring treatment progress and outcomes</li>
                    <li>Prescribing and managing medications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Administrative Purposes</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Scheduling appointments and sending reminders</li>
                    <li>Processing insurance claims and payments</li>
                    <li>Maintaining medical records</li>
                    <li>Quality improvement initiatives</li>
                  </ul>
                </div>
              </div>
            </div>

            <Separator />

            {/* Information Sharing */}
            <div>
              <h2 className="text-xl font-semibold mb-4">When We Share Information</h2>
              <p className="text-muted-foreground mb-4">
                We only share your information in specific circumstances and always in accordance with HIPAA regulations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With your written authorization</li>
                <li>For treatment coordination with other healthcare providers</li>
                <li>For payment and insurance purposes</li>
                <li>When required by law or court order</li>
                <li>To prevent serious harm to you or others</li>
                <li>For public health and safety purposes as required by law</li>
              </ul>
            </div>

            <Separator />

            {/* Your Rights */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Under HIPAA, you have the following rights regarding your health information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Right to access and obtain copies of your medical records</li>
                <li>Right to request amendments to your health information</li>
                <li>Right to request restrictions on how we use or disclose your information</li>
                <li>Right to request confidential communications</li>
                <li>Right to file a complaint if you believe your privacy rights have been violated</li>
                <li>Right to receive a copy of this Privacy Notice</li>
              </ul>
            </div>

            <Separator />

            {/* Security Measures */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Security Measures</h2>
              <p className="text-muted-foreground mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Encrypted electronic health records systems</li>
                <li>Secure physical storage of paper records</li>
                <li>Access controls and user authentication</li>
                <li>Regular staff training on privacy and security</li>
                <li>Secure communication channels for telehealth services</li>
                <li>Regular security audits and assessments</li>
              </ul>
            </div>

            <Separator />

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Our Privacy Officer</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Privacy Officer:
              </p>
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <p><strong>Privacy Officer:</strong> Dr. Sarah Mitchell</p>
                <p><strong>Email:</strong> privacy@serenityclinic.com</p>
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Wellness Boulevard, Peaceful Gardens, CA 90210</p>
              </div>
            </div>

            <Separator />

            {/* Updates */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Policy Updates</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of any material changes by posting the updated policy on 
                our website and providing you with a copy during your next visit. The effective date at the 
                top of this policy indicates when it was last revised.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;
