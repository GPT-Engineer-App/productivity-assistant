import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "Welcome",
    content: "Welcome to our app! Let's get started with a quick tour.",
  },
  {
    title: "Profile Setup",
    content: "Set up your profile to get the most out of our app.",
  },
  {
    title: "Connect with Partner",
    content: "Connect with your partner to share and collaborate.",
  },
  {
    title: "Explore Features",
    content: "Explore the various features we offer.",
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{steps[currentStep].content}</p>
          <div className="flex justify-between mt-4">
            <Button onClick={prevStep} disabled={currentStep === 0}>
              Previous
            </Button>
            <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;