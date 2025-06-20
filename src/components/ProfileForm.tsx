
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import PreferencesSection from "./PreferencesSection";
import LifestyleSection from "./LifestyleSection";
import HoroscopeSection from "./HoroscopeSection";

const ProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { id: 0, title: "Preferences", component: PreferencesSection },
    { id: 1, title: "Lifestyle", component: LifestyleSection },
    { id: 2, title: "Horoscope", component: HoroscopeSection },
  ];

  const handleStepClick = (stepIndex: number) => {
    // Only allow access to current step or completed steps
    if (stepIndex <= Math.max(currentStep, Math.max(...completedSteps, -1) + 1)) {
      setCurrentStep(stepIndex);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps(prev => [...prev.filter(s => s !== currentStep), currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepAccessible = (stepIndex: number) => {
    return stepIndex <= Math.max(currentStep, Math.max(...completedSteps, -1) + 1);
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Card className="shadow-xl border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
        <CardTitle className="text-xl font-semibold">Profile Information</CardTitle>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Step Navigation */}
        <div className="bg-gray-50 border-b px-6 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`flex items-center cursor-pointer ${
                    isStepAccessible(index) ? 'hover:opacity-80' : 'cursor-not-allowed opacity-50'
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                    ${completedSteps.includes(index) 
                      ? 'bg-green-500 text-white' 
                      : currentStep === index 
                        ? 'bg-purple-600 text-white' 
                        : isStepAccessible(index)
                          ? 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                          : 'bg-gray-100 text-gray-400'
                    }
                  `}>
                    {completedSteps.includes(index) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep === index ? 'text-purple-700' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-gray-400 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="min-h-[500px]">
          <CurrentStepComponent />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          
          <div className="flex items-center space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentStep
                    ? 'bg-purple-600'
                    : completedSteps.includes(index)
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              currentStep === steps.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
