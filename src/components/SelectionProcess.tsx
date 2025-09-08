import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Users, GraduationCap, CheckCircle, FileText, Search, UserCheck } from "lucide-react";

const SelectionProcess = () => {
  const targetBeneficiaries = [
    "Ages 16-26",
    "Orphans and financially disadvantaged youth",
    "Must demonstrate academic potential and Christian values",
    "Must have guardian consent and support"
  ];

  const selectionSteps = [
    {
      step: 1,
      title: "Registration & Eligibility",
      description: "Residents of Delta/Edo State with 100L admission into UNIBEN/DELSU",
      icon: FileText
    },
    {
      step: 2,
      title: "CBT Examination",
      description: "All applicants must sit for and pass the Computer-Based Test",
      icon: GraduationCap
    },
    {
      step: 3,
      title: "Screening Process",
      description: "Based on Christian values, financial background, motivation, and skills",
      icon: Search
    },
    {
      step: 4,
      title: "Due Diligence",
      description: "Comprehensive background checks on shortlisted candidates",
      icon: CheckCircle
    },
    {
      step: 5,
      title: "Final Selection & Onboarding",
      description: "Program orientation and introduction for successful candidates",
      icon: UserCheck
    }
  ];

  return (
    <section id="selection" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Target Beneficiaries */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Who Can Apply?
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center text-2xl">
                <Users className="mr-3 h-6 w-6 text-accent" />
                Target Beneficiaries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {targetBeneficiaries.map((criteria, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-lg">{criteria}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Selection Process */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selection Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive 5-step selection process ensures we identify the most deserving 
            candidates who align with our values and mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {selectionSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Transform Your Future?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join the ranks of mighty men and women who are making a difference in their communities.
                Your journey of transformation starts here.
              </p>
              <Button 
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12 py-6 text-lg font-semibold rounded-full"
              >
                Start Your Application
                <GraduationCap className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;