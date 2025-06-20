
import FormField from "./FormField";
import { Badge } from "@/components/ui/badge";

const PreferencesSection = () => {
  const casteOptions = [
    "Open to specific castes",
    "Any caste",
    "Same caste only",
    "Specific castes only"
  ];

  const horoscopeOptions = [
    "Flexible",
    "Must match",
    "Not important",
    "Preferred but not mandatory"
  ];

  const visaOptions = [
    "H1B", "Green Card", "OPT", "L1", "Other",
    "B1", "B2", "F1", "J1", "E1", "E2", "O1", "P1",
    "TN", "H2A", "H2B", "R1", "T1", "U1", "K1",
    "K3", "V"
  ];

  const locationOptions = [
    "India", "Germany", "United States", "Canada", "Australia", "UK"
  ];

  const kidsOptions = [
    "Yes", "No", "Maybe", "Open to discussion"
  ];

  const weddingOptions = [
    "Grand Affair: Large guest list including...",
    "Intimate: Close family and friends",
    "Simple: Minimal ceremony",
    "Traditional: Full customs and rituals"
  ];

  const financialOptions = [
    "No financial support needed",
    "Minimal support expected",
    "Regular support expected",
    "Full support expected"
  ];

  const giftOptions = [
    "Strictly No Gifts",
    "Simple gifts only",
    "Traditional gifts welcome",
    "Open to all gifts"
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Caste Preference" 
          options={casteOptions}
          defaultValue="Open to specific castes"
        />
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Specific Castes</label>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              INTERCASTE
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
              ARYA VYSYA
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Horoscope Preference" 
          options={horoscopeOptions}
          defaultValue="Flexible"
        />
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Location Preference</label>
          <div className="flex gap-2 flex-wrap">
            {locationOptions.slice(0, 3).map((location) => (
              <Badge key={location} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {location}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-gray-700">Visa Preference</label>
        <div className="flex gap-2 flex-wrap">
          {visaOptions.map((visa) => (
            <Badge 
              key={visa} 
              variant={visa === "H1B" ? "default" : "outline"}
              className={visa === "H1B" ? "bg-purple-600 text-white" : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"}
            >
              {visa}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Kids in Future" 
          options={kidsOptions}
          defaultValue="Yes"
        />
        
        <FormField 
          label="Wedding Expectation" 
          options={weddingOptions}
          defaultValue="Grand Affair: Large guest list including..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField 
          label="Financial Support to Parents" 
          options={financialOptions}
          defaultValue="No financial support needed"
        />
        
        <FormField 
          label="Opinion on Gifts" 
          options={giftOptions}
          defaultValue="Strictly No Gifts"
        />
      </div>
    </div>
  );
};

export default PreferencesSection;
