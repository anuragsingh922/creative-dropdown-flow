
import FormField from "./FormField";

const LifestyleSection = () => {
  const eatingOptions = [
    "Vegetarian", "Non-Vegetarian", "Vegan", "Jain Vegetarian", "Eggetarian"
  ];

  const drinkingOptions = [
    "Never", "Socially", "Occasionally", "Regularly", "Trying to quit"
  ];

  const smokingOptions = [
    "Never", "Socially", "Occasionally", "Regularly", "Trying to quit"
  ];

  const creditOptions = [
    "Excellent (750+)", "Good (700-749)", "Fair (650-699)", "Poor (below 650)", "No Credit History"
  ];

  const exerciseOptions = ["Daily", "Weekly", "Occasionally", "Rarely", "Never"];
  const dietOptions = ["Balanced", "High Protein", "Low Carb", "Keto", "Mediterranean"];
  const sleepOptions = ["Early Bird", "Night Owl", "Flexible", "Irregular"];
  const socialOptions = ["Very Social", "Moderately Social", "Selective", "Introvert"];

  return (
    <div className="p-8 space-y-10 bg-gradient-to-br from-emerald-50 to-white">
      {/* Health & Habits */}
      <div className="space-y-6">
        <div className="border-l-4 border-emerald-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Health & Personal Habits</h3>
          <p className="text-gray-600">Share your daily habits and health preferences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm space-y-6">
            <FormField 
              label="Eating Habits" 
              options={eatingOptions}
              defaultValue="Vegetarian"
              variant="default"
            />
            
            <FormField 
              label="Drinking" 
              options={drinkingOptions}
              defaultValue="Never"
              variant="default"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm space-y-6">
            <FormField 
              label="Smoking" 
              options={smokingOptions}
              defaultValue="Never"
              variant="default"
            />
            
            <FormField 
              label="Credit Score" 
              options={creditOptions}
              defaultValue="Excellent (750+)"
              variant="red"
            />
          </div>
        </div>
      </div>

      {/* Wellness & Fitness */}
      <div className="space-y-6 pt-6 border-t border-emerald-100">
        <div className="border-l-4 border-emerald-500 pl-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Wellness & Fitness</h3>
          <p className="text-gray-600">Tell us about your fitness routine and diet preferences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm space-y-6">
            <FormField 
              label="Exercise Routine"
              options={exerciseOptions}
              defaultValue="Weekly"
            />
            
            <FormField 
              label="Sleep Schedule"
              options={sleepOptions}
              defaultValue="Early Bird"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm space-y-6">
            <FormField 
              label="Diet Type"
              options={dietOptions}
              defaultValue="Balanced"
            />
            
            <FormField 
              label="Social Nature"
              options={socialOptions}
              defaultValue="Moderately Social"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleSection;
