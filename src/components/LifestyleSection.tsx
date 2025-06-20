
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

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Eating Habits" 
          options={eatingOptions}
          defaultValue="Vegetarian"
          variant="purple"
        />
        
        <FormField 
          label="Drinking" 
          options={drinkingOptions}
          defaultValue="Never"
          variant="purple"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Smoking" 
          options={smokingOptions}
          defaultValue="Never"
          variant="purple"
        />
        
        <FormField 
          label="Credit Score" 
          options={creditOptions}
          defaultValue="Excellent (750+)"
          variant="red"
        />
      </div>

      {/* Additional lifestyle preferences can be added here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Exercise Routine</label>
          <FormField 
            options={["Daily", "Weekly", "Occasionally", "Rarely", "Never"]}
            defaultValue="Weekly"
            hideLabel
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Diet Type</label>
          <FormField 
            options={["Balanced", "High Protein", "Low Carb", "Keto", "Mediterranean"]}
            defaultValue="Balanced"
            hideLabel
          />
        </div>
      </div>
    </div>
  );
};

export default LifestyleSection;
